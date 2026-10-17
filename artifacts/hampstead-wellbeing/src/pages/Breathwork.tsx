import { motion } from "framer-motion";
import { ArrowRight, Wind, Brain, Moon, Shield, Zap } from "lucide-react";
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

const benefitsList = [
  {
    icon: Shield,
    title: "Stress Reduction",
    body: "Breathwork is widely used to help reduce stress levels and calm the body during periods of overwhelm, helping you return to a state of ease more quickly.",
  },
  {
    icon: Brain,
    title: "Anxiety Support",
    body: "Breathing exercises can help slow racing thoughts, reduce physical tension and create a greater sense of grounding during anxious moments.",
  },
  {
    icon: Moon,
    title: "Improved Sleep",
    body: "Many people find breathwork beneficial before sleep, particularly if stress or an overactive mind makes it difficult to wind down at night.",
  },
  {
    icon: Zap,
    title: "Enhanced Focus & Clarity",
    body: "Calmer breathing often leads to clearer thinking, improved concentration and a greater sense of presence throughout the day.",
  },
];

const sessionIncludes = [
  "Gentle breathing exercises",
  "Awareness of posture and body tension",
  "Grounding and mindfulness techniques",
  "Nervous system regulation practices",
  "Relaxation and integration time",
];

const whoCanBenefit = [
  "Stress and overwhelm",
  "Anxiety and nervous tension",
  "Burnout and exhaustion",
  "Difficulty relaxing",
  "Sleep difficulties",
  "Emotional fatigue",
  "Workplace stress",
  "Feelings of disconnection or mental overload",
];

export default function Breathwork() {
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
              Wellbeing Practice
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 leading-tight"
            >
              Breathwork: The Power of Conscious Breathing
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="font-sans text-xl text-foreground/70 leading-relaxed max-w-2xl mb-6"
            >
              Breathing is something we do automatically every moment of our lives, yet many people are unaware of how deeply the breath influences mental, emotional and physical wellbeing.
            </motion.p>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-foreground/70 leading-relaxed max-w-2xl mb-10">
              Breathwork is the practice of consciously changing breathing patterns to support relaxation, emotional balance, nervous system regulation and overall wellbeing. At Hampstead Wellbeing, our sessions are designed to help individuals slow down, regulate stress and create a greater sense of calm, clarity and presence.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-sans font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: "#2C1F14", color: "#FAF8F4" }}
              >
                Explore breathwork sessions <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is breathwork */}
      <section className="py-20 px-6 bg-card border-y border-border/50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl text-foreground mb-6">
              What Is Breathwork?
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-foreground/70 leading-relaxed mb-5">
              Breathwork refers to a range of breathing techniques and practices that intentionally influence physical, emotional and mental states. It can involve slow calming breaths, rhythmic breathing patterns or guided conscious breathing exercises — depending on the desired outcome.
            </motion.p>
            <motion.p variants={fadeInUp} className="font-sans text-base text-foreground/70 leading-relaxed mb-5">
              Different forms of breathwork may focus on:
            </motion.p>
            <motion.ul variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Relaxation and stress reduction",
                "Improving focus and concentration",
                "Calming anxiety",
                "Supporting emotional release",
                "Increasing energy levels",
                "Regulating the nervous system",
                "Enhancing mindfulness and self-awareness",
              ].map((item) => (
                <motion.li key={item} variants={fadeInUp} className="flex items-start gap-2 text-foreground/70 font-sans text-sm">
                  <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "#C8A951" }} />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* Nervous system */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl text-foreground mb-6">
              How Breath Affects the Nervous System
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-foreground/70 leading-relaxed mb-5">
              The breath is closely connected to the autonomic nervous system — the system responsible for regulating stress responses, heart rate and relaxation.
            </motion.p>
            <motion.p variants={fadeInUp} className="font-sans text-base text-foreground/70 leading-relaxed mb-5">
              When people experience stress or anxiety, breathing often becomes shallow, rapid or restricted. This can signal to the body that danger is present, keeping the nervous system in a heightened state of alert.
            </motion.p>
            <motion.p variants={fadeInUp} className="font-sans text-base text-foreground/70 leading-relaxed">
              Conscious breathing helps interrupt this stress response. Slower, controlled breathing activates the parasympathetic nervous system — sometimes called the body's "rest and digest" state — helping the body feel safer, calmer and more regulated.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-card border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl text-foreground mb-4">
              The Benefits of Breathwork
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-foreground/70 leading-relaxed mb-12 max-w-2xl">
              Unlike many wellness practices, breathwork requires no equipment and can often be integrated easily into daily life — even a few minutes each day can make a meaningful difference.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefitsList.map((b) => (
                <motion.div
                  key={b.title}
                  variants={fadeInUp}
                  className="bg-background rounded-2xl p-8 border border-border/50"
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

      {/* What happens in a session */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl text-foreground mb-6">
              What Happens During a Session?
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-foreground/70 leading-relaxed mb-6">
              Sessions are typically guided in a calm and supportive environment. Some sessions are deeply calming, while others may feel energising or emotionally releasing depending on the breathing style used.
            </motion.p>
            <motion.ul variants={stagger} className="space-y-3 mb-8">
              {sessionIncludes.map((item) => (
                <motion.li key={item} variants={fadeInUp} className="flex items-center gap-3 font-sans text-base text-foreground/80">
                  <Wind size={15} style={{ color: "#C8A951" }} className="flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* Who can benefit */}
      <section className="py-20 px-6 bg-card border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl text-foreground mb-5">
              Who Can Benefit from Breathwork?
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-sans text-base text-foreground/70 leading-relaxed mb-6">
              Breathwork may be helpful for people experiencing:
            </motion.p>
            <motion.ul variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {whoCanBenefit.map((item) => (
                <motion.li key={item} variants={fadeInUp} className="flex items-start gap-2 text-foreground/70 font-sans text-sm">
                  <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "#8B7355" }} />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <motion.p variants={fadeInUp} className="font-sans text-base text-foreground/70 leading-relaxed">
              Many people also use breathwork simply as a way to create more balance, calm and self-awareness in everyday life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Corporate link */}
      <section className="py-16 px-6 bg-background border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="rounded-2xl border border-border/50 bg-card p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <h3 className="font-display text-2xl text-foreground mb-2">Breathwork for Teams & Organisations</h3>
              <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                We also offer breathwork as part of corporate wellness programmes — sessions can be delivered in-person at your workplace or remotely.
              </p>
            </div>
            <Link
              href="/corporate-wellness"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
              style={{ background: "#2C1F14", color: "#FAF8F4" }}
            >
              Corporate wellness <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: "#2C1F14" }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl text-white mb-4">
              Explore Breathwork Sessions
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-white/80 leading-relaxed mb-8">
              If you would like to learn more about breathwork sessions or wellbeing support at Hampstead Wellbeing, we would love to hear from you.
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
