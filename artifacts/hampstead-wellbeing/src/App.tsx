import { useEffect, useRef } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Team from "@/pages/Team";
import CorporateWellness from "@/pages/CorporateWellness";
import Breathwork from "@/pages/Breathwork";
import Mindfulness from "@/pages/Mindfulness";
import Directory from "@/pages/Directory";
import DirectoryCategory from "@/pages/DirectoryCategory";
import NotFound from "@/pages/not-found";
import { pageMeta, canonicalUrl, NOT_FOUND_META } from "@/lib/seo";

// Initialize React Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

/** Keeps the title, description and canonical address right when moving between pages in the browser. */
function PageHead() {
  const [location] = useLocation();
  const firstRender = useRef(true);
  useEffect(() => {
    // Start each newly opened page at the top (but leave the first page load,
    // which may be heading for a #section, to the browser).
    if (firstRender.current) firstRender.current = false;
    else window.scrollTo(0, 0);
    const meta = pageMeta(location);
    document.title = meta?.title ?? NOT_FOUND_META.title;
    const set = (selector: string, attr: string, value: string) =>
      document.querySelector(selector)?.setAttribute(attr, value);
    const description = meta?.description ?? NOT_FOUND_META.description;
    set('meta[name="description"]', "content", description);
    set('meta[property="og:description"]', "content", description);
    set('meta[property="og:title"]', "content", document.title);
    if (meta) {
      set('link[rel="canonical"]', "href", canonicalUrl(meta.path));
      set('meta[property="og:url"]', "content", canonicalUrl(meta.path));
    }
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/team" component={Team} />
      <Route path="/corporate-wellness" component={CorporateWellness} />
      <Route path="/mindfulness" component={Mindfulness} />
      <Route path="/breathwork" component={Breathwork} />
      <Route path="/directory" component={Directory} />
      <Route path="/directory/:slug" component={DirectoryCategory} />
      {/* Catch-all route for 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App({ ssrPath }: { ssrPath?: string }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")} ssrPath={ssrPath}>
          <PageHead />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
