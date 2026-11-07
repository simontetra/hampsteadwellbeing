import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-44 pb-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-5">Page not found</h1>
          <p className="font-sans text-lg font-light text-muted-foreground mb-8">
            Sorry, we couldn't find that page. It may have moved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 rounded-full font-sans font-semibold text-sm tracking-wide"
              style={{ background: "#2C1F14", color: "#FAF8F4" }}
            >
              Go to the home page
            </Link>
            <Link
              href="/directory/"
              className="inline-flex items-center px-6 py-3 rounded-full font-sans font-semibold text-sm tracking-wide border border-border"
            >
              Browse the directory
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
