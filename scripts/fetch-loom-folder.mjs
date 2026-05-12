#!/usr/bin/env node
// Fetches all videos from a Loom folder and generates embed codes
// Usage: node scripts/fetch-loom-folder.mjs <folder-url-or-id>
// Example: node scripts/fetch-loom-folder.mjs https://loom.com/share/folder/c89e8aa8fb974eedb7d8cec7f7957f9b
// Or: node scripts/fetch-loom-folder.mjs c89e8aa8fb974eedb7d8cec7f7957f9b

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Usage: node scripts/fetch-loom-folder.mjs <folder-url-or-id>");
  process.exit(1);
}

let folderInput = args[0];
const FOLDER_ID_RE = /(?:loom\.com\/share\/folder\/)?([a-f0-9]{32})/i;
const match = folderInput.match(FOLDER_ID_RE);
const folderId = match ? match[1] : null;

if (!folderId) {
  console.error("Invalid folder URL or ID");
  process.exit(1);
}

async function fetchFolderVideos(folderId) {
  try {
    const folderUrl = `https://www.loom.com/share/folder/${folderId}`;
    console.log(`Fetching ${folderUrl}...`);
    
    const response = await fetch(folderUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const html = await response.text();
    
    // Extract video IDs from the HTML - try multiple patterns
    const videoIdPatterns = [
      /"id":"([a-f0-9]{20,})"/g,
      /"loomId":"([a-f0-9]{20,})"/g,
      /"videoId":"([a-f0-9]{20,})"/g,
      /data-video-id="([a-f0-9]{20,})"/g,
      /https:\/\/www\.loom\.com\/share\/([a-f0-9]{20,})/g,
    ];
    
    const videoIds = new Set();
    
    for (const pattern of videoIdPatterns) {
      let match;
      while ((match = pattern.exec(html)) !== null) {
        videoIds.add(match[1]);
      }
    }

    if (videoIds.size === 0) {
      // Try to find any 20+ character hex strings that look like video IDs
      const hexPattern = /[a-f0-9]{20,}/g;
      const potentialIds = html.match(hexPattern) || [];
      
      // Filter for likely video IDs (20+ chars)
      for (const id of potentialIds) {
        if (id.length >= 20 && id.length <= 32) {
          videoIds.add(id);
        }
      }
    }

    if (videoIds.size === 0) {
      throw new Error("No videos found in folder. The folder might be empty or not publicly accessible.");
    }

    return Array.from(videoIds);
  } catch (error) {
    throw new Error(`Failed to fetch folder videos: ${error.message}`);
  }
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

function getEmbedUrl(loomId) {
  return `https://www.loom.com/embed/${loomId}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`;
}

async function fetchVideoTitle(loomId) {
  try {
    const response = await fetch(
      `https://www.loom.com/v1/oembed?url=${encodeURIComponent(`https://www.loom.com/share/${loomId}`)}`,
      { headers: { "User-Agent": "Mozilla/5.0" } }
    );
    if (response.ok) {
      const data = await response.json();
      return {
        title: data.title || "(untitled)",
        duration: data.duration || null
      };
    }
  } catch (e) {
    // Silently fail, will use default title
  }
  return { title: "(untitled)", duration: null };
}

async function main() {
  try {
    console.log(`\nFetching videos from Loom folder...\n`);
    const videoIds = await fetchFolderVideos(folderId);

    if (videoIds.length === 0) {
      console.log("No videos found in this folder.");
      return;
    }

    console.log(`Found ${videoIds.length} video(s):\n`);
    console.log("=".repeat(80));

    for (const loomId of videoIds) {
      console.log(`\nFetching metadata for ${loomId}...`);
      const { title, duration } = await fetchVideoTitle(loomId);
      const durationMin = duration ? Math.max(1, Math.round(duration / 60)) : null;

      console.log(`Title: ${title}`);
      console.log(`Loom ID: ${loomId}`);
      if (durationMin) console.log(`Duration: ${durationMin} min`);
      console.log(`\nEmbed URL:`);
      console.log(getEmbedUrl(loomId));
      console.log(`\nHTML embed:`);
      console.log(`<iframe src="${getEmbedUrl(loomId)}" allow="fullscreen; picture-in-picture" allowFullScreen></iframe>`);
      console.log(`\nTypeScript snippet:`);
      console.log(`{`);
      console.log(`  slug: "${slugify(title)}",`);
      console.log(`  title: "${title}",`);
      console.log(`  description: "",`);
      console.log(`  loomId: "${loomId}",`);
      if (durationMin) console.log(`  durationMinutes: ${durationMin},`);
      console.log(`},`);
      console.log("-".repeat(80));
    }
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

main();
