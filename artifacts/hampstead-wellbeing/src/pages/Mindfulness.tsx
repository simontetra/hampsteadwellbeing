import { motion } from "framer-motion";
import { ArrowRight, Wind, Brain, Moon, Shield, Zap, Leaf, TreePine, Sunrise, BedDouble } from "lucide-react";
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

// ── Breathwork data ──────────────────────────────────────────
const breathworkBenefits = [
  { icon: Shield, title: "Stress Reduction", body: "Breathwork is widely used to help reduce stress levels and calm the body during periods of overwhelm, helping you return to a state of ease more quickly." },
  { icon: Brain, title: "Anxiety Support", body: "Breathing exercises can help slow racing thoughts, reduce physical tension and create a greater sense of grounding during anxious moments." },
  { icon: Moon, title: "Improved Sleep", body: "Many people find breathwork beneficial before sleep, particularly if stress or an overactive mind makes it difficult to wind down at night." },
  { icon: Zap, title: "Enhanced Focus & Clarity", body: "Calmer breathing often leads to clearer thinking, improved concentration and a greater sense of presence throughout the day." },
];

// ── Shared helpers ───────────────────────────────────────────
function PracticeLabel({ n }: { n: string }) {
  return (
    <p className="font-sans text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "#8B7355" }}>
      {n}
    </p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <motion.ul variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {items.map((item) => (
        <motion.li key={item} variants={fadeInUp} className="flex items-start gap-2 text-foreground/70 font-sans text-sm">
          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "#C8A951" }} />
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}

function DotList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-foreground/70 font-sans text-sm">
          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "#8B7355" }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function SectionDivider({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="py-10 px-6 border-t border-border/50 bg-card">
      <div className="max-w-4xl mx-auto flex items-center gap-4">
        <Icon size={18} style={{ color: "#C8A951" }} />
        <p className="font-sans text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}

export default function Mindfulness() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-background to-background pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeInUp} className="font-sans text-xs font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#C8A951" }}>
              Wellbeing Practice
            </motion.p>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 leading-tight">
              Mindfulness
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-sans text-xl text-foreground/70 leading-relaxed max-w-2xl mb-6">
              Mindfulness is the practice of bringing gentle, non-judgemental attention to the present moment — to what we are thinking, feeling and experiencing right now.
            </motion.p>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-foreground/70 leading-relaxed max-w-2xl mb-10">
              At Hampstead Wellbeing, we offer a range of mindfulness practices designed to help you slow down, regulate stress and reconnect with a deeper sense of calm and clarity. Below you will find our current offerings — with more to come.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-sans font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg" style={{ background: "#2C1F14", color: "#FAF8F4" }}>
                Enquire about mindfulness sessions <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionDivider icon={Leaf} label="Mindfulness Practices" />

      {/* ══════════════════════════════════════════════════════ */}
      {/* PRACTICE 01 — BREATHWORK                              */}
      {/* ══════════════════════════════════════════════════════ */}

      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <PracticeLabel n="Practice 01" />
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl text-foreground mb-6">Breathwork</motion.h2>
            <motion.p variants={fadeInUp} className="font-sans text-xl text-foreground/70 leading-relaxed mb-5 max-w-2xl">
              Breathing is something we do automatically every moment of our lives, yet many people are unaware of how deeply the breath influences mental, emotional and physical wellbeing.
            </motion.p>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-foreground/70 leading-relaxed max-w-2xl">
              Breathwork is the practice of consciously changing breathing patterns to support relaxation, emotional balance, nervous system regulation and overall wellbeing. Our sessions are designed to help individuals slow down, regulate stress and create a greater sense of calm, clarity and presence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 bg-card border-y border-border/50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h3 variants={fadeInUp} className="font-display text-3xl text-foreground mb-5">What Breathwork Can Help With</motion.h3>
            <BulletList items={["Relaxation and stress reduction", "Improving focus and concentration", "Calming anxiety", "Supporting emotional release", "Increasing energy levels", "Regulating the nervous system", "Enhancing mindfulness and self-awareness"]} />
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h3 variants={fadeInUp} className="font-display text-3xl text-foreground mb-6">How Breath Affects the Nervous System</motion.h3>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-foreground/70 leading-relaxed mb-5">
              The breath is closely connected to the autonomic nervous system — responsible for regulating stress responses, heart rate and relaxation.
            </motion.p>
            <motion.p variants={fadeInUp} className="font-sans text-base text-foreground/70 leading-relaxed mb-5">
              When we experience stress or anxiety, breathing often becomes shallow, rapid or restricted — signalling to the body that danger is present and keeping the nervous system in a heightened state of alert.
            </motion.p>
            <motion.p variants={fadeInUp} className="font-sans text-base text-foreground/70 leading-relaxed">
              Conscious breathing helps interrupt this stress response. Slower, controlled breathing activates the parasympathetic nervous system — the body's "rest and digest" state — helping us feel safer, calmer and more regulated.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 bg-card border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h3 variants={fadeInUp} className="font-display text-3xl text-foreground mb-4">The Benefits of Breathwork</motion.h3>
            <motion.p variants={fadeInUp} className="font-sans text-base text-foreground/70 leading-relaxed mb-10 max-w-2xl">
              Unlike many wellness practices, breathwork requires no equipment and can often be integrated easily into daily life — even a few minutes each day can make a meaningful difference.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {breathworkBenefits.map((b) => (
                <motion.div key={b.title} variants={fadeInUp} className="bg-background rounded-2xl p-7 border border-border/50">
                  <b.icon size={26} className="mb-4" style={{ color: "#8B7355" }} />
                  <h4 className="font-display text-xl text-foreground mb-2">{b.title}</h4>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">{b.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h3 variants={fadeInUp} className="font-display text-3xl text-foreground mb-6">What Happens in a Breathwork Session?</motion.h3>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-foreground/70 leading-relaxed mb-6">
              Sessions are guided in a calm and supportive environment. Some sessions are deeply calming, while others may feel energising or emotionally releasing depending on the breathing style used.
            </motion.p>
            <motion.ul variants={stagger} className="space-y-3 mb-8">
              {["Gentle breathing exercises", "Awareness of posture and body tension", "Grounding and mindfulness techniques", "Nervous system regulation practices", "Relaxation and integration time"].map((item) => (
                <motion.li key={item} variants={fadeInUp} className="flex items-center gap-3 font-sans text-base text-foreground/80">
                  <Wind size={14} style={{ color: "#C8A951" }} className="flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════ */}
      {/* PRACTICE 02 — MEDITATION                              */}
      {/* ══════════════════════════════════════════════════════ */}

      <SectionDivider icon={Leaf} label="Practice 02 — Meditation" />

      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <PracticeLabel n="Practice 02" />
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl text-foreground mb-6">Meditation: Finding Calm in a Busy World</motion.h2>
            <motion.p variants={fadeInUp} className="font-sans text-xl text-foreground/70 leading-relaxed max-w-2xl mb-5">
              Meditation has moved from ancient spiritual practice into modern everyday wellbeing — and for good reason. In a world filled with constant notifications, stress, busy schedules and mental overload, many people are searching for ways to slow down, reconnect and breathe again.
            </motion.p>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-foreground/70 leading-relaxed max-w-2xl">
              Meditation offers a simple yet powerful practice that supports mental clarity, emotional balance and deep relaxation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 bg-card border-y border-border/50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h3 variants={fadeInUp} className="font-display text-3xl text-foreground mb-5">What Is Meditation?</motion.h3>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-foreground/70 leading-relaxed mb-4">
              Meditation is the practice of gently focusing the mind and bringing awareness into the present moment. It can involve breath awareness, mindfulness, guided visualisation, sound, movement or silent reflection.
            </motion.p>
            <motion.p variants={fadeInUp} className="font-sans text-base text-foreground/70 leading-relaxed">
              Contrary to popular belief, meditation is not about "emptying your mind". Thoughts will always arise. Meditation teaches us to notice them without becoming overwhelmed by them.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h3 variants={fadeInUp} className="font-display text-3xl text-foreground mb-5">Benefits of Meditation</motion.h3>
            <motion.div variants={fadeInUp}>
              <BulletList items={["Reduced stress and anxiety", "Improved sleep quality", "Greater emotional balance", "Better concentration and focus", "Improved resilience during difficult times", "Deeper connection with yourself"]} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 bg-card border-y border-border/50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h3 variants={fadeInUp} className="font-display text-3xl text-foreground mb-8">Different Types of Meditation</motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { title: "Mindfulness Meditation", body: "Focuses on awareness of the present moment through breathing, bodily sensations or sounds." },
                { title: "Guided Meditation", body: "Uses spoken guidance and visualisation to support relaxation and focus." },
                { title: "Breathwork Meditation", body: "Breath-focused practices help calm the nervous system and release physical tension." },
                { title: "Sound Meditation", body: "Sound baths, singing bowls and calming frequencies can create deeply restorative meditative experiences." },
              ].map((t) => (
                <motion.div key={t.title} variants={fadeInUp} className="bg-background rounded-2xl p-6 border border-border/50">
                  <h4 className="font-display text-xl text-foreground mb-2">{t.title}</h4>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">{t.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h3 variants={fadeInUp} className="font-display text-3xl text-foreground mb-5">Meditation, Stress and Sleep</motion.h3>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-foreground/70 leading-relaxed mb-4">
              Many people turn to meditation during periods of stress, burnout or emotional overwhelm. Meditation creates space between thoughts and reactions, helping calm the nervous system and reduce mental noise. Even a few mindful minutes each day can make a meaningful difference.
            </motion.p>
            <motion.p variants={fadeInUp} className="font-sans text-base text-foreground/70 leading-relaxed mb-4">
              Stress and poor sleep are closely connected. Meditation can help slow racing thoughts, release tension and support deeper relaxation before bedtime. Many people find guided sleep meditations especially helpful for improving sleep quality.
            </motion.p>
            <motion.h3 variants={fadeInUp} className="font-display text-3xl text-foreground mb-4 mt-10">Meditation in Nature</motion.h3>
            <motion.p variants={fadeInUp} className="font-sans text-base text-foreground/70 leading-relaxed mb-4">
              Meditation becomes even more powerful when combined with nature. Sitting beneath trees, listening to birdsong or breathing fresh countryside air can create a profound sense of calm and grounding. Nature naturally slows us down — meditation helps us fully experience it.
            </motion.p>
            <motion.h3 variants={fadeInUp} className="font-display text-3xl text-foreground mb-4 mt-10">How to Begin a Meditation Practice</motion.h3>
            <motion.div variants={fadeInUp}>
              <DotList items={["Start with just 5 minutes a day", "Focus gently on your breathing", "Be patient with wandering thoughts", "Create a peaceful space to sit quietly", "Try guided meditations if you are new"]} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════ */}
      {/* PRACTICE 03 — NATURE & WELLBEING                      */}
      {/* ══════════════════════════════════════════════════════ */}

      <SectionDivider icon={TreePine} label="Practice 03 — Nature & Wellbeing" />

      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <PracticeLabel n="Practice 03" />
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Nature and Wellbeing: Why Time Outdoors Heals Mind and Body
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-sans text-xl text-foreground/70 leading-relaxed max-w-2xl mb-5">
              Modern life often keeps us indoors — surrounded by screens, schedules and constant stimulation. Yet many people instinctively feel calmer, clearer and more grounded after spending time in nature.
            </motion.p>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-foreground/70 leading-relaxed max-w-2xl">
              Whether walking through woodland, sitting beside the sea or breathing fresh country air, nature has a powerful effect on wellbeing. Humans are deeply connected to the natural world and spending time outdoors can help restore balance, reduce stress and support emotional health.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 bg-card border-y border-border/50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h3 variants={fadeInUp} className="font-display text-3xl text-foreground mb-5">Mental Health Benefits of Nature</motion.h3>
            <motion.div variants={fadeInUp}>
              <BulletList items={["Reduced stress and anxiety", "Improved mood", "Greater emotional balance", "Clearer thinking", "Improved relaxation", "Better overall wellbeing"]} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h3 variants={fadeInUp} className="font-display text-3xl text-foreground mb-5">Nature and Stress Reduction</motion.h3>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-foreground/70 leading-relaxed mb-8">
              Natural environments help calm the nervous system. Fresh air, greenery, open landscapes and quiet surroundings all contribute to feelings of restoration and peace. Even short periods outdoors can make a noticeable difference to mental wellbeing.
            </motion.p>
            <motion.h3 variants={fadeInUp} className="font-display text-3xl text-foreground mb-5">The Benefits of Walking in Nature</motion.h3>
            <motion.p variants={fadeInUp} className="font-sans text-base text-foreground/70 leading-relaxed mb-8">
              Walking outdoors combines gentle movement with mindfulness and fresh air. Nature walks help many people feel grounded, present and mentally refreshed. Unlike intense exercise, mindful walking in nature often feels restorative rather than demanding.
            </motion.p>
            <motion.h3 variants={fadeInUp} className="font-display text-3xl text-foreground mb-5">Forest Bathing and Mindful Nature Practices</motion.h3>
            <motion.p variants={fadeInUp} className="font-sans text-base text-foreground/70 leading-relaxed mb-4">
              The Japanese practice of forest bathing — <em>Shinrin-yoku</em> — involves immersing yourself slowly and mindfully in woodland environments. This can include listening to birdsong, noticing light through trees and simply breathing deeply in fresh air.
            </motion.p>
            <motion.p variants={fadeInUp} className="font-sans text-base text-foreground/70 leading-relaxed mb-8">
              Time outdoors may also help support healthier sleep patterns by calming the nervous system and reconnecting the body with natural daylight rhythms.
            </motion.p>
            <motion.h3 variants={fadeInUp} className="font-display text-3xl text-foreground mb-5">Nature Retreats and Holistic Wellbeing</motion.h3>
            <motion.p variants={fadeInUp} className="font-sans text-base text-foreground/70 leading-relaxed mb-5">
              Wellness retreats in natural settings offer an opportunity to fully step away from daily pressures and reconnect with yourself. Nature-based retreats may include:
            </motion.p>
            <motion.div variants={fadeInUp}>
              <DotList items={["Outdoor yoga", "Meditation in nature", "Breathwork", "Mindfulness walks", "Sound healing", "Wild swimming"]} />
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-10">
              <motion.h3 className="font-display text-3xl text-foreground mb-5">Simple Ways to Reconnect with Nature</motion.h3>
              <DotList items={["Take regular walks outdoors", "Spend time in parks or gardens", "Watch sunrise or sunset", "Reduce screen time outside", "Practice mindfulness outdoors"]} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════ */}
      {/* PRACTICE 04 — SLEEP & WELLBEING                       */}
      {/* ══════════════════════════════════════════════════════ */}

      <SectionDivider icon={BedDouble} label="Practice 04 — Sleep & Wellbeing" />

      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <PracticeLabel n="Practice 04" />
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Sleep and Wellbeing: Why Rest Is Essential for Mind and Body
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-sans text-xl text-foreground/70 leading-relaxed max-w-2xl mb-5">
              Sleep is one of the foundations of good health and wellbeing — yet for many people, quality rest has become increasingly difficult to achieve.
            </motion.p>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-foreground/70 leading-relaxed max-w-2xl">
              Busy minds, stress, screen time and demanding lifestyles often leave people feeling exhausted but unable to fully switch off.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 bg-card border-y border-border/50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h3 variants={fadeInUp} className="font-display text-3xl text-foreground mb-5">Why Sleep Matters</motion.h3>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-foreground/70 leading-relaxed mb-5">
              During sleep, the body and mind go through essential restorative processes that support emotional wellbeing, physical recovery and mental clarity. When sleep becomes disrupted, many people experience:
            </motion.p>
            <motion.div variants={fadeInUp}>
              <BulletList items={["Low energy and fatigue", "Increased stress and anxiety", "Brain fog and poor concentration", "Emotional overwhelm", "Reduced resilience"]} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h3 variants={fadeInUp} className="font-display text-3xl text-foreground mb-5">Modern Life and Sleep Problems</motion.h3>
            <motion.p variants={fadeInUp} className="font-sans text-base text-foreground/70 leading-relaxed mb-5">Modern lifestyles often interfere with healthy sleep patterns through:</motion.p>
            <motion.div variants={fadeInUp} className="mb-10">
              <DotList items={["Constant screen use", "Stress and overthinking", "Busy schedules", "Excess stimulation", "Lack of downtime"]} />
            </motion.div>
            <motion.h3 variants={fadeInUp} className="font-display text-3xl text-foreground mb-5">The Connection Between Stress and Sleep</motion.h3>
            <motion.p variants={fadeInUp} className="font-sans text-base text-foreground/70 leading-relaxed mb-4">
              Stress and poor sleep are closely connected. When the nervous system remains overstimulated, it becomes harder for the body to fully relax. This can create a cycle where stress affects sleep and poor sleep increases stress further.
            </motion.p>
            <motion.p variants={fadeInUp} className="font-sans text-base text-foreground/70 leading-relaxed mb-10">
              Meditation and mindfulness practices can help quieten racing thoughts, reduce tension and encourage deeper relaxation before bedtime. Guided sleep meditations are particularly popular for calming the mind in the evening.
            </motion.p>
            <motion.h3 variants={fadeInUp} className="font-display text-3xl text-foreground mb-6">Natural Ways to Improve Sleep</motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: Moon, title: "Create a Calming Evening Routine", body: "Gentle evening rituals help signal to the body that it is time to slow down." },
                { icon: Sunrise, title: "Reduce Screen Time", body: "Reducing bright screens before bed may help support relaxation and sleep quality." },
                { icon: Wind, title: "Practice Breathwork or Meditation", body: "Mindfulness and breathing exercises can calm the nervous system before sleep." },
                { icon: TreePine, title: "Spend Time Outdoors", body: "Natural daylight exposure and fresh air may support healthier sleep rhythms." },
              ].map((t) => (
                <motion.div key={t.title} variants={fadeInUp} className="bg-card rounded-2xl p-6 border border-border/50">
                  <t.icon size={22} className="mb-3" style={{ color: "#8B7355" }} />
                  <h4 className="font-display text-xl text-foreground mb-2">{t.title}</h4>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">{t.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 bg-card border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h3 variants={fadeInUp} className="font-display text-3xl text-foreground mb-5">Sleep Retreats and Wellness Escapes</motion.h3>
            <motion.p variants={fadeInUp} className="font-sans text-base text-foreground/70 leading-relaxed mb-5">
              Many people now seek wellness retreats specifically to rest, reset and recover from exhaustion or burnout. Sleep-focused retreats may include:
            </motion.p>
            <motion.div variants={fadeInUp} className="mb-8">
              <DotList items={["Relaxation therapies", "Yoga and meditation", "Sound healing", "Digital detox experiences", "Nature immersion", "Breathwork sessions"]} />
            </motion.div>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-foreground/70 leading-relaxed italic border-l-2 pl-5" style={{ borderColor: "#C8A951" }}>
              "Modern culture often celebrates busyness, but true wellbeing requires rest. Sleep is not wasted time — it is one of the most important forms of healing and restoration."
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* More coming soon */}
      <section className="py-16 px-6 bg-background border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="rounded-2xl border border-dashed border-border bg-card/50 p-8 text-center">
            <Leaf size={24} className="mx-auto mb-3" style={{ color: "#C8A951" }} />
            <h3 className="font-display text-2xl text-foreground mb-2">More Mindfulness Practices Coming Soon</h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
              We are expanding this section with further mindfulness practices. Contact us to find out what sessions are currently available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Corporate crosslink */}
      <section className="py-14 px-6 bg-background border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="rounded-2xl border border-border/50 bg-card p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <h3 className="font-display text-2xl text-foreground mb-2">Mindfulness for Teams &amp; Organisations</h3>
              <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                We offer breathwork and mindfulness sessions as part of corporate wellness programmes — delivered in-person at your workplace or remotely.
              </p>
            </div>
            <Link href="/corporate-wellness/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap" style={{ background: "#2C1F14", color: "#FAF8F4" }}>
              Corporate wellness <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: "#2C1F14" }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl text-white mb-4">Explore Mindfulness Sessions</motion.h2>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-white/80 leading-relaxed mb-8">
              If you would like to learn more about breathwork, meditation, mindfulness or any of our wellbeing sessions, we would love to hear from you.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-sans font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl" style={{ background: "#C8A951", color: "#2C1F14" }}>
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
