#!/usr/bin/env node
// Builds the Discord post from an Autona release body (the notes passed to
// `gh release create --notes-file`).
//
// CLI: node release-notes.mjs <tag> <release-url> < body.md
//   Prints the message to stdout. Prints nothing (exit 0) when there is nothing to post.

import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

export const DISCORD_LIMIT = 2000;

/** Only app releases (v1.2.3) are announced; worker releases (worker-v*) are not. */
export function isAppTag(tag) {
  return /^v\d+\.\d+\.\d+$/.test(tag ?? '');
}

/**
 * Keeps the user-facing part of the release body.
 * Drops: the "## Autona vX.Y.Z" title (replaced by ours), the legacy manual-update
 * blockquote (only for v1.0.7 / v1.1.0 users; the release page still has it) and the
 * "Qt-Build:" marker read by nobody but old tooling.
 * @returns {string[]} lines, with runs of blank lines collapsed
 */
export function extractLines(body) {
  const lines = (body ?? '')
    .replace(/\r\n?/g, '\n')
    .replace(/<!--[\s\S]*?-->/g, '')
    .split('\n')
    .map((l) => l.trimEnd())
    .filter((l) => !/^#\s|^##\s+Autona\s+v/i.test(l))
    .filter((l) => !/^>/.test(l))
    .filter((l) => !/^Qt-Build:/.test(l));

  const out = [];
  for (const line of lines) {
    if (line === '' && (out.length === 0 || out.at(-1) === '')) continue;
    out.push(line);
  }
  while (out.at(-1) === '') out.pop();
  return out;
}

/**
 * Builds the post. Returns null when the body has nothing to announce.
 * Over the limit, lines are dropped from the end and the reader is sent to the
 * release page (which always has the full notes).
 */
export function buildMessage({ tag, url, body, limit = DISCORD_LIMIT }) {
  const lines = extractLines(body);
  if (lines.length === 0) return null;

  const title = `## Autona アップデート（${tag}）`;
  // <...> keeps Discord from unfurling a large GitHub card under the post
  const footer = `ダウンロード・詳しい内容: <${url}>`;
  const render = (ls, more) =>
    [title, '', ...ls, '', more ? `…（続きはリリースページ）\n${footer}` : footer].join('\n');

  const kept = [...lines];
  let message = render(kept, false);
  while (message.length > limit && kept.length > 0) {
    kept.pop();
    while (kept.at(-1) === '' || /^#{1,6}\s/.test(kept.at(-1) ?? '')) kept.pop();
    message = render(kept, true);
  }
  if (message.length > limit) message = `${message.slice(0, limit - 1)}…`;
  return message;
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  const [tag, url] = process.argv.slice(2);
  if (!tag || !url) {
    console.error('usage: release-notes.mjs <tag> <release-url> < body.md');
    process.exit(2);
  }
  const message = buildMessage({ tag, url, body: readFileSync(0, 'utf8') });
  if (message) process.stdout.write(`${message}\n`);
}
