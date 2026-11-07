import { useState } from "react";
import { Link } from "wouter";
import { ExternalLink, Instagram, Search, X, MapPin, ArrowRight } from "lucide-react";
import { wellbeingProviders, categories, directoryCategories, type WellbeingProvider } from "@/data/wellbeingDirectory";

const categoryColour: Record<string, string> = {
  "Yoga Studios":  "#8B7355",
  "Yoga Teachers": "#3d7a55",
  "Pilates":       "#4a6155",
  "Meditation":    "#2C1F14",
  "Fitness":       "#5a7a65",
};

const pricingLabel: Record<string, string> = {
  "£":   "Budget-friendly",
  "££":  "Mid-range",
  "£££": "Premium",
};

export function ProviderCard({ p }: { p: WellbeingProvider }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-card p-5 hover:shadow-md transition-shadow duration-200">
      {/* Category pill */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <span
          className="text-[10px] font-semibold tracking-[0.16em] uppercase px-2.5 py-1 rounded-full text-white"
          style={{ background: categoryColour[p.category] ?? "#8B7355" }}
        >
          {p.category}
        </span>
        <span className="text-xs text-muted-foreground font-light" title={pricingLabel[p.pricing]}>
          {p.pricing}
        </span>
      </div>

      {/* Name */}
      <h3 className="font-display text-xl font-semibold text-foreground leading-tight">
        {p.name}
      </h3>

      {/* Area */}
      <p className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
        {p.area}
      </p>

      {/* Notes */}
      <p className="text-sm font-light text-muted-foreground leading-relaxed flex-1">
        {p.notes}
      </p>

      {/* Links */}
      <div className="flex items-center gap-3 pt-1 border-t border-border/40">
        {p.website && (
          <a
            href={p.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium hover:text-primary transition-colors"
            style={{ color: "#8B7355" }}
          >
            <ExternalLink size={12} />
            Visit
          </a>
        )}
        {p.instagram && (
          <a
            href={`https://instagram.com/${p.instagram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram size={12} />
            {p.instagram}
          </a>
        )}
      </div>
    </div>
  );
}

export function WellbeingDirectory() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = wellbeingProviders.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.area.toLowerCase().includes(q) ||
      p.notes.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <div id="wellbeing-directory" className="mt-16">
      {/* Header */}
      <div className="max-w-2xl mb-8">
        <p
          className="font-sans text-xs font-semibold tracking-[0.22em] uppercase mb-2"
          style={{ color: "#C8A951" }}
        >
          London Wellness Directory
        </p>
        <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
          Find Your Wellbeing Practice
        </h3>
        <p className="font-sans text-base font-light text-muted-foreground leading-relaxed">
          A curated guide to yoga studios, teachers, Pilates, meditation centres, and fitness providers across London.
        </p>
      </div>

      {/* Search + Google Maps link */}
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[220px] max-w-sm">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="Search by name, area or keyword…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            className="w-full rounded-xl border border-border bg-card pl-9 pr-9 py-2.5 text-sm font-light placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
          />
          {search && (
            <button
              onClick={(e) => { e.stopPropagation(); setSearch(""); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>
        <a
          href="https://www.google.com/maps/search/yoga+wellness+london/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase px-4 py-2.5 rounded-xl border border-border/60 bg-card hover:bg-secondary/50 transition-colors text-muted-foreground hover:text-foreground"
        >
          <MapPin size={13} />
          Search Google Maps
        </a>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
            style={
              activeCategory === cat
                ? { background: "#2C1F14", color: "#FAF8F4" }
                : { background: "transparent", color: "#8B7355", border: "1px solid #d8cfc4" }
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="text-xs text-muted-foreground mb-5">
        Showing {filtered.length} provider{filtered.length !== 1 ? "s" : ""}
        {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
        {search ? ` matching "${search}"` : ""}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <ProviderCard key={`${p.name}-${p.category}`} p={p} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground font-light py-12 text-center">
          No providers found. Try a different search or category.
        </p>
      )}

      {/* Category pages */}
      <div className="mt-10">
        <p className="font-sans text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "#8B7355" }}>
          Browse by category
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {directoryCategories.map((c) => (
            <Link
              key={c.slug}
              href={`/directory/${c.slug}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {c.heading} <ArrowRight size={13} />
            </Link>
          ))}
        </div>
      </div>

      <p className="text-xs text-muted-foreground/50 mt-8 font-light">
        This directory is provided for information only. Listings are drawn from publicly available sources. Hampstead Wellbeing is not affiliated with the providers listed unless stated.
      </p>
    </div>
  );
}
