import type { Metadata } from "next";
import { OG_IMAGES } from "@/app/lib/og";
import SubsidyPage, { type SubsidyConfig } from "@/app/components/SubsidyPage";
import { L, P } from "@/app/components/GuideParts";

const PAGE_URL = "https://zouen-navi.com/area/kurashiki/sentei-eda/";
const TITLE = "倉敷市の剪定枝の出し方｜長さ1m以内・丸太は直径10cm以内、ヒモで束ねて燃やせるごみ";
const DESC =
  "倉敷市（真備地区以外）では、剪定くずは「木くず」と同じ燃やせるごみです。長さ1m以内（丸太などは直径10cm以内）にしてヒモで束ね、" +
  "両手でさげられる程度が1回分です。量が多いときの考え方と業者に頼む前の確認事項を整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: "倉敷市の剪定枝の出し方（剪定くずは木くずと同じ燃やせるごみ・長さ1m以内・ヒモで束ねて両手でさげられる程度が1回分）を市の公式ページにもとづいて整理しています。",
  },
};

const c: SubsidyConfig = {
  pageUrl: PAGE_URL,
  citySlug: "kurashiki",
  city: "倉敷",
  crumb: "剪定枝の出し方",
  title: TITLE,
  jsonLdDescription:
    "倉敷市（真備地区以外）で剪定くずを燃やせるごみに出すときの大きさ・束ね方・1回の量を、市の公式ページにもとづいて整理しています。",
  updatedIso: "2026-11-05",
  updatedLabel: "2026年11月5日",
  checked: "2026年11月5日",
  lead: [
    "倉敷市で庭木を剪定したとき、切った枝（剪定くず）は燃やせるごみとして出せます。市の分別区分では「木くず」と同じ扱いで、長さとまとめ方に決まりがあります。",
    "本ページでは、倉敷市「ごみの分別区分と出し方（あ～そ）」と「燃やせるごみ・資源ごみ・埋立ごみ・使用済乾電池」（いずれも真備地区以外の案内、2026年11月5日確認）の記載をもとに、出し方と業者に頼む前の確認事項を整理します。",
  ],
  factsTitle: "倉敷市の剪定枝の出し方の要点",
  facts: [
    { k: "ごみの区分", v: "剪定くずは燃やせるごみ（「木くず」と同じ）。落ち葉、枝も燃やせるごみの例に挙げられている" },
    { k: "大きさ", v: "長さを1m以内にする。丸太などは直径が10cm以内のものまで" },
    { k: "出し方", v: "ヒモで束ねる。両手でさげられる程度が1回分" },
    { k: "収集", v: "燃やせるごみは週2回収集。90リットルまでの袋に入る燃やせるもの" },
    { k: "草花", v: "燃やせるごみ" },
  ],
  factsNote:
    "出典：倉敷市「ごみの分別区分と出し方（あ～そ）」（更新日：2025年3月12日）、「燃やせるごみ・資源ごみ・埋立ごみ・使用済乾電池」（更新日：2026年2月20日）。2026年11月5日確認。いずれも真備地区以外の案内です。真備地区は市の別のページで案内されています。",
  sections: [
    {
      id: "sb-cut",
      title: "燃やせるごみに出すまでの手順",
      steps: [
        { h: "長さ1m以内に切る", b: "枝は長さ1m以内にそろえます。丸太などは直径10cm以内のものまでです。" },
        { h: "ヒモで束ねる", b: "切った枝をヒモで束ねます。両手でさげられる程度が1回分です。" },
        { h: "燃やせるごみの日に出す", b: "燃やせるごみは週2回の収集です。" },
      ],
    },
    {
      id: "sb-much",
      title: "剪定枝が一度に多く出るとき",
      body: (
        <P>
          燃やせるごみの1回分は、両手でさげられる程度と案内されています。量が多いときは、収集日を分けて出すか、業者に引き取りを含めて頼みます。市の処理施設へ自分で持ち込む場合は、市の「ごみの持ち込み施設」のページで受け入れ先と条件を確かめてから運びます。
        </P>
      ),
    },
    {
      id: "sb-request",
      title: "業者に剪定を頼む前に決めておくこと",
      body: (
        <P>
          業者に剪定を頼む場合は、出た枝を業者が引き取るのか、自分で燃やせるごみに出すのかを見積もりの段階で決めておきます。自分で出す分は、作業時に長さ1m以内に切ってもらうと束ねやすくなります。1回分は両手でさげられる程度のため、量が多いときは引き取りを含めて頼むほうが段取りが立ちます。
        </P>
      ),
      after: (
        <>
          処分方法の選び方は
          <L href="/guide/green-waste/">剪定枝・刈った草の処分方法</L>
          、倉敷で業者を選ぶ際の確認事項は
          <L href="/area/kurashiki/">倉敷の造園・庭の手入れ業者</L>
          で解説しています。
        </>
      ),
    },
  ],
  faqs: [
    { q: "倉敷市で剪定した枝は何ごみですか。", a: "燃やせるごみです。市の分別区分では「木くず」と同じ扱いで、長さ1m以内（丸太などは直径10cm以内）にしてヒモで束ねます。" },
    { q: "1回にどれくらい出せますか。", a: "両手でさげられる程度が1回分と案内されています。" },
    { q: "真備地区でも同じですか。", a: "本ページの内容は真備地区以外の案内にもとづいています。真備地区は市の別のページで案内されています。" },
  ],
  sources: [
    { org: "倉敷市", title: "ごみの分別区分と出し方（あ～そ）", url: "https://www.city.kurashiki.okayama.jp/kurashi/kankyo/1003645/1013690/1003647/1003662.html" },
    { org: "倉敷市", title: "燃やせるごみ・資源ごみ・埋立ごみ・使用済乾電池", url: "https://www.city.kurashiki.okayama.jp/kurashi/kankyo/1003645/1013690/1003647/1003648.html" },
    { org: "倉敷市", title: "ごみの持ち込み施設", url: "https://www.city.kurashiki.okayama.jp/kurashi/kankyo/1003645/1013690/1013255/index.html" },
  ],
  related: [
    { href: "/guide/green-waste/", label: "剪定枝・刈った草の処分方法" },
    { href: "/area/kurashiki/", label: "倉敷の造園・庭の手入れ業者" },
    { href: "/area/kurashiki/ryokka-josei/", label: "倉敷市の民有地緑化補助金" },
    { href: "/service/pruning/", label: "庭木の剪定を業者に頼む" },
  ],
  cta: "剪定を頼むときは、枝の処分を見積もりに含めるかを最初に決めておくと、作業後に枝が残りません。",
};

export default function KurashikiSenteiEdaPage() {
  return <SubsidyPage c={c} />;
}
