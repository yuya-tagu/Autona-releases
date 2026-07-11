# Autona

**格闘ゲーム大会の配信支援デスクトップアプリ**
スコアボード管理・大会データ連携・統計表示・OBS 用オーバーレイ出力をひとつに統合します。

*A streaming companion for fighting-game tournaments: scoreboard control, tournament data, stats, and OBS overlays.*

> このリポジトリは **公開配布物（Windows ビルド）専用** です。ソースコードは別の private リポジトリで管理しています。
> *This repository hosts the public Windows binaries only.*

[![最新リリース](https://img.shields.io/github/v/release/yuya-tagu/Autona-releases?label=latest)](https://github.com/yuya-tagu/Autona-releases/releases/latest)

---

## ダウンロード / Download

最新版の `release-windows.zip` を [**Releases**](https://github.com/yuya-tagu/Autona-releases/releases/latest) から取得してください。

### 動作環境

- Windows 10 / 11（64-bit）
- 空き容量 約 600 MB（描画用の Qt WebEngine ランタイムを同梱しているため）
- 追加のランタイムインストールは不要です

### インストールと起動

1. `release-windows.zip` をダウンロードして展開する
2. 展開された `Autona` フォルダ内の **`Autona.exe`** を実行する

初回起動時、設定や選手データは空の状態から自動生成されます。

> **重要**: `Autona.exe` と同じ階層にある **`_internal/` フォルダは必須** です。
> ランチャ単体では起動しません。移動・コピーは必ずフォルダごと行ってください。
>
> *`Autona.exe` needs the `_internal/` folder beside it — move/copy the whole folder, never the exe alone.*

### 自動アップデート

アプリ内アップデーターが本リポジトリの最新リリースを確認し、ワンクリックで更新できます。更新はアプリ終了後に外部ヘルパーが安全に適用するため、Qt ランタイムが変わる更新も自動で行えます。

---

## 主な機能 / Features

**配信・スコアボード**

- **スコアボード管理** — チーム/選手・スコア・キャラ選択をリアルタイム編集
- **配信オーバーレイ** — OBS 等で使える HTML アニメーション付きテンプレート
- **サムネイル生成** — 大会サムネイル画像の自動生成

**大会データ**

- **トーナメント連携** — Start.gg からブラケット・対戦表・参加者を取得
- **統計表示** — H2H（直接対決）・Last Sets・Tournament History
- **ローカル選手 DB** — タグ・国籍・メインキャラを保存

**運用支援**

- **Web リモート操作** — 同一ネットワークのブラウザからスコアボードを操作
- **グローバルホットキー** — キーボードからスコアを直接操作

---

## 利用区分・お問い合わせ / Usage & Business Inquiries

| 利用形態 | 条件 |
|---------|------|
| **個人・コミュニティによる利用**<br>大会運営・配信など。参加費・入場料の徴収や、配信・動画の収益化を含む | **無償**でご利用いただけます |
| **法人・事業としての利用**<br>企業としての利用、業務・受託・興行の一環としての利用 | 事前に**お問い合わせ**ください |

個人・コミュニティ大会での参加費徴収や配信の収益化に、お問い合わせは不要です。法人・事業としての利用も一律にお断りするものではなく、無償で許諾する場合があります。まずはお気軽にご相談ください。詳細は配布物同梱の利用規約 `TERMS.md` を参照してください。

*Free for personal and community use, including entry fees and monetized streams. For corporate or business use, please contact us in advance — free licenses are often granted. See the bundled `TERMS.md` for details.*

開発元の **HiveeWorks** は、大会・イベントの運営支援や配信サポートも行っています。法人でのご利用の際は、導入支援・運用サポートを含めてご案内できます。

**お問い合わせ窓口 / Contact**: [公式 Discord コミュニティ](https://discord.gg/yAFAmhaUqn)

---

## ライセンス / License

| 対象 | ライセンス |
|------|-----------|
| 上流 [TournamentStreamHelper](https://github.com/joaorb64/TournamentStreamHelper)（© João Ribeiro Bezerra）由来の部分 | MIT License |
| Autona 固有の部分 | © 2026 taguyan, All rights reserved（利用条件は `TERMS.md`） |
| Qt / PySide6 | LGPL v3（動的リンク。`_internal/` 内のライブラリは利用者が差し替え可能） |

同梱する第三者ソフトウェアのライセンスは `THIRD-PARTY-NOTICES.md` と `licenses/` フォルダに、素材（フォント・国旗画像等）の出典は `ATTRIBUTIONS.md` に集約しています。

*Portions derived from TournamentStreamHelper are MIT-licensed; Autona-specific portions are proprietary (see `TERMS.md`). Qt / PySide6 is used under the LGPL v3 (dynamically linked).*

## 謝辞 / Acknowledgements

設計・UX の着想にあたり、同じく格闘ゲーム大会向けスコアボードツールである [LatteCon](https://github.com/KameLatte0313/LatteCon)（© Kamelatte） [BraceBracket](https://bracebracket.app/)を参考にしました（着想のみで、コード・素材の流用はありません）。
