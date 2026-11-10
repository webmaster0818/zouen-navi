import Link from "next/link";

export const AREAS = [
  {
    slug: "tokyo",
    city: "東京",
    label: "東京",
    angle: "狭小地・搬出経路の確認",
  },
  {
    slug: "osaka",
    city: "大阪",
    label: "大阪",
    angle: "個人宅・管理組合・店舗それぞれの依頼方法",
  },
  {
    slug: "nagoya",
    city: "名古屋",
    label: "名古屋",
    angle: "自社施工型と紹介型の見分け方",
  },
  {
    slug: "yokohama",
    city: "横浜",
    label: "横浜",
    angle: "高低差のある庭と保険・保証",
  },
  {
    slug: "sapporo",
    city: "札幌",
    label: "札幌",
    angle: "積雪を考慮した年間計画",
  },
  {
    slug: "fukuoka",
    city: "福岡",
    label: "福岡",
    angle: "依頼内容の伝え方と仕上がりの共有",
  },
  {
    slug: "sendai",
    city: "仙台",
    label: "仙台",
    angle: "立ち会いができない場合の依頼方法",
  },
  {
    slug: "kobe",
    city: "神戸",
    label: "神戸",
    angle: "見積書の読み方と書面の確認",
  },
  {
    slug: "kyoto",
    city: "京都",
    label: "京都",
    angle: "仕上がりの方針と継続管理",
  },
  {
    slug: "hiroshima",
    city: "広島",
    label: "広島",
    angle: "依頼内容の整理と優先順位",
  },
  {
    slug: "saitama",
    city: "さいたま",
    label: "さいたま",
    angle: "作業日の近隣への配慮と段取り",
  },
  {
    slug: "chiba",
    city: "千葉",
    label: "千葉",
    angle: "資格と許可の確認方法",
  },
  {
    slug: "kawasaki",
    city: "川崎",
    label: "川崎",
    angle: "完了時の確認と手直しの依頼方法",
  },
  {
    slug: "kitakyushu",
    city: "北九州",
    label: "北九州",
    angle: "日程の決め方と天候による順延",
  },
  {
    slug: "niigata",
    city: "新潟",
    label: "新潟",
    angle: "意思決定者と費用負担者の確認",
  },
  {
    slug: "shizuoka",
    city: "静岡",
    label: "静岡",
    angle: "問い合わせ手段と最初のやり取り",
  },
  {
    slug: "hamamatsu",
    city: "浜松",
    label: "浜松",
    angle: "作業日までの受け入れ準備",
  },
  {
    slug: "sagamihara",
    city: "相模原",
    label: "相模原",
    angle: "作業当日の立ち会い方",
  },
  {
    slug: "sakai",
    city: "堺",
    label: "堺",
    angle: "認識の相違に備える記録の残し方",
  },
  {
    slug: "okayama",
    city: "岡山",
    label: "岡山",
    angle: "相見積もりの条件の揃え方と断り方",
  },
  {
    slug: "kumamoto",
    city: "熊本",
    label: "熊本",
    angle: "支払いの方法と契約が決まる時点",
  },
  {
    slug: "kagoshima",
    city: "鹿児島",
    label: "鹿児島",
    angle: "予算から範囲を組み立てる",
  },
  {
    slug: "funabashi",
    city: "船橋",
    label: "船橋",
    angle: "現地調査の前に写真で状況を伝える方法",
  },
  {
    slug: "utsunomiya",
    city: "宇都宮",
    label: "宇都宮",
    angle: "年間契約とスポット依頼の選び方",
  },
  {
    slug: "kanazawa",
    city: "金沢",
    label: "金沢",
    angle: "依頼先を変更する際の引き継ぎ",
  },
  {
    slug: "matsuyama",
    city: "松山",
    label: "松山",
    angle: "依頼後の取り消し・日程変更",
  },
  {
    slug: "himeji",
    city: "姫路",
    label: "姫路",
    angle: "1社にまとめて依頼するか分けて依頼するか",
  },
  {
    slug: "nara",
    city: "奈良",
    label: "奈良",
    angle: "家族に代わって手配する場合の手順",
  },
  {
    slug: "gifu",
    city: "岐阜",
    label: "岐阜",
    angle: "返信がない場合の対応",
  },
  {
    slug: "nagasaki",
    city: "長崎",
    label: "長崎",
    angle: "口コミと実績の読み方",
  },
  {
    slug: "kawaguchi",
    city: "川口",
    label: "川口",
    angle: "生垣・緑化の補助制度を利用した依頼",
  },
  {
    slug: "mito",
    city: "水戸",
    label: "水戸",
    angle: "風致地区で伐採・庭の改修を行う前の確認",
  },
  {
    slug: "nishinomiya",
    city: "西宮",
    label: "西宮",
    angle: "期日から逆算した依頼の進め方",
  },
  {
    slug: "oita",
    city: "大分",
    label: "大分",
    angle: "植栽後の保証とアフターサービスの確認方法",
  },
  {
    slug: "toyama",
    city: "富山",
    label: "富山",
    angle: "説明・見積もりで使われる作業用語",
  },
  {
    slug: "nagano",
    city: "長野",
    label: "長野",
    angle: "事業用・賃貸物件の庭を依頼する際の書類",
  },
  {
    slug: "takamatsu",
    city: "高松",
    label: "高松",
    angle: "初めて依頼する際の全体の流れ",
  },
  {
    slug: "kurashiki",
    city: "倉敷",
    label: "倉敷",
    angle: "前の住人から庭を引き継いだ場合",
  },
] as const;

export type AreaSlug = (typeof AREAS)[number]["slug"];

/** 市の生垣・緑化・保存樹の助成を扱う子ページ（2026-11-01 追加）。親の市ページから案内する。 */
export const AREA_SUBSIDY_PAGES: Partial<Record<AreaSlug, { href: string; label: string }>> = {
  sendai: { href: "/area/sendai/ikegaki-josei/", label: "仙台市の生垣づくり助成" },
  saitama: { href: "/area/saitama/ikegaki-josei/", label: "さいたま市の生け垣助成" },
  yokohama: { href: "/area/yokohama/ikegaki-josei/", label: "横浜市の生垣設置助成" },
  kawasaki: { href: "/area/kawasaki/ikegaki-josei/", label: "川崎市の生垣づくり助成" },
  sagamihara: { href: "/area/sagamihara/ikegaki-josei/", label: "相模原市の生垣設置奨励金" },
  niigata: { href: "/area/niigata/ryokuchi-kyotei/", label: "新潟市の生垣等設置費補助金" },
  nagoya: { href: "/area/nagoya/ryokka-josei/", label: "名古屋市のみどりの補助金（生垣）" },
  hamamatsu: { href: "/area/hamamatsu/ikegaki-naegi/", label: "浜松市の生垣用苗木交付" },
  osaka: { href: "/area/osaka/hozonju-josei/", label: "大阪市の保存樹・保存樹林の助成" },
  shizuoka: { href: "/area/shizuoka/hozonju-hojo/", label: "静岡市の保存樹木等の補助" },
  hiroshima: { href: "/area/hiroshima/hozonju-hojo/", label: "広島市の美しい樹木・樹林保存事業補助金" },
  kitakyushu: { href: "/area/kitakyushu/hozonju-josei/", label: "北九州市の保存樹の助成金" },
  fukuoka: { href: "/area/fukuoka/ryokka-josei/", label: "福岡市の緑化助成事業（戸建住宅）" },
  kumamoto: { href: "/area/kumamoto/tsunagari-mori/", label: "熊本市のつながりの森づくり補助金" },
  gifu: { href: "/area/gifu/ikegaki-hojo/", label: "岐阜市の生け垣づくり奨励補助金" },
  mito: { href: "/area/mito/ikegaki-hojo/", label: "水戸市の生垣設置奨励補助金" },
  nishinomiya: { href: "/area/nishinomiya/ryokka-josei/", label: "西宮市の住まいの緑化助成制度" },
  matsuyama: { href: "/area/matsuyama/ikegaki-shoreikin/", label: "松山市の緑のまちづくり奨励金" },
  takamatsu: { href: "/area/takamatsu/ikegaki-josei/", label: "高松市の生垣設置事業の助成" },
  kurashiki: { href: "/area/kurashiki/ryokka-josei/", label: "倉敷市の民有地緑化補助金" },
};

/** 市の保存樹・指定樹木の制度を扱う子ページ（2026-11-03 追加）。親の市ページの「市の助成制度」で案内する。 */
export const AREA_TREE_PAGES: Partial<Record<AreaSlug, { href: string; label: string }>> = {
  yokohama: { href: "/area/yokohama/meiboku-koboku/", label: "横浜市の名木古木の指定と助成" },
  nagoya: { href: "/area/nagoya/hozonju/", label: "名古屋市の保存樹の維持管理助成" },
  fukuoka: { href: "/area/fukuoka/hozonju/", label: "福岡市の保存樹の剪定・治療の補助" },
  kumamoto: { href: "/area/kumamoto/hozonju/", label: "熊本市の保存樹木・保存樹林の助成" },
  chiba: { href: "/area/chiba/hozon-jumoku/", label: "千葉市の保存樹木・保存樹林の奨励金" },
  funabashi: { href: "/area/funabashi/shitei-jumoku/", label: "船橋市の指定樹木等の助成と伐採届" },
  toyama: { href: "/area/toyama/hozon-jumoku/", label: "富山市の保存樹木・樹林の指定" },
  kyoto: { href: "/area/kyoto/hozonju/", label: "京都市の保存樹の指定と助成" },
  kobe: { href: "/area/kobe/shimin-no-ki/", label: "神戸市の市民の木・市民の森の助成" },
  okayama: { href: "/area/okayama/hozonju/", label: "岡山市の保存樹・保存樹林" },
  nagano: { href: "/area/nagano/hozon-jumoku/", label: "長野市の保存樹木・保存樹林の補助金" },
  sagamihara: { href: "/area/sagamihara/hozon-jumoku/", label: "相模原市の保存樹木・保存樹林の補助" },
  kawasaki: { href: "/area/kawasaki/hozon-jumoku/", label: "川崎市の保存樹木等の奨励金・まちの樹の助成" },
  mito: { href: "/area/mito/hozonju/", label: "水戸市の保存樹の奨励金と助成" },
  kanazawa: { href: "/area/kanazawa/hozonju/", label: "金沢市の保存樹・景観樹の補助" },
  niigata: { href: "/area/niigata/hozonju/", label: "新潟市の保存樹等の松くい虫防除補助金" },
  saitama: { href: "/area/saitama/hozon-jumoku/", label: "さいたま市の保存樹木の奨励金" },
  hamamatsu: { href: "/area/hamamatsu/hozonju/", label: "浜松市の保存樹と巨樹・古木の支援" },
  kagoshima: { href: "/area/kagoshima/hozonju/", label: "鹿児島市の保存樹・保存樹林の制度" },
};

/** 市の剪定枝の出し方を扱う子ページ（2026-11-02 追加）。親の市ページから案内する。 */
export const AREA_WASTE_PAGES: Partial<Record<AreaSlug, { href: string; label: string }>> = {
  osaka: { href: "/area/osaka/sentei-eda/", label: "大阪市の剪定枝の出し方" },
  kobe: { href: "/area/kobe/sentei-eda/", label: "神戸市の剪定枝の出し方" },
  sakai: { href: "/area/sakai/sentei-eda/", label: "堺市の剪定枝の出し方" },
  okayama: { href: "/area/okayama/sentei-eda/", label: "岡山市の剪定枝の出し方" },
  hiroshima: { href: "/area/hiroshima/sentei-eda/", label: "広島市の剪定枝の出し方" },
  kitakyushu: { href: "/area/kitakyushu/sentei-eda/", label: "北九州市の剪定枝の出し方" },
  kumamoto: { href: "/area/kumamoto/sentei-eda/", label: "熊本市の剪定枝の出し方" },
  himeji: { href: "/area/himeji/sentei-eda/", label: "姫路市の剪定枝の出し方" },
  nara: { href: "/area/nara/sentei-eda/", label: "奈良市の剪定枝の出し方" },
  nagasaki: { href: "/area/nagasaki/sentei-eda/", label: "長崎市の剪定枝の出し方" },
  kagoshima: { href: "/area/kagoshima/sentei-eda/", label: "鹿児島市の剪定枝の出し方" },
  oita: { href: "/area/oita/sentei-eda/", label: "大分市の剪定枝の出し方" },
  nishinomiya: { href: "/area/nishinomiya/sentei-eda/", label: "西宮市の剪定枝の出し方" },
  matsuyama: { href: "/area/matsuyama/sentei-eda/", label: "松山市の剪定枝の出し方" },
  takamatsu: { href: "/area/takamatsu/sentei-eda/", label: "高松市の剪定枝の出し方" },
  kurashiki: { href: "/area/kurashiki/sentei-eda/", label: "倉敷市の剪定枝の出し方" },
  fukuoka: { href: "/area/fukuoka/sentei-eda/", label: "福岡市の剪定枝の出し方" },
};

/**
 * 全エリアを相互にリンクするブロック。
 * current に自分のスラッグを渡すと、そのエリアだけ非リンクの現在地表示になる。
 */
export default function AreaLinks({ current }: { current?: AreaSlug }) {
  const subsidy = current ? AREA_SUBSIDY_PAGES[current] : undefined;
  const waste = current ? AREA_WASTE_PAGES[current] : undefined;
  const tree = current ? AREA_TREE_PAGES[current] : undefined;
  return (
    <>
    {waste ? (
      <section id="area-waste" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          剪定枝の出し方（市の案内）
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <li>
            <Link
              href={waste.href}
              className="block rounded-2xl border border-border bg-surface p-4 text-text-primary font-medium hover:border-primary transition-colors"
            >
              {waste.label}
            </Link>
          </li>
          <li>
            <Link
              href="/guide/green-waste/"
              className="block rounded-2xl border border-border bg-surface p-4 text-text-primary font-medium hover:border-primary transition-colors"
            >
              剪定枝・刈った草の処分方法
            </Link>
          </li>
        </ul>
      </section>
    ) : null}
    {subsidy || tree ? (
      <section id="area-subsidy" className="scroll-mt-20 mb-12">
        <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
          市の助成制度
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {subsidy ? (
          <li>
            <Link
              href={subsidy.href}
              className="block rounded-2xl border border-border bg-surface p-4 text-text-primary font-medium hover:border-primary transition-colors"
            >
              {subsidy.label}
            </Link>
          </li>
          ) : null}
          {tree ? (
          <li>
            <Link
              href={tree.href}
              className="block rounded-2xl border border-border bg-surface p-4 text-text-primary font-medium hover:border-primary transition-colors"
            >
              {tree.label}
            </Link>
          </li>
          ) : null}
          <li>
            <Link
              href="/guide/hedge-subsidy/"
              className="block rounded-2xl border border-border bg-surface p-4 text-text-primary font-medium hover:border-primary transition-colors"
            >
              政令市・中核市の生垣・緑化助成の一覧
            </Link>
          </li>
        </ul>
      </section>
    ) : null}
    <section id="other-areas" className="scroll-mt-20 mb-12">
      <h2 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3 mb-5">
        他のエリアの業者選び
      </h2>
      <p className="text-[15px] leading-8 text-text-secondary mb-5">
        造園ナビでは、エリアごとに「庭の条件」と「依頼の方法」の観点から業者選びを整理しています。
        掲載サービスは全ページ共通ですが、確認すべき事項の順序はページごとに異なります。
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {AREAS.map((a) => {
          const isCurrent = a.slug === current;
          return (
            <li key={a.slug}>
              {isCurrent ? (
                <span
                  aria-current="page"
                  className="block rounded-2xl border border-primary bg-surface-alt p-4"
                >
                  <span className="block font-bold text-text-primary">
                    {a.city}（このページ）
                  </span>
                  <span className="block text-sm text-text-secondary mt-1">{a.angle}</span>
                </span>
              ) : (
                <Link
                  href={`/area/${a.slug}/`}
                  className="block rounded-2xl border border-border bg-surface p-4 hover:border-primary transition-colors"
                >
                  <span className="block font-bold text-text-primary">
                    {a.city}の造園・庭の手入れ業者
                  </span>
                  <span className="block text-sm text-text-secondary mt-1">{a.angle}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </section>
    </>
  );
}
