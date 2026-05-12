#!/usr/bin/env node
const folderId = process.argv[2];

if (!folderId) {
  console.error("Usage: node get-folder-videos.js <folder-id>");
  process.exit(1);
}

const baseUrl = "https://www.loom.com/share/folder/" + folderId;
console.log("Checking folder:", baseUrl);

// Directly check with oEmbed endpoint for individual videos
// First, try to get folder page data
fetch(baseUrl).then(r => r.text()).then(html => {
  console.log("Folder page loaded, length:", html.length);
  
  // Look for Next.js hydration data or JSON-LD
  const jsonLdPattern = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  const nextDataPattern = /<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/g;
  
  let jsonMatches = [];
  let match;
  
  while ((match = jsonLdPattern.exec(html)) !== null) {
    try {
      const data = JSON.parse(match[1]);
      jsonMatches.push(data);
    } catch (e) {}
  }
  
  while ((match = nextDataPattern.exec(html)) !== null) {
    try {
      const data = JSON.parse(match[1]);
      jsonMatches.push(data);
    } catch (e) {}
  }
  
  console.log("JSON data found:", jsonMatches.length);
  if (jsonMatches.length > 0) {
    console.log(JSON.stringify(jsonMatches[0], null, 2).substring(0, 1000));
  }
  
  // Try to find video links
  const videoLinks = html.match(/https:\/\/www\.loom\.com\/share\/[a-f0-9]{20,}/g) || [];
  console.log("\nFound video links:", [...new Set(videoLinks)]);
  
}).catch(e => console.error("Error:", e.message));
