@AGENTS.md

## 作業ログ
- 2026-10-12: エリア8市（川口=生け垣補助/水戸=風致地区/西宮/大分/富山/長野/高松/倉敷）＋Know4本（fruit-trees/moss-garden/garden-safety/spraying）追加。全38市・ガイド20本、sitemap 99URL。川口・水戸は市公式（補助パンフ・風致地区条例）で一次確認済み。deploy先は ../zouen-navi-deploy（独自.gitあり）。projects/zouen-navi-deploy はworkspace直下gitの配下なので使わない。
- 未解決: companies.json と reviews.json の公式URL食い違い6社（okina判断待ち）。
- 2026-10-17: ガイド10本追加（草刈り/生垣植え付け/庭木植え付け/冬/松/大きすぎる木/枯れ判定/切り株/シルバー人材/樹木医）。新規ガイドは app/components/GuideParts.tsx の部品で書く。ガイド計30本・sitemap 109URL。site fbb9d9c / deploy 47cf7ca。
- 2026-10-22: ガイド guide/garden-cleaning（庭の掃除を業者に頼むとき・料金なし）追加。「庭 掃除 業者」は9/23〜10/20で1表示10位・着地 /area/osaka/ のみ＝受け皿なしのため新規。出典 zsjc 発注Q&A・消費者庁188（10/22確認）。被リンク：fallen-leaves/green-waste/grass-cutting/silver-center/area/osaka＋フッター。sitemap 110URL。CF Pagesのビルドが30分以上in_progressのまま止まることがあった。
