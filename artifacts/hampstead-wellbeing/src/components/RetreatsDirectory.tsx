import { useState } from "react";
import { ExternalLink, MapPin } from "lucide-react";
import { retreats, retreatCategories, retreatRegions, type Retreat } from "@/data/retreatsDirectory";

const categoryColour: Record<string, string> = {
  "Yoga":               "#8B7355",
  "Wellness & Spa":     "#4a7c60",
  "Fitness":            "#3d6e50",
  "Weight Loss & Detox":"#2C1F14",
  "Mindfulness":        "#5a7a65",
};

const regionBadge: Record<string, string> = {
  "UK":            "#C8A951",
  "International": "#8B6914",
};

const pricingLabel: Record<string, string> = {
  "£":    "Budget-friendly",
  "££":   "Mid-range",
  "£££":  "Premium",
  "££££": "Ultra-luxury",
};

function RetreatCard({ r }: { r: Retreat }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background p-6 hover:shadow-lg transition-shadow duration-200">
      {/* Top row: category + region + pricing */}
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="text-[10px] font-semibold tracking-[0.16em] uppercase px-2.5 py-1 rounded-full text-white"
          style={{ background: categoryColour[r.category] ?? "#8B7355" }}
        >
          {r.category}
        </span>
        <span
          className="text-[10px] font-semibold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full text-white"
          style={{ background: regionBadge[r.region] ?? "#C8A951" }}
        >
          {r.region}
        </span>
        <span
          className="ml-auto text-xs text-muted-foreground font-light"
          title={pricingLabel[r.pricing]}
        >
          {r.pricing}
        </span>
      </div>

      {/* Name */}
      <h3 className="font-display text-xl font-semibold text-foreground leading-tight">
        {r.name}
      </h3>

      {/* Location + duration */}
      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <MapPin size={11} />
          {r.location}
        </span>
        <span className="text-border/80">·</span>
        <span>{r.duration}</span>
      </div>

      {/* Description */}
      <p className="text-sm font-light text-muted-foreground leading-relaxed flex-1">
        {r.description}
      </p>

      {/* Highlights */}
      <div className="flex flex-wrap gap-1.5">
        {r.highlights.map((h) => (
          <span
            key={h}
            className="text-[10px] font-medium px-2 py-0.5 rounded-full border border-border/60 text-muted-foreground"
          >
            {h}
          </span>
        ))}
      </div>

      {/* Website link */}
      <div className="pt-1 border-t border-border/40">
        <a
          href={r.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-medium transition-colors"
          style={{ color: "#8B7355" }}
        >
          <ExternalLink size={12} />
          Visit website
        </a>
      </div>
    </div>
  );
}

export function RetreatsDirectory() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeRegion, setActiveRegion] = useState("All regions");
  const [search, setSearch] = useState("");

  const filtered = retreats.filter((r) => {
    const matchCat = activeCategory === "All" || r.category === activeCategory;
    const matchRegion = activeRegion === "All regions" || r.region === activeRegion;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      r.name.toLowerCase().includes(q) ||
      r.location.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.highlights.some((h) => h.toLowerCase().includes(q));
    return matchCat && matchRegion && matchSearch;
  });

  return (
    <section id="retreats" className="py-24 md:py-32 px-6 bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mb-12">
          <p
            className="font-sans text-xs font-semibold tracking-[0.22em] uppercase mb-2"
            style={{ color: "#C8A951" }}
          >
            Retreats Directory
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-5">
            Find Your Perfect Retreat
          </h2>
          <p className="font-sans text-lg font-light text-muted-foreground leading-relaxed">
            A curated guide to yoga, wellness, fitness, detox and mindfulness retreats — hand-picked from trusted operators across the UK and internationally. Not affiliated unless stated.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by name, location or keyword…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:max-w-xs rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-light placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />

          {/* Region filter */}
          <div className="flex gap-2">
            {retreatRegions.map((reg) => (
              <button
                key={reg}
                onClick={() => setActiveRegion(reg)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
                style={
                  activeRegion === reg
                    ? { background: "#C8A951", color: "#2C1F14" }
                    : { background: "transparent", color: "#7a8a7a", border: "1px solid #c8d8c8" }
                }
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {retreatCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
              style={
                activeCategory === cat
                  ? { background: "#2C1F14", color: "#FAF8F4" }
                  : { background: "transparent", color: "#4a6155", border: "1px solid #c8d8c8" }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-xs text-muted-foreground mb-6">
          Showing {filtered.length} retreat{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "All" ? ` · ${activeCategory}` : ""}
          {activeRegion !== "All regions" ? ` · ${activeRegion}` : ""}
          {search ? ` · "${search}"` : ""}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((r) => (
              <RetreatCard key={r.name} r={r} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground font-light py-16 text-center">
            No retreats found. Try adjusting your filters or search.
          </p>
        )}

        <p className="text-xs text-muted-foreground/50 mt-10 font-light">
          All listings are drawn from publicly available information. Hampstead Wellbeing is not affiliated with listed operators unless stated. Pricing tiers are indicative only — visit each website for current rates.
        </p>
      </div>
    </section>
  );
}
