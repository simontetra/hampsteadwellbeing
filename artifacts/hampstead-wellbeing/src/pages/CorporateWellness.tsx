import { motion } from "framer-motion";
import { ArrowRight, Briefcase, CheckCircle2, Users, Zap, Heart } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const benefits = [
  {
    icon: Zap,
    title: "Reduced Stress & Burnout",
    body: "Breathwork, mindfulness and nervous system regulation help employees manage pressure and recover more quickly from demanding periods.",
  },
  {
    icon: CheckCircle2,
    title: "Improved Focus & Productivity",
    body: "Calmer employees think more clearly. Mental clarity supports creativity, better decision-making and sustained concentration throughout the day.",
  },
  {
    icon: Users,
    title: "Stronger Team Relationships",
    body: "Wellbeing programmes build emotional awareness and empathy, creating more positive, communicative and cohesive teams.",
  },
  {
    icon: Heart,
    title: "Higher Retention",
    body: "Employees are more likely to stay with organisations where they feel genuinely supported, valued and seen as whole people.",
  },
];

const offerings = [
  "Corporate breathwork workshops",
  "Stress reduction and resilience sessions",
  "Mindfulness and grounding practices",
  "Workplace wellness talks",
  "Small group wellbeing sessions",
  "Private leadership wellbeing support",
  "Retreat-style wellbeing experiences",
];

const stressEffects = [
  "Anxiety and low mood",
  "Burnout and exhaustion",
  "Poor concentration and productivity",
  "Increased absenteeism",
  "Lower team morale",
  "Difficulty sleeping",
  "Physical tension and fatigue",
  "Reduced engagement and motivation",
];

export default function CorporateWellness() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-background to-background pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={fadeInUp}
              className="font-sans text-xs font-semibold tracking-[0.22em] uppercase mb-4"
              style={{ color: "#C8A951" }}
            >
              Services
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 leading-tight"
            >
              Corporate Wellness &amp; Workplace Wellbeing
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="font-sans text-xl text-foreground/70 leading-relaxed max-w-2xl mb-10"
            >
              Modern workplaces are changing. More businesses than ever now recognise that employee wellbeing is not simply a "nice extra" — it is essential to a healthy, productive and sustainable organisation.
            </motion.p>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-foreground/70 leading-relaxed max-w-2xl mb-10">
              At Hampstead Wellbeing, we offer workplace wellbeing support designed to reduce stress, improve mental clarity and create healthier working environments for individuals and teams alike.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-sans font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: "#2C1F14", color: "#FAF8F4" }}
              >
                Enquire about workplace wellbeing <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-20 px-6 bg-card border-y border-border/50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl text-foreground mb-6">
              Why Workplace Wellbeing Matters
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-foreground/70 leading-relaxed mb-6">
              Many employees today experience high levels of stress, overwhelm and burnout. Long working hours, constant digital connection, performance pressures and balancing work with personal responsibilities can all take a toll on both physical and mental health.
            </motion.p>
            <motion.p variants={fadeInUp} className="font-sans text-base text-foreground/70 leading-relaxed mb-6">
              Unchecked workplace stress can contribute to:
            </motion.p>
            <motion.ul variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {stressEffects.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeInUp}
                  className="flex items-start gap-2 text-foreground/70 font-sans text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "#C8A951" }} />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <motion.p variants={fadeInUp} className="font-sans text-base text-foreground/70 leading-relaxed">
              Supporting employee wellbeing benefits individuals and organisations alike. Businesses that invest in wellbeing often experience stronger workplace culture, improved communication and greater employee loyalty.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl text-foreground mb-4">
              The Benefits of Workplace Wellbeing
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-foreground/70 leading-relaxed mb-12 max-w-2xl">
              When wellbeing is prioritised, organisations consistently see improvements in morale, productivity, creativity, communication and staff retention.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((b) => (
                <motion.div
                  key={b.title}
                  variants={fadeInUp}
                  className="bg-card rounded-2xl p-8 border border-border/50"
                >
                  <b.icon size={28} className="mb-4" style={{ color: "#8B7355" }} />
                  <h3 className="font-display text-2xl text-foreground mb-3">{b.title}</h3>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">{b.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Breathwork spotlight */}
      <section className="py-20 px-6 bg-card border-y border-border/50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl text-foreground mb-6">
              Breathwork in the Workplace
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-foreground/70 leading-relaxed mb-4">
              One increasingly popular element of corporate wellness is breathwork. Simple breathing techniques can be remarkably effective in helping employees regulate stress and improve focus within minutes.
            </motion.p>
            <motion.p variants={fadeInUp} className="font-sans text-base text-foreground/70 leading-relaxed mb-6">
              Breathwork can be particularly beneficial for:
            </motion.p>
            <motion.ul variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "High-pressure work environments",
                "Leadership teams",
                "Creative industries",
                "Remote or hybrid teams",
                "Employees experiencing stress or burnout",
                "Teams navigating organisational change",
              ].map((item) => (
                <motion.li key={item} variants={fadeInUp} className="flex items-start gap-2 text-foreground/70 font-sans text-sm">
                  <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "#8B7355" }} />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={fadeInUp}>
              <Link
                href="/mindfulness"
                className="inline-flex items-center gap-2 font-sans font-semibold text-sm transition-colors hover:underline"
                style={{ color: "#8B7355" }}
              >
                Learn more about breathwork <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our offerings */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl text-foreground mb-4">
              Corporate Wellness with Hampstead Wellbeing
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-foreground/70 leading-relaxed mb-6">
              We offer tailored workplace wellbeing sessions for organisations seeking to support their teams in meaningful and sustainable ways. Our approach is calm, compassionate and grounded.
            </motion.p>
            <motion.ul variants={stagger} className="space-y-3 mb-10">
              {offerings.map((item) => (
                <motion.li key={item} variants={fadeInUp} className="flex items-center gap-3 font-sans text-base text-foreground/80">
                  <Briefcase size={15} style={{ color: "#C8A951" }} className="flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-border/50" style={{ background: "#2C1F14" }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl text-white mb-4">
              Enquire About Workplace Wellbeing
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-white/80 leading-relaxed mb-8">
              If you would like to discuss corporate wellness sessions, workplace wellbeing support or tailored programmes for your team, we would be delighted to hear from you.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-sans font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: "#C8A951", color: "#2C1F14" }}
              >
                Contact Hampstead Wellbeing <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
