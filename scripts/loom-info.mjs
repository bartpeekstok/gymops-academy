#!/usr/bin/env node
// Fetches metadata for a Loom share URL via Loom's public oEmbed endpoint.
// Usage: node scripts/loom-info.mjs <loom-share-url> [more-urls...]
// Prints a TS snippet you can paste into lib/courses.ts.

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Usage: node scripts/loom-info.mjs <loom-share-url> [more-urls...]");
  process.exit(1);
}

const SHARE_ID_RE = /loom\.com\/share\/([a-f0-9]{20,})/i;

function extractId(url) {
  const m = url.match(SHARE_ID_RE);
  return m ? m[1] : null;
}

function slugify(s) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

async function fetchOEmbed(shareUrl) {
  const r = await fetch(
    `https://www.loom.com/v1/oembed?url=${encodeURIComponent(shareUrl)}`,
    { headers: { "User-Agent": "Mozilla/5.0" } }
  );
  if (!r.ok) {
    throw new Error(`oEmbed ${r.status} ${r.statusText} for ${shareUrl}`);
  }
  return r.json();
}

for (const raw of args) {
  const url = raw.trim();
  const id = extractId(url);
  if (!id) {
    console.error(`! Skipping (no Loom share id found): ${url}`);
    continue;
  }
  try {
    const data = await fetchOEmbed(`https://www.loom.com/share/${id}`);
    const title = data.title ?? "(untitled)";
    const durationSec = typeof data.duration === "number" ? data.duration : null;
    const durationMin = durationSec != null ? Math.max(1, Math.round(durationSec / 60)) : null;

    console.log("");
    console.log(`# ${title}`);
    console.log(`{`);
    console.log(`  slug: "${slugify(title)}",`);
    console.log(`  title: ${JSON.stringify(title)},`);
    console.log(`  description: "",`);
    console.log(`  loomId: "${id}",`);
    if (durationMin != null) console.log(`  durationMinutes: ${durationMin},`);
    console.log(`},`);
  } catch (err) {
    console.error(`! Error for ${url}:`, err.message);
  }
}
