import { renderToString } from "react-dom/server";
import App from "./App";
export { pages, pageMeta, canonicalUrl, SITE_URL } from "./lib/seo";

export function render(path: string): string {
  return renderToString(<App ssrPath={path} />);
}
