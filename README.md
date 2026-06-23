# Autona

格闘ゲーム大会の配信支援デスクトップアプリ — スコアボード管理・統計表示・OBS 用オーバーレイ出力を統合。

*A streaming companion for fighting-game tournaments: scoreboard control, stats, and OBS overlays.*

このリポジトリは **公開配布物（Windows ビルド）専用** です。ソースコードは別リポジトリ（private）で管理しています。
*This repository hosts the public Windows binaries only. Source code is kept in a separate private repository.*

---

## ダウンロード / Download

最新版は [**Releases**](https://github.com/yuya-tagu/Autona-releases/releases/latest) から `release-windows.zip` を取得してください。

[![最新リリース](https://img.shields.io/github/v/release/yuya-tagu/Autona-releases?label=latest)](https://github.com/yuya-tagu/Autona-releases/releases/latest)

## 動作環境 / Requirements

- Windows 10 / 11（64-bit）
- 展開後の容量はおよそ 600 MB（描画用の Qt WebEngine ランタイムを同梱しているため）

## インストールと起動 / Install & Run

1. `release-windows.zip` をダウンロードして展開する
2. 展開された `Autona` フォルダ内の **`Autona.exe`** を実行する

> **重要**: `Autona.exe` と同じ階層にある **`_internal/` フォルダは必須** です。
> ランチャ単体では起動しません。フォルダごと移動・コピーしてください（中身を分離しない）。
>
> *`Autona.exe` needs the `_internal/` folder beside it — move/copy the whole folder, never the exe alone.*

初回起動時、設定や選手データは空の状態から自動生成されます。

## 自動アップデート / Auto-update

アプリ内アップデーターが本リポジトリの最新リリースを確認し、ワンクリックで更新できます。

- 通常の更新（同一 Qt ビルド間）は、その場で差し替えて再起動します
- Qt ランタイムが変わるメジャー更新では、自動更新を停止し「手動で再インストール」を案内します（描画リソースの安全な置換のため）

## 主な機能 / Features

- **スコアボード管理** — チーム/選手・スコア・キャラ選択をリアルタイム編集
- **配信オーバーレイ** — OBS 等で使える HTML アニメーション付きテンプレート
- **トーナメント連携** — Start.gg からブラケット・対戦表・参加者を取得
- **Web リモート操作** — ブラウザからスコアボードを操作
- **統計表示** — H2H（直接対決）・Last Sets・Tournament History
- **ローカル選手 DB** — タグ・国籍・メインキャラを保存
- **グローバルホットキー** — キーボードからスコア操作
- **サムネイル生成** — 大会サムネイル画像の自動生成
- **多言語対応** — 9 言語（en / ja / de / pt-BR / es / fr / zh-CN / zh-TW / it）

## ライセンス / License

MIT License。本ソフトウェアは [TournamentStreamHelper](https://github.com/joaorb64/TournamentStreamHelper)（MIT, © João Ribeiro Bezerra）を起点に構築したプロジェクトで、一部に TSH 由来の構成要素・素材を含みます。
配布物に同梱の `LICENSE` および第三者素材クレジット `ATTRIBUTIONS.md` を参照してください。

## 謝辞 / Acknowledgements

設計・UX の着想にあたり、同じく格闘ゲーム大会向けスコアボードツールである [LatteCon](https://github.com/KameLatte0313/LatteCon)（© Kamelatte）を参考にしました（着想のみ。コード・素材の流用はありません）。
