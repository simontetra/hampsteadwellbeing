import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { pageMeta } from "./lib/seo";
import "./index.css";

const root = document.getElementById("root")!;

// Pages are built as finished HTML (see scripts/prerender.mjs), so React takes
// over the existing markup. Any other address (a mistyped link, say) is served
// the home page's HTML by Render, so it is cleared and rendered fresh.
if (root.hasChildNodes() && pageMeta(window.location.pathname)) {
  hydrateRoot(root, <App />);
} else {
  root.replaceChildren();
  createRoot(root).render(<App />);
}
