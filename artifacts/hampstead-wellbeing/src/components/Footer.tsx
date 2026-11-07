import { Heart } from "lucide-react";
import { Link } from "wouter";
import { directoryCategories } from "@/data/wellbeingDirectory";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <h3 className="font-display text-3xl font-medium text-primary-foreground">
            Hampstead Wellbeing
          </h3>
          <p className="font-sans text-background/70 max-w-sm">
            A safe place to support your wellbeing. We promote holistic self-care by encouraging a healthy mind-body connection.
          </p>
          <a
            href="mailto:hampsteadwellbeing@gmail.com"
            className="font-sans text-primary text-sm hover:text-primary-foreground transition-colors"
          >
            hampsteadwellbeing@gmail.com
          </a>
        </div>

        {/* Directory Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sans font-semibold tracking-wider uppercase text-sm text-primary">
            Directory
          </h4>
          <ul className="flex flex-col gap-3">
            {directoryCategories.map((c) => (
              <li key={c.slug}>
                <Link href={`/directory/${c.slug}`} className="text-background/80 hover:text-primary-foreground transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/directory" className="text-background/80 hover:text-primary-foreground transition-colors">
                All listings
              </Link>
            </li>
          </ul>
        </div>

        {/* Wellbeing Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sans font-semibold tracking-wider uppercase text-sm text-primary">
            Wellbeing
          </h4>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/corporate-wellness" className="text-background/80 hover:text-primary-foreground transition-colors">
                Corporate Wellness
              </Link>
            </li>
            <li>
              <Link href="/mindfulness" className="text-background/80 hover:text-primary-foreground transition-colors">
                Mindfulness
              </Link>
            </li>
            <li>
              <Link href="/breathwork" className="text-background/80 hover:text-primary-foreground transition-colors">
                Breathwork
              </Link>
            </li>
            <li>
              <a href="https://www.findfitnessinstructors.com" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-primary-foreground transition-colors">
                Find Fitness Instructors
              </a>
            </li>
            <li>
              <a href="https://www.retreatlistings.com" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-primary-foreground transition-colors">
                Retreat Listings
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-background/50 text-sm font-sans">
          &copy; {currentYear} Hampstead Wellbeing Ltd. Registered in England and Wales No. 15583591.
        </p>
        <p className="text-background/50 text-sm font-sans flex items-center gap-1">
          Made with <Heart size={14} className="text-primary mx-1" /> for your wellbeing
        </p>
      </div>
    </footer>
  );
}
