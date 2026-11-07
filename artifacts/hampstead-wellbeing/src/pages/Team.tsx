import React from "react";
import { Navbar } from "@/components/Navbar";
import hwLogo from "@/assets/hw-logo.png";

const base = import.meta.env.BASE_URL;

const linkStyle: React.CSSProperties = {
  color: "#8B7355",
  fontWeight: 500,
  textDecoration: "underline",
  textUnderlineOffset: "3px",
};

const people: { name: string; role: string; photo: string; bio: React.ReactNode[] }[] = [
  {
    name: "Simon Dale",
    role: "Co-Founder",
    photo: `${base}images/founder-headshot.webp`,
    bio: [
      "Simon is a writer, artist, and serial entrepreneur with a lifelong passion for making things that matter. His career spans creative industries and digital ventures — from storytelling and visual art to building platforms that connect and empower people.",
      <>As co-founder of <a href="https://www.mandy.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>The Mandy Network</a>, Simon helped shape one of the most recognised communities in the creative industries, giving performers and industry professionals a trusted place to find work and opportunity. That experience instilled a deep belief in the power of fair, accessible platforms — a belief that sits at the heart of Hampstead Wellbeing.</>,
      "Driven by a conviction that wellbeing should be within reach for everyone, Simon co-founded Hampstead Wellbeing to make wellness and education genuinely accessible — to practitioners and the people they serve alike.",
    ],
  },
  {
    name: "Annameka Dale",
    role: "Co-Founder",
    photo: `${base}images/annameka-headshot.webp`,
    bio: [
      "Annameka is a co-founder of Hampstead Wellbeing and the driving force behind its real-world wellbeing experiences. A qualified yoga teacher, she has designed and delivered yoga and wellness retreats for women focused on self-appreciation and holistic wellbeing, and delivers weekly Hatha yoga classes.",
      "Her professional background spans nearly a decade at Global Education and Training for Energy, where she rose to Senior Event Consultant — delivering high-profile international events across Europe, the Middle East, Central Asia, and North America, and building lasting relationships with senior leaders. That operational rigour, combined with genuine warmth, is evident in everything she brings to Hampstead Wellbeing.",
      <>She is also a co-founder of the precursor to <a href="https://www.actorsguild.co.uk" target="_blank" rel="noopener noreferrer" style={linkStyle}>the Actors Guild of Great Britain</a> — creative, community-minded, and calm under pressure in everything she does.</>,
    ],
  },
];

export default function Team() {
  return (
    <div className="min-h-screen" style={{ background: "#FAF8F4" }}>
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-40 pb-20 px-6 md:px-12 text-center overflow-hidden"
        style={{ background: "#2C1F14" }}
      >
        {/* decorative arcs */}
        <div
          className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-tr-full opacity-20"
          style={{ background: "#8B7355" }}
        />
        <div
          className="absolute top-0 right-0 w-[30vw] h-[30vw] rounded-bl-full opacity-10"
          style={{ background: "#C8A951" }}
        />

        <div className="relative max-w-3xl mx-auto">
          <p
            className="font-sans text-xs font-semibold tracking-[0.22em] uppercase mb-4"
            style={{ color: "#C8A951" }}
          >
            Meet the Team
          </p>
          <h1
            className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6"
            style={{ color: "#FAF8F4" }}
          >
            The People Behind<br />
            <span style={{ color: "#C8A951" }}>Hampstead Wellbeing</span>
          </h1>
          <p
            className="font-sans text-lg font-light leading-relaxed"
            style={{ color: "#c8d8c8" }}
          >
            Founders committed to making wellness and education genuinely accessible — to practitioners and students alike.
          </p>
        </div>
      </section>

      {/* Team Cards */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {people.map((person) => (
            <div key={person.name} className="flex flex-col">
              {/* Photo */}
              <div
                className="relative w-full overflow-hidden rounded-2xl mb-6"
                style={{ aspectRatio: "3/4", maxHeight: "480px" }}
              >
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-full object-cover object-top"
                />
                {/* subtle gradient overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(26,46,34,0.35), transparent)",
                  }}
                />
              </div>

              {/* Name & role */}
              <div
                className="w-10 h-0.5 rounded-full mb-3"
                style={{ background: "#C8A951" }}
              />
              <h2
                className="font-display text-3xl font-bold mb-1"
                style={{ color: "#2C1F14" }}
              >
                {person.name}
              </h2>
              <p
                className="font-sans text-xs font-semibold tracking-[0.18em] uppercase mb-4"
                style={{ color: "#C8A951" }}
              >
                {person.role}
              </p>

              {/* Bio paragraphs */}
              <div className="flex flex-col gap-3">
                {person.bio.map((para, i) => (
                  <p
                    key={i}
                    className="font-sans text-base font-light leading-relaxed"
                    style={{ color: "#4a6155" }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer strip */}
      <footer
        className="py-10 px-6 md:px-12 text-center"
        style={{ background: "#2C1F14" }}
      >
        <a href="/" aria-label="Go to home">
          <img src={hwLogo} alt="Hampstead Wellbeing" className="h-16 mx-auto mb-4 opacity-80 hover:opacity-100 transition-opacity" />
        </a>
        <p className="font-sans text-sm font-light" style={{ color: "#4a6155" }}>
          Hampstead Wellbeing Ltd · Reg. 15583591 · England &amp; Wales
        </p>
        <p className="font-sans text-xs font-light mt-1" style={{ color: "#8B7355" }}>
          <a href="mailto:hampsteadwellbeing@gmail.com" className="hover:text-[#C8A951] transition-colors">
            hampsteadwellbeing@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}
