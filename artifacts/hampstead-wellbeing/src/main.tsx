import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { pageMeta, canonicalUrl } from "./lib/seo";
import "./index.css";

const root = document.getElementById("root")!;

// Pages are built as finished HTML (see scripts/prerender.mjs), so React takes
// over the existing markup. If the HTML is for a different page (Render serves
// the home page for addresses it has no file for), it is rendered fresh.
const meta = pageMeta(window.location.pathname);
const servedFor = document.querySelector('link[rel="canonical"]')?.getAttribute("href");
if (root.hasChildNodes() && meta && servedFor === canonicalUrl(meta.path)) {
  hydrateRoot(root, <App />);
} else {
  root.replaceChildren();
  createRoot(root).render(<App />);
}
