import { NextRequest, NextResponse } from "next/server";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const CONTACT_EMAIL = "waniwanipanich463@gmail.com";
const DEFAULT_FROM_EMAIL = "SHOTA WORLD <onboarding@resend.dev>";
const DELIVERY_TIMEOUT_MS = 3500;

export const runtime = "nodejs";
export const maxDuration = 10;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  service?: unknown;
  message?: unknown;
  honey?: unknown;
};

const clean = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

const isEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character,
  );

type Submission = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

async function sendWithResend(submission: Submission, apiKey: string) {
  const { name, email, company, service, message } = submission;
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const from = process.env.CONTACT_FROM_EMAIL?.trim() || DEFAULT_FROM_EMAIL;

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [CONTACT_EMAIL],
        reply_to: email,
        subject: "【SHOTA WORLD】Webサイトからのお問い合わせ",
        text: [
          `お名前: ${name}`,
          `メールアドレス: ${email}`,
          `会社名・屋号: ${company || "未記入"}`,
          `ご相談内容: ${service}`,
          "",
          message,
        ].join("\n"),
        html: `
          <h1 style="font-size:20px">SHOTA WORLDへのお問い合わせ</h1>
          <table style="border-collapse:collapse;width:100%;max-width:680px">
            <tbody>
              <tr><th style="border:1px solid #ddd;padding:10px;text-align:left">お名前</th><td style="border:1px solid #ddd;padding:10px">${escapeHtml(name)}</td></tr>
              <tr><th style="border:1px solid #ddd;padding:10px;text-align:left">メールアドレス</th><td style="border:1px solid #ddd;padding:10px">${escapeHtml(email)}</td></tr>
              <tr><th style="border:1px solid #ddd;padding:10px;text-align:left">会社名・屋号</th><td style="border:1px solid #ddd;padding:10px">${escapeHtml(company || "未記入")}</td></tr>
              <tr><th style="border:1px solid #ddd;padding:10px;text-align:left">ご相談内容</th><td style="border:1px solid #ddd;padding:10px">${escapeHtml(service)}</td></tr>
              <tr><th style="border:1px solid #ddd;padding:10px;text-align:left;vertical-align:top">お問い合わせ内容</th><td style="border:1px solid #ddd;padding:10px">${safeMessage}</td></tr>
            </tbody>
          </table>
        `,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(DELIVERY_TIMEOUT_MS),
    });

    if (!response.ok) {
      return false;
    }

    const result = (await response.json()) as { id?: string };
    return Boolean(result.id);
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { success: false, reason: "invalid_request" },
      { status: 400 },
    );
  }

  const name = clean(payload.name, 100);
  const email = clean(payload.email, 254);
  const company = clean(payload.company, 150);
  const service = clean(payload.service, 100);
  const message = clean(payload.message, 5000);
  const honey = clean(payload.honey, 200);

  if (honey) {
    return NextResponse.json({ success: true });
  }

  if (!name || !isEmail(email) || !service || !message) {
    return NextResponse.json(
      { success: false, reason: "validation_error" },
      { status: 400 },
    );
  }

  const submission = {
    name,
    email,
    company,
    service,
    message,
  };
  const resendApiKey = process.env.RESEND_API_KEY?.trim();

  if (!resendApiKey) {
    return NextResponse.json(
      { success: false, reason: "delivery_unavailable" },
      { status: 503 },
    );
  }

  const delivered = await sendWithResend(submission, resendApiKey);

  if (delivered) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json(
    { success: false, reason: "delivery_unavailable" },
    { status: 503 },
  );
}
