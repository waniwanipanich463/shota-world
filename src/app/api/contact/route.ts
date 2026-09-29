import { NextRequest, NextResponse } from "next/server";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/waniwanipanich463@gmail.com";
const SITE_ORIGIN = "https://www.shota-world.jp";
const DELIVERY_ATTEMPTS = 2;
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

const wait = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

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

  const body = JSON.stringify({
    name,
    email,
    company,
    service,
    message,
    _replyto: email,
    _subject: "【SHOTA WORLD】Webサイトからのお問い合わせ",
    _template: "table",
    _captcha: "false",
    _url: `${SITE_ORIGIN}/#contact`,
  });

  for (let attempt = 0; attempt < DELIVERY_ATTEMPTS; attempt += 1) {
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Origin: SITE_ORIGIN,
          Referer: `${SITE_ORIGIN}/`,
        },
        body,
        cache: "no-store",
        signal: AbortSignal.timeout(DELIVERY_TIMEOUT_MS),
      });

      const result = (await response.json()) as {
        success?: boolean | string;
      };
      const submitted = result.success === true || result.success === "true";

      if (response.ok && submitted) {
        return NextResponse.json({ success: true });
      }
    } catch {
      // The upstream occasionally times out. Retry before offering email fallback.
    }

    if (attempt < DELIVERY_ATTEMPTS - 1) {
      await wait(300);
    }
  }

  return NextResponse.json(
    { success: false, reason: "delivery_unavailable" },
    { status: 503 },
  );
}
