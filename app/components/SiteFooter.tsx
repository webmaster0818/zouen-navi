import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-[#15803D] text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-3">🌿 造園ナビ</h3>
            <p className="text-green-200 text-sm leading-relaxed">
              庭づくりのプロを見つける総合ガイド。剪定・造園・外構のおすすめ業者を徹底比較。
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-[#F59E0B]">業者ランキング</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li><Link href="/ranking/" className="hover:text-white transition-colors">造園業者ランキング</Link></li>
              <li><Link href="/ranking/pruning/" className="hover:text-white transition-colors">剪定専門ランキング</Link></li>
              <li><Link href="/company/oniwa-madoguchi/" className="hover:text-white transition-colors">お庭の窓口</Link></li>
              <li><Link href="/company/oniwa-master/" className="hover:text-white transition-colors">お庭マスター</Link></li>
              <li><Link href="/company/oniwa-110/" className="hover:text-white transition-colors">お庭110番</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-[#F59E0B]">費用・料金</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li><Link href="/cost/price/" className="hover:text-white transition-colors">庭工事の料金相場</Link></li>
              <li><Link href="/cost/pruning-price/" className="hover:text-white transition-colors">剪定費用ガイド</Link></li>
              <li><Link href="/cost/diy/" className="hover:text-white transition-colors">DIY庭づくりガイド</Link></li>
              <li><Link href="/service/pruning/" className="hover:text-white transition-colors">剪定完全ガイド</Link></li>
              <li><Link href="/service/felling/" className="hover:text-white transition-colors">伐採費用相場</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-[#F59E0B]">庭づくりガイド</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li><Link href="/plant/symbol-tree/" className="hover:text-white transition-colors">シンボルツリー</Link></li>
              <li><Link href="/plant/hedge/" className="hover:text-white transition-colors">生垣の作り方</Link></li>
              <li><Link href="/plant/flower-bed/" className="hover:text-white transition-colors">花壇の作り方</Link></li>
              <li><Link href="/service/japanese-garden/" className="hover:text-white transition-colors">和庭園の作り方</Link></li>
              <li><Link href="/service/maintenance/" className="hover:text-white transition-colors">年間管理カレンダー</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-green-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-green-300">
          <p>© 2024 造園ナビ All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy/" className="hover:text-white transition-colors">プライバシーポリシー</Link>
            <Link href="/terms/" className="hover:text-white transition-colors">利用規約</Link>
            <Link href="/about/" className="hover:text-white transition-colors">運営者情報</Link>
          </div>
        </div>
        <p className="text-xs text-green-400 mt-3 text-center">
          ※当サイトは一部広告・アフィリエイトリンクを含みます。掲載情報は編集部が独自に調査・執筆しています。
        </p>
      </div>
    </footer>
  );
}
