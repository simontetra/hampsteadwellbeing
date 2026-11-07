import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WellbeingDirectory } from "@/components/WellbeingDirectory";
import { directoryCategories, providersIn } from "@/data/wellbeingDirectory";

export default function Directory() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-36 md:pt-44 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6 font-sans text-xs tracking-wide text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground/80">Directory</span>
          </nav>

          <div className="max-w-3xl mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-5">
              Wellbeing Directory
            </h1>
            <p className="font-sans text-lg font-light text-muted-foreground leading-relaxed">
              Our curated guide to yoga studios, yoga teachers, Pilates, meditation and fitness providers across the UK, plus online classes and apps you can use anywhere. Choose a category, or search all the listings below.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {directoryCategories.map((c) => (
              <Link
                key={c.slug}
                href={`/directory/${c.slug}/`}
                className="group flex flex-col rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/40 hover:shadow-md transition-all duration-200"
              >
                <h2 className="font-display text-2xl font-medium text-foreground mb-2">{c.name}</h2>
                <p className="font-sans text-sm font-light text-muted-foreground leading-relaxed flex-1 mb-4">{c.intro}</p>
                <span className="text-primary text-xs font-semibold tracking-wide uppercase flex items-center gap-1">
                  {providersIn(c.name).length} listings
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <WellbeingDirectory />
        </div>
      </main>
      <Footer />
    </div>
  );
}
