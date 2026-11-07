import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, ArrowRight, BookOpen, GraduationCap, MapPin, CheckCircle2, Sun, Users, Briefcase, Zap, Calculator, Globe, Phone, FileText, Wind, ListChecks } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WellbeingDirectory } from "@/components/WellbeingDirectory";
import { RetreatsDirectory } from "@/components/RetreatsDirectory";
import { useContact, contactSchema, type ContactFormData } from "@/hooks/use-contact";
import { cn } from "@/lib/utils";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const { mutate: submitContact, isPending, isSuccess, isError, reset } = useContact();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "General Enquiry",
      message: ""
    }
  });

  const onSubmit = (data: ContactFormData) => {
    submitContact(data, {
      onSuccess: () => {
        form.reset();
        setTimeout(reset, 5000); // Clear success message after 5s
      }
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.webp`}
            alt="Hampstead Wellbeing — holistic wellness centre, nurturing mind, body and soul" 
            className="w-full h-full object-cover opacity-80"
          />
          {/* Soft gradient wash for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] mb-4"
          >
            Hampstead Wellbeing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display italic text-2xl md:text-3xl text-primary mb-8"
          >
            Nurturing Mind, Body &amp; Soul
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-sans text-lg md:text-xl text-foreground/70 max-w-2xl mb-10 leading-relaxed"
          >
            Welcome to a safe place to support your wellbeing. We promote holistic self-care by encouraging a healthy mind-body connection and helping you build your own personal wellbeing habits.
          </motion.p>
          
          <motion.a
            href="#ethos"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="group px-8 py-4 rounded-full bg-primary text-primary-foreground font-sans text-base tracking-wide flex items-center gap-3 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 hover:bg-primary/90 transition-all duration-300"
          >
            Discover More
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </section>

      {/* ETHOS SECTION */}
      <section id="ethos" className="py-24 md:py-32 px-6 bg-background overflow-x-clip">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex-1 relative"
          >
            <div className="aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-card border border-border/50 shadow-2xl shadow-primary/5 flex items-center justify-center p-12">
              <img 
                src={`${import.meta.env.BASE_URL}images/ethos-art.webp`}
                alt="Holistic wellbeing philosophy — Hampstead Wellbeing"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary rounded-full -z-10 blur-3xl opacity-50"></div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex-1 flex flex-col justify-center"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">Our Philosophy</h2>
            <div className="w-16 h-1 bg-primary mb-8 rounded-full"></div>
            
            <p className="font-sans text-lg text-foreground/80 leading-relaxed mb-6">
              Our goal is to help you find the tools for happiness and self-empowerment. Hampstead Wellbeing helps individuals and organisations find holistic, tailored solutions to mitigate burnout and stress — creating a map, training and managing your culture of rest and renewal.
            </p>
            <p className="font-sans text-lg text-foreground/80 leading-relaxed mb-6">
              Our Wellness Facilitators assess your needs and find what works for you — from a weekly yoga class or a periodic wellness assessment at your home or office, to individual coaching, group coherence activities, and workshops for ongoing support through our network of wellness providers.
            </p>
            <p className="font-sans text-lg text-foreground/80 leading-relaxed mb-8">
              We are inclusive of all financial situations — please contact us to discuss your needs and we will find the right path for you.
            </p>
            
            <blockquote className="border-l-4 border-primary/50 pl-6 py-2 italic font-display text-2xl text-primary/90">
              "Creating a safe environment — at work and at home — is more important than ever."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="py-24 md:py-32 px-6 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">Empowering Learning</h2>
            <p className="font-sans text-lg text-foreground/70 leading-relaxed">
              We believe in nurturing academic potential alongside personal growth. Education is the foundation that builds confidence, opens doors, and shapes future wellbeing.
            </p>
          </motion.div>

          {/* ADULT EDUCATION SUB-SECTION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className=""
          >
            <div className="rounded-3xl border border-primary/20 bg-background overflow-hidden">
              {/* Banner header */}
              <div className="px-10 md:px-14 py-10 border-b border-border/50" style={{ background: "linear-gradient(135deg, #2C1F14 0%, #8B7355 100%)" }}>
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4" style={{ background: "rgba(200,169,81,0.2)", color: "#C8A951" }}>
                      Government Funded · Free for Eligible Adults
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl text-white mb-3">Adult Further Learning</h3>
                    <p className="font-sans text-white/70 text-base leading-relaxed max-w-2xl">
                      If you're 18 or over, you may be entitled to fully funded education and training — at no cost to you. The UK government provides free courses, qualifications, and skills programmes through a range of schemes. Below are the key routes worth knowing about.
                    </p>
                  </div>
                  <div className="flex-shrink-0 hidden md:flex flex-col items-end gap-2 text-right">
                    <p className="font-sans text-white/50 text-sm">Need guidance?</p>
                    <a href="tel:0800100900" className="flex items-center gap-2 font-sans text-white font-semibold hover:text-yellow-300 transition-colors">
                      <Phone size={16} />
                      0800 100 900
                    </a>
                    <p className="font-sans text-white/40 text-xs">National Careers Service — free</p>
                  </div>
                </div>
              </div>

              {/* Resource cards */}
              <div className="p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                  {/* Free Courses for Jobs */}
                  <a
                    href="https://www.gov.uk/guidance/free-courses-for-jobs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-7 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-400"
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-xl bg-secondary/60 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-400">
                        <FileText size={22} />
                      </div>
                      <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 mt-1" />
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold tracking-widest uppercase text-primary/70 mb-1">Gov.uk · Level 2 & 3</p>
                      <h4 className="font-display text-xl font-medium text-foreground mb-2">Free Courses for Jobs</h4>
                      <p className="font-sans text-sm text-foreground/65 leading-relaxed">
                        Over 400 fully funded qualifications in Health & Social Care, Digital, Construction, Business and more. Available to adults earning under £25,750/year or unemployed.
                      </p>
                    </div>
                    <span className="mt-auto font-sans text-xs font-semibold text-primary tracking-wide uppercase flex items-center gap-1">
                      Find a course <ArrowRight size={12} />
                    </span>
                  </a>

                  {/* Get Into Teaching */}
                  <a
                    href="https://getintoteaching.education.gov.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-7 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-400"
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-xl bg-secondary/60 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-400">
                        <GraduationCap size={22} />
                      </div>
                      <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 mt-1" />
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold tracking-widest uppercase text-primary/70 mb-1">Get Into Teaching · Free Training</p>
                      <h4 className="font-display text-xl font-medium text-foreground mb-2">Become a Teacher</h4>
                      <p className="font-sans text-sm text-foreground/65 leading-relaxed">
                        Explore free teacher training courses and bursaries. Investing in compassionate, skilled teachers is investing in the wellbeing of our future — the children who will shape tomorrow's world.
                      </p>
                    </div>
                    <span className="mt-auto font-sans text-xs font-semibold text-primary tracking-wide uppercase flex items-center gap-1">
                      Explore teacher training <ArrowRight size={12} />
                    </span>
                  </a>

                  {/* National Careers Service */}
                  <a
                    href="https://nationalcareers.service.gov.uk/find-a-course"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-7 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-400"
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-xl bg-secondary/60 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-400">
                        <Briefcase size={22} />
                      </div>
                      <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 mt-1" />
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold tracking-widest uppercase text-primary/70 mb-1">National Careers Service</p>
                      <h4 className="font-display text-xl font-medium text-foreground mb-2">Course Finder</h4>
                      <p className="font-sans text-sm text-foreground/65 leading-relaxed">
                        Search thousands of free and funded courses near you by subject or postcode. Includes free one-to-one careers guidance with a professional adviser.
                      </p>
                    </div>
                    <span className="mt-auto font-sans text-xs font-semibold text-primary tracking-wide uppercase flex items-center gap-1">
                      Search courses <ArrowRight size={12} />
                    </span>
                  </a>

                  {/* Free English & Maths */}
                  <a
                    href="https://www.gov.uk/browse/education/find-course"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-7 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-400"
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-xl bg-secondary/60 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-400">
                        <BookOpen size={22} />
                      </div>
                      <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 mt-1" />
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold tracking-widest uppercase text-primary/70 mb-1">Free · No income test</p>
                      <h4 className="font-display text-xl font-medium text-foreground mb-2">Free English & Maths</h4>
                      <p className="font-sans text-sm text-foreground/65 leading-relaxed">
                        Adults without a grade C/4 GCSE in English or Maths can study Functional Skills or GCSE resits completely free. Available at local colleges, community centres, and online.
                      </p>
                    </div>
                    <span className="mt-auto font-sans text-xs font-semibold text-primary tracking-wide uppercase flex items-center gap-1">
                      Find classes <ArrowRight size={12} />
                    </span>
                  </a>

                  {/* OpenLearn */}
                  <a
                    href="https://www.open.edu/openlearn/free-courses/full-catalogue"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-7 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-400"
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-xl bg-secondary/60 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-400">
                        <Globe size={22} />
                      </div>
                      <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 mt-1" />
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold tracking-widest uppercase text-primary/70 mb-1">Open University · Online</p>
                      <h4 className="font-display text-xl font-medium text-foreground mb-2">OpenLearn</h4>
                      <p className="font-sans text-sm text-foreground/65 leading-relaxed">
                        Hundreds of free online courses from The Open University — from Psychology and Creative Writing to Business, Science, and Wellbeing. No sign-up required for many courses.
                      </p>
                    </div>
                    <span className="mt-auto font-sans text-xs font-semibold text-primary tracking-wide uppercase flex items-center gap-1">
                      Browse free courses <ArrowRight size={12} />
                    </span>
                  </a>


                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* WELLBEING SECTION */}
      <section id="wellbeing" className="py-24 md:py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">Your Wellbeing Journey</h2>
            <p className="font-sans text-lg text-foreground/70 leading-relaxed">
              Wellbeing is not a destination but a daily practice. We have developed the best resources to help you embrace movement, stillness, community, and transformative self-care.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Card: Wellness Listings */}
            <motion.div
              variants={fadeInUp}
              role="button"
              tabIndex={0}
              onClick={() => document.getElementById("wellbeing-directory")?.scrollIntoView({ behavior: "smooth" })}
              onKeyDown={(e) => e.key === "Enter" && document.getElementById("wellbeing-directory")?.scrollIntoView({ behavior: "smooth" })}
              className="cursor-pointer group bg-card rounded-3xl p-8 border border-border/50 hover:border-primary/40 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col h-full"
            >
              <ListChecks size={32} className="text-primary mb-6 group-hover:rotate-12 transition-transform duration-500" />
              <h3 className="font-display text-2xl font-medium text-foreground mb-3">London Wellness Directory</h3>
              <p className="font-sans text-sm text-foreground/70 leading-relaxed mb-6 flex-grow">
                Our own curated guide to yoga studios, teachers, Pilates, meditation centres and fitness providers across London.
              </p>
              <span className="text-primary text-sm font-semibold tracking-wide flex items-center gap-1 uppercase">
                Browse <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.div>

            {/* Card: Corporate Wellness */}
            <motion.a 
              variants={fadeInUp}
              href="/corporate-wellness/"
              className="group bg-card rounded-3xl p-8 border border-border/50 hover:border-primary/40 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col h-full"
            >
              <Briefcase size={32} className="text-primary mb-6 group-hover:rotate-12 transition-transform duration-500" />
              <h3 className="font-display text-2xl font-medium text-foreground mb-3">Corporate Wellness</h3>
              <p className="font-sans text-sm text-foreground/70 leading-relaxed mb-6 flex-grow">
                Tailored workplace wellbeing programmes — breathwork, stress reduction, mindfulness and resilience sessions for teams and organisations.
              </p>
              <span className="text-primary text-sm font-semibold tracking-wide flex items-center gap-1 uppercase">
                Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            {/* Card: Mindfulness */}
            <motion.a 
              variants={fadeInUp}
              href="/mindfulness/"
              className="group bg-card rounded-3xl p-8 border border-border/50 hover:border-primary/40 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col h-full"
            >
              <Wind size={32} className="text-primary mb-6 group-hover:rotate-12 transition-transform duration-500" />
              <h3 className="font-display text-2xl font-medium text-foreground mb-3">Mindfulness</h3>
              <p className="font-sans text-sm text-foreground/70 leading-relaxed mb-6 flex-grow">
                Explore mindfulness practices including breathwork, meditation and nervous system regulation for everyday calm and clarity.
              </p>
              <span className="text-primary text-sm font-semibold tracking-wide flex items-center gap-1 uppercase">
                Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          </motion.div>

          <WellbeingDirectory />
        </div>
      </section>

      {/* RETREAT & YOGA SECTION */}
      <section className="py-24 md:py-32 px-6 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">Our Offerings</h2>
            <p className="font-sans text-lg text-foreground/70 leading-relaxed">
              From immersive retreats in the French countryside to weekly yoga in your community — we bring the transformative power of wellbeing practice to every part of your life.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Self Appreciation Journeys */}
            <motion.div
              variants={fadeInUp}
              className="bg-background rounded-3xl p-10 md:p-12 border border-border/50 shadow-lg shadow-black/5 flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center text-primary mb-8">
                <Sun size={32} />
              </div>
              <h3 className="font-display text-3xl font-medium text-foreground mb-4">Self Appreciation Journeys</h3>
              <p className="font-sans text-foreground/70 leading-relaxed mb-4">
                Hampstead Wellbeing have run annual ladies-only residential yoga retreats for self-love — seven days of total peace and relaxation in the lush green countryside. We found this was a success!
              </p>

              {/* Trustpilot link */}
              <a
                href="https://uk.trustpilot.com/review/hw-retreats.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-xl bg-secondary/40 border border-border/40 hover:bg-secondary/70 transition-colors w-fit"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#00B67A"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
                <span className="font-sans text-xs font-semibold text-foreground/70">Read our reviews on Trustpilot</span>
              </a>

              <p className="font-sans text-foreground/70 leading-relaxed mb-4">
                We believe in empowering women to be the best version of themselves, and that sometimes a rest and reconnection with the inner self is needed. The retreat focuses on emotional, mental and spiritual wellness, and includes yoga, self-love workshops, meditation, woodland walks, and optional use of swimming pool and spa facilities.
              </p>
              <p className="font-sans text-foreground/70 leading-relaxed mb-6">
                We are also planning a men-only retreat — for healing and restoration, reconnecting with nature through activities that challenge and change you from the inside out.
              </p>
              <a
                href="#contact"
                className="mt-auto inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 w-fit"
                style={{ background: "#2C1F14", color: "#FAF8F4" }}
              >
                Join the waiting list <ArrowRight size={15} />
              </a>
            </motion.div>

            {/* Facilitation Discovery Call */}
            <motion.div
              variants={fadeInUp}
              className="bg-background rounded-3xl p-10 md:p-12 border border-border/50 shadow-lg shadow-black/5 flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center text-primary mb-8">
                <Phone size={32} />
              </div>
              <h3 className="font-display text-3xl font-medium text-foreground mb-4">Facilitation Discovery Call</h3>
              <p className="font-sans text-foreground/70 leading-relaxed mb-4">
                Our Wellness Facilitators take the time to understand your needs and connect you with the right support — from yoga classes and wellness assessments to coaching, workshops, and group activities through our trusted wellness network.
              </p>
              <p className="font-sans text-foreground/70 leading-relaxed mb-4">
                We work with individuals and organisations to create personalised wellness plans, helping you stay on track and achieve your goals with guidance from experienced professionals.
              </p>
              <p className="font-sans text-foreground/70 leading-relaxed mb-6">
                A Wellness Facilitation Discovery Call is a complimentary 15–30 minute conversation to explore your wellness goals, discuss any challenges, and see if a coach, practitioner, or programme is the right fit for you.
              </p>
              <a
                href="#contact"
                className="mt-auto inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 w-fit"
                style={{ background: "#2C1F14", color: "#FAF8F4" }}
              >
                Book a free discovery call <ArrowRight size={15} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* RetreatsDirectory — kept for future use, hidden for now */}
      {/* <RetreatsDirectory /> */}

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 md:py-32 px-6 bg-background border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">Get in Touch</h2>
            <p className="font-sans text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto mb-4">
              We'd love to hear from you. Whether you have a question about our retreat, yoga classes, or any of our services — we are here and happy to help.
            </p>
            <p className="font-sans text-foreground/60 text-base">
              Use the form below and we will get back to you shortly.
            </p>

            {/* Social links — shown below email on mobile, hidden on desktop (flanking form instead) */}
            <div className="flex items-center justify-center gap-5 mt-6 lg:hidden">
              <a href="https://www.facebook.com/hampsteadwellbeing/" target="_blank" rel="noopener noreferrer"
                className="text-foreground/30 hover:text-foreground/70 transition-colors duration-300" aria-label="Facebook">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/hampsteadwellbeing/" target="_blank" rel="noopener noreferrer"
                className="text-foreground/30 hover:text-foreground/70 transition-colors duration-300" aria-label="Instagram">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Form + flanking social icons */}
          <div className="relative">

            {/* Facebook — left of form, desktop only */}
            <a href="https://www.facebook.com/hampsteadwellbeing/" target="_blank" rel="noopener noreferrer"
              aria-label="Hampstead Wellbeing on Facebook"
              className="hidden lg:flex absolute -left-16 xl:-left-20 top-1/2 -translate-y-1/2 flex-col items-center gap-2 group">
              <span className="text-foreground/20 group-hover:text-foreground/50 transition-colors duration-300">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </span>
              <span className="font-sans text-[9px] tracking-widest uppercase text-foreground/20 group-hover:text-foreground/50 transition-colors duration-300 [writing-mode:vertical-rl] rotate-180">Facebook</span>
            </a>

            {/* Instagram — right of form, desktop only */}
            <a href="https://www.instagram.com/hampsteadwellbeing/" target="_blank" rel="noopener noreferrer"
              aria-label="Hampstead Wellbeing on Instagram"
              className="hidden lg:flex absolute -right-16 xl:-right-20 top-1/2 -translate-y-1/2 flex-col items-center gap-2 group">
              <span className="text-foreground/20 group-hover:text-foreground/50 transition-colors duration-300">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </span>
              <span className="font-sans text-[9px] tracking-widest uppercase text-foreground/20 group-hover:text-foreground/50 transition-colors duration-300 [writing-mode:vertical-rl]">Instagram</span>
            </a>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-background rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/5 border border-border/50"
          >
            {isSuccess ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={40} className="text-primary" />
                </div>
                <h3 className="font-display text-3xl text-foreground">Message Sent</h3>
                <p className="font-sans text-foreground/70">Thank you for reaching out. We will get back to you shortly.</p>
                <button 
                  onClick={reset}
                  className="mt-6 text-primary hover:underline font-medium font-sans"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {isError && (
                  <div className="p-4 rounded-xl bg-red-50 text-red-600 font-sans text-sm border border-red-100">
                    Failed to send message. Please ensure the API is configured correctly.
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground/80 ml-1">Full Name</label>
                    <input
                      id="name"
                      {...form.register("name")}
                      className={cn(
                        "w-full px-5 py-4 rounded-2xl bg-card border-2 transition-all duration-300 font-sans outline-none focus:bg-background placeholder:text-muted-foreground",
                        form.formState.errors.name 
                          ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10" 
                          : "border-border focus:border-primary focus:ring-4 focus:ring-primary/10"
                      )}
                      placeholder="Jane Doe"
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-500 text-xs ml-1 mt-1">{form.formState.errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground/80 ml-1">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      className={cn(
                        "w-full px-5 py-4 rounded-2xl bg-card border-2 transition-all duration-300 font-sans outline-none focus:bg-background placeholder:text-muted-foreground",
                        form.formState.errors.email 
                          ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10" 
                          : "border-border focus:border-primary focus:ring-4 focus:ring-primary/10"
                      )}
                      placeholder="jane@example.com"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-xs ml-1 mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground/80 ml-1">Subject</label>
                  <div className="relative">
                    <select
                      id="subject"
                      {...form.register("subject")}
                      className={cn(
                        "w-full px-5 py-4 rounded-2xl bg-card border-2 transition-all duration-300 font-sans outline-none focus:bg-background appearance-none cursor-pointer",
                        form.formState.errors.subject 
                          ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10" 
                          : "border-border focus:border-primary focus:ring-4 focus:ring-primary/10"
                      )}
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Dordogne Retreat">Dordogne Retreat</option>
                      <option value="Yoga Classes">Yoga Classes</option>
                      <option value="Education">Education</option>
                      <option value="Wellbeing Services">Wellbeing Services</option>
                      <option value="Partnerships">Partnerships</option>
                      <option value="Other">Other</option>
                    </select>
                    {/* Custom select arrow */}
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-foreground/50">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                  {form.formState.errors.subject && (
                    <p className="text-red-500 text-xs ml-1 mt-1">{form.formState.errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80 ml-1">Message</label>
                  <textarea
                    id="message"
                    {...form.register("message")}
                    rows={5}
                    className={cn(
                      "w-full px-5 py-4 rounded-2xl bg-card border-2 transition-all duration-300 font-sans outline-none focus:bg-background resize-y placeholder:text-muted-foreground",
                      form.formState.errors.message 
                        ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10" 
                        : "border-border focus:border-primary focus:ring-4 focus:ring-primary/10"
                    )}
                    placeholder="How can we help you today?"
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-500 text-xs ml-1 mt-1">{form.formState.errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-5 rounded-2xl bg-primary text-primary-foreground font-sans text-base font-semibold tracking-wide flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none transition-all duration-300"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </motion.div>
          </div>{/* end relative wrapper */}
        </div>
      </section>

      <Footer />
    </div>
  );
}
