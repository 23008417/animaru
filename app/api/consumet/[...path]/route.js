import { NextResponse } from "next/server";

function normalizeBase(baseUrl) {
  return (baseUrl || "").trim().replace(/\/+$/, "");
}

function getBaseUrls() {
  const configured = normalizeBase(process.env.NEXT_PUBLIC_CONSUMET_BASE_URL);
  const fallbacks = ["https://no-drab.vercel.app", "https://api.consumet.org"];
  const candidates = [configured, ...fallbacks].filter(Boolean);
  return [...new Set(candidates)];
}

function isInvalidApiPayload(data) {
  if (!data || typeof data !== "object") {
    return true;
  }

  if (data?.payload?.repo || data?.payload?.allShortcutsEnabled) {
    return true;
  }

  return false;
}

export async function GET(req, context) {
  const params = await context.params;
  const pathSegments = params?.path || [];

  if (!pathSegments.length) {
    return NextResponse.json({ error: "Missing Consumet path" }, { status: 400 });
  }

  const url = new URL(req.url);
  const search = url.search || "";
  const bases = getBaseUrls();

  for (const base of bases) {
    const target = `${base}/${pathSegments.join("/")}${search}`;

    try {
      const upstream = await fetch(target, {
        cache: "no-store",
        headers: {
          Accept: "application/json",
        },
      });

      if (!upstream.ok) {
        continue;
      }

      const body = await upstream.text();
      let parsed;

      try {
        parsed = JSON.parse(body);
      } catch {
        continue;
      }

      if (isInvalidApiPayload(parsed)) {
        continue;
      }

      return NextResponse.json(parsed, { status: 200 });
    } catch {
      continue;
    }
  }

  return NextResponse.json({ error: "Failed to fetch from Consumet upstreams" }, { status: 502 });
}