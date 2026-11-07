import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProviderCard } from "@/components/WellbeingDirectory";
import { directoryCategories, providersIn } from "@/data/wellbeingDirectory";
import NotFound from "@/pages/not-found";

export default function DirectoryCategory({ params }: { params: { slug: string } }) {
  const category = directoryCategories.find((c) => c.slug === params.slug);
  if (!category) return <NotFound />;

  const providers = providersIn(category.name);
  const others = directoryCategories.filter((c) => c.slug !== category.slug);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-36 md:pt-44 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6 font-sans text-xs tracking-wide text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/directory/" className="hover:text-primary transition-colors">Directory</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground/80">{category.name}</span>
          </nav>

          <div className="max-w-3xl mb-12">
            <p className="font-sans text-xs font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: "#C8A951" }}>
              London Wellness Directory
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-5">
              {category.heading}
            </h1>
            <p className="font-sans text-lg font-light text-muted-foreground leading-relaxed">
              {category.intro}
            </p>
          </div>

          <p className="text-xs text-muted-foreground mb-5">
            {providers.length} listing{providers.length !== 1 ? "s" : ""}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {providers.map((p) => (
              <ProviderCard key={p.name} p={p} />
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-border/50">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-5">More in the directory</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {others.map((c) => (
                <Link
                  key={c.slug}
                  href={`/directory/${c.slug}/`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {c.heading} <ArrowRight size={13} />
                </Link>
              ))}
              <Link
                href="/directory/"
                className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                The whole directory <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          <p className="text-xs text-muted-foreground/50 mt-10 font-light">
            This directory is provided for information only. Listings are drawn from publicly available sources. Hampstead Wellbeing is not affiliated with the providers listed unless stated.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
