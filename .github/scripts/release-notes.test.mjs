// Run: node --test .github/scripts/release-notes.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildMessage, extractLines, isAppTag } from './release-notes.mjs';

const BODY = `## Autona v2.3.0\r
\r
### 新機能・改善\r
\r
- **A**: a を追加しました\r
  - 詳細\r
\r
### アップデート時の注意\r
\r
- 自動更新でそのまま更新できます\r
\r
> **v1.0.7 / v1.1.0 をご利用の方へ**: 手動で\r
> 更新してください\r
\r
Qt-Build: 6.11.0\r
`;

test('isAppTag accepts only app releases', () => {
  assert.equal(isAppTag('v2.3.0'), true);
  assert.equal(isAppTag('worker-v0.4.0'), false);
  assert.equal(isAppTag('v2.3.0-rc1'), false);
});

test('extractLines drops title, legacy blockquote and Qt-Build marker', () => {
  assert.deepEqual(extractLines(BODY), [
    '### 新機能・改善',
    '',
    '- **A**: a を追加しました',
    '  - 詳細',
    '',
    '### アップデート時の注意',
    '',
    '- 自動更新でそのまま更新できます',
  ]);
});

test('buildMessage adds title and release link', () => {
  const m = buildMessage({ tag: 'v2.3.0', url: 'https://example.com/r', body: BODY });
  assert.match(m, /^## Autona アップデート（v2\.3\.0）\n\n### 新機能・改善/);
  assert.match(m, /\n\nダウンロード・詳しい内容: <https:\/\/example\.com\/r>$/);
  assert.doesNotMatch(m, /Qt-Build|v1\.0\.7/);
});

test('buildMessage returns null for an empty body', () => {
  assert.equal(buildMessage({ tag: 'v1.0.0', url: 'u', body: 'Qt-Build: 6.11.0\n' }), null);
});

test('buildMessage trims from the end to fit and points to the release page', () => {
  const body = Array.from({ length: 200 }, (_, i) => `- 変更 ${i} を追加しました`).join('\n');
  const m = buildMessage({ tag: 'v9.9.9', url: 'https://example.com/r', body, limit: 300 });
  assert.ok(m.length <= 300);
  assert.match(m, /- 変更 0 を追加しました/);
  assert.match(m, /…（続きはリリースページ）\nダウンロード・詳しい内容: <https:\/\/example\.com\/r>$/);
});

test('trimming does not leave a dangling section heading', () => {
  const body = `### A\n- ${'あ'.repeat(50)}\n\n### B\n- ${'い'.repeat(200)}`;
  const m = buildMessage({ tag: 'v1.0.0', url: 'u', body, limit: 150 });
  assert.doesNotMatch(m, /### B/);
  assert.match(m, /### A/);
});
