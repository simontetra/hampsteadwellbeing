// Builds every page as its own finished HTML file, with its own title,
// description and canonical address, and writes sitemap.xml.
//
// Runs after the two Vite builds (see "build" in package.json):
//   dist/public  the website, as the browser loads it
//   dist/server  the same app, built to run here and produce each page's HTML
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "dist/public");
const serverEntry = path.join(root, "dist/server/entry-server.js");

const { render, pages, canonicalUrl, SITE_URL } = await import(pathToFileURL(serverEntry).href);
const template = fs.readFileSync(path.join(publicDir, "index.html"), "utf8");

const escape = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function replaceOnce(html, pattern, replacement, label) {
  const found = typeof pattern === "string" ? html.includes(pattern) : pattern.test(html);
  if (!found) throw new Error(`prerender: ${label} not found in index.html`);
  // A function, so "$" in page text is never read as a replacement pattern.
  return html.replace(pattern, () => replacement);
}

function pageHtml(page) {
  const title = escape(page.title);
  const description = escape(page.description);
  const url = canonicalUrl(page.path);
  let html = template;
  html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`, "title");
  html = replaceOnce(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`, "description");
  html = replaceOnce(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`, "canonical");
  html = replaceOnce(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`, "og:url");
  html = replaceOnce(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`, "og:title");
  html = replaceOnce(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`, "og:description");
  html = replaceOnce(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`, "twitter:title");
  html = replaceOnce(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`, "twitter:description");
  html = replaceOnce(html, '<div id="root"></div>', `<div id="root">${render(page.path)}</div>`, "root element");
  return html;
}

for (const page of pages) {
  const html = pageHtml(page);
  if (page.path === "/") {
    fs.writeFileSync(path.join(publicDir, "index.html"), html);
  } else {
    // Both /team/index.html (for /team/) and /team.html (for /team).
    const dir = path.join(publicDir, page.path);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), html);
    fs.writeFileSync(`${dir}.html`, html);
  }
  console.log(`prerendered ${page.path}`);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url>
    <loc>${canonicalUrl(p.path)}</loc>
    <lastmod>${today}</lastmod>
  </url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
console.log(`sitemap.xml: ${pages.length} pages on ${SITE_URL}`);
