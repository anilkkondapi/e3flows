import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const ADDRESS = "contact@syncsilica.com";

function clean(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length <= max ? trimmed : null;
}

export async function POST(request: NextRequest) {
  try {
    // Reject cross-origin browser submissions. Non-browser requests still need rate limiting upstream.
    const origin = request.headers.get("origin");
    if (origin) {
      const allowed = new Set(["https://syncsilica.com", "https://www.syncsilica.com"]);
      if (process.env.NODE_ENV === "development") allowed.add("http://localhost:3000");
      if (!allowed.has(origin)) return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
    }

    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > 12000) return NextResponse.json({ error: "Request too large." }, { status: 413 });
    const body = await request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
    if (body.website) return NextResponse.json({ ok: true }); // Honeypot

    const name = clean(body.name, 120);
    const email = clean(body.email, 254);
    const company = clean(body.company ?? "", 150);
    const role = clean(body.role ?? "", 150);
    const message = clean(body.message, 5000);
    const emailValid = !!email && /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email);
    if (!name || !emailValid || company === null || role === null || !message) {
      return NextResponse.json({ error: "Please provide a valid name, email and message." }, { status: 400 });
    }

    const apiKey = process.env.SMTP2GO_API_KEY;
    if (!apiKey) {
      console.error("SMTP2GO_API_KEY is not configured");
      return NextResponse.json({ error: "Email service is temporarily unavailable." }, { status: 503 });
    }

    const response = await fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Smtp2go-Api-Key": apiKey },
      body: JSON.stringify({
        sender: ADDRESS,
        to: [ADDRESS],
        subject: "New EFS website inquiry",
        text_body: [
          "New inquiry from syncsilica.com/contact",
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company || "Not provided"}`,
          `Role: ${role || "Not provided"}`,
          "",
          "Message:",
          message,
        ].join("\n"),
        custom_headers: [{ header: "Reply-To", value: email }],
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(12000),
    });
    const result = await response.json().catch(() => null);
    if (!response.ok || result?.data?.failed > 0 || result?.data?.succeeded !== 1) {
      console.error("SMTP2GO delivery rejected", response.status, result);
      return NextResponse.json({ error: "Unable to send your request. Please email us directly." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json({ error: "Unable to process your request. Please try again." }, { status: 500 });
  }
}
