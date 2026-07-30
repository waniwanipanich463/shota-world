import { ArrowRight, Instagram, Mail } from "lucide-react";
import Link from "next/link";

const offers = [
  "ホームページを新しく作りたい",
  "今あるサイトを見直したい",
  "イベントや店舗のチラシを作りたい",
  "まだ内容が決まっていない",
];

export default function Contact() {
  return (
    <section id="contact" className="studio-section studio-contact">
      <div className="section-shell">
        <div className="studio-contact-panel">
          <div className="studio-contact-copy">
            <p className="studio-eyebrow">CONTACT</p>
            <h2>まずは、つくりたいものを<span>聞かせてください。</span></h2>
            <p>
              ホームページやチラシの制作について、ご相談を受け付けています。
              内容が固まっていない段階でも大丈夫です。目的や状況を伺い、必要な形をご提案します。
            </p>
            <div className="studio-contact-tags">
              {offers.map((offer) => (
                <span key={offer}>{offer}</span>
              ))}
            </div>
          </div>

          <div className="studio-contact-actions">
            <div>
              <small>MAIL</small>
              <strong>contact@shota-world.jp</strong>
            </div>
            <Link
              href="mailto:contact@shota-world.jp?subject=制作についての相談"
              className="studio-contact-mail focus-ring"
            >
              <Mail size={20} aria-hidden="true" />
              メールで相談する
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
            <p>ご相談内容、希望時期、参考にしたいサイトやチラシがあればお書きください。</p>
            <div className="studio-social-links">
              <Link
                href="https://www.instagram.com/niwano_creator/"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring"
              >
                <Instagram size={18} aria-hidden="true" />
                Instagram
              </Link>
              <Link
                href="https://x.com/Niwano_creator"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
                X
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
