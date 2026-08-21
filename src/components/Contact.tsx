"use client";

import { AlertCircle, ArrowRight, CheckCircle2, Send } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/waniwanipanich463@gmail.com";

const offers = [
  "ホームページを新しく作りたい",
  "今あるサイトを見直したい",
  "イベントや店舗のチラシを作りたい",
  "まだ内容が決まっていない",
];

type SubmitStatus = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "");

    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email,
          company: formData.get("company"),
          service: formData.get("service"),
          message: formData.get("message"),
          _replyto: email,
          _subject: "【SHOTA WORLD】Webサイトからのお問い合わせ",
          _template: "table",
          _captcha: "false",
          _honey: formData.get("_honey"),
          _url: "https://www.shota-world.jp/#contact",
        }),
      });

      const result = (await response.json()) as {
        success?: boolean | string;
        message?: string;
      };
      const submitted = result.success === true || result.success === "true";

      if (!response.ok || !submitted) {
        throw new Error("Submission failed");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

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

          <form className="studio-contact-form" onSubmit={handleSubmit}>
            <div className="studio-form-heading">
              <small>INQUIRY FORM</small>
              <strong>制作について相談する</strong>
              <p>必要事項をご入力ください。</p>
            </div>

            <div className="studio-form-grid">
              <label className="studio-form-field">
                <span>お名前 <em>必須</em></span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="山田 太郎"
                />
              </label>

              <label className="studio-form-field">
                <span>メールアドレス <em>必須</em></span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="example@email.com"
                />
              </label>

              <label className="studio-form-field studio-form-field-wide">
                <span>会社名・屋号 <small>任意</small></span>
                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                  placeholder="会社名や店舗名"
                />
              </label>

              <label className="studio-form-field studio-form-field-wide">
                <span>ご相談内容 <em>必須</em></span>
                <select name="service" required defaultValue="">
                  <option value="" disabled>選択してください</option>
                  <option value="ホームページ制作">ホームページ制作</option>
                  <option value="ホームページのリニューアル">ホームページのリニューアル</option>
                  <option value="チラシ制作">チラシ制作</option>
                  <option value="その他のデザイン">その他のデザイン</option>
                  <option value="内容から相談したい">内容から相談したい</option>
                </select>
              </label>

              <label className="studio-form-field studio-form-field-wide">
                <span>お問い合わせ内容 <em>必須</em></span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="制作したいもの、目的、希望時期など、わかる範囲でご記入ください。"
                />
              </label>
            </div>

            <input
              type="text"
              name="_honey"
              className="studio-honeypot"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <label className="studio-form-consent">
              <input type="checkbox" required />
              <span>
                <Link href="/privacy" target="_blank">プライバシーポリシー</Link>
                に同意して送信します。
              </span>
            </label>

            <button
              type="submit"
              className="studio-form-submit focus-ring"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <>
                  <span className="studio-form-spinner" aria-hidden="true" />
                  送信しています
                </>
              ) : (
                <>
                  <Send size={19} aria-hidden="true" />
                  問い合わせを送信する
                  <ArrowRight size={19} aria-hidden="true" />
                </>
              )}
            </button>

            <div className="studio-form-status" aria-live="polite">
              {status === "sent" && (
                <p className="is-success">
                  <CheckCircle2 size={18} aria-hidden="true" />
                  送信しました。お問い合わせありがとうございます。
                </p>
              )}
              {status === "error" && (
                <p className="is-error">
                  <AlertCircle size={18} aria-hidden="true" />
                  送信できませんでした。時間をおいて、もう一度お試しください。
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
