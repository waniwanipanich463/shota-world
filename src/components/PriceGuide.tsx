import { ArrowRight } from "lucide-react";
import Link from "next/link";

const prices = [
  { item: "名刺デザイン", price: "¥7,000〜" },
  { item: "A4チラシデザイン", price: "¥20,000〜" },
  { item: "ロゴ・キャラクター", price: "お見積もり" },
  { item: "ホームページ", price: "お見積もり" },
];

export default function PriceGuide() {
  return (
    <section id="price" className="studio-section studio-price">
      <div className="section-shell studio-price-layout">
        <div className="studio-price-copy">
          <p className="studio-eyebrow">PRICE GUIDE</p>
          <h2>料金の目安</h2>
          <p>
            制作内容やボリュームによって料金は異なります。
            まずはご希望を伺い、制作内容とお見積もりをご案内します。
          </p>
          <Link href="#contact" className="studio-text-link focus-ring">
            制作を相談する
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="studio-price-table" aria-label="制作料金の目安">
          {prices.map((entry, index) => (
            <div key={entry.item} className="studio-price-row">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{entry.item}</strong>
              <b>{entry.price}</b>
            </div>
          ))}
          <p>
            ※価格は内容により変動します。印刷費・外部サービス費などが発生する場合は別途ご案内します。
          </p>
        </div>
      </div>
    </section>
  );
}
