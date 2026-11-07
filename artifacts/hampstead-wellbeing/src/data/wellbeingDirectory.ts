export interface WellbeingProvider {
  name: string;
  category: string;
  area: string;
  pricing: string;
  instagram?: string;
  website?: string;
  notes: string;
}

export const wellbeingProviders: WellbeingProvider[] = [
  // ── YOGA STUDIOS & CLASSES ────────────────────────────────
  { name: "Triyoga", category: "Yoga Studios", area: "Camden / Soho / Chelsea", pricing: "£££", instagram: "@triyogalondon", website: "https://triyoga.co.uk", notes: "Premium multi-location studio chain" },
  { name: "MoreYoga", category: "Yoga Studios", area: "Multiple London locations", pricing: "£", instagram: "@moreyoga", website: "https://moreyoga.co.uk", notes: "Affordable studio chain — great value memberships" },
  { name: "The Life Centre", category: "Yoga Studios", area: "Notting Hill", pricing: "£££", instagram: "@thelifecentre", website: "https://thelifecentre.com", notes: "Premium wellness and yoga studio" },
  { name: "Indaba Yoga", category: "Yoga Studios", area: "Marylebone", pricing: "££", instagram: "@indabayoga", website: "https://indabayoga.com", notes: "Boutique studio with teacher training programme" },
  { name: "Yogarise", category: "Yoga Studios", area: "Peckham", pricing: "££", instagram: "@yogarisepeckham", website: "https://yogarise.co.uk", notes: "Community-focused boutique studio" },
  { name: "PYC Studios", category: "Yoga Studios", area: "Fulham", pricing: "£££", instagram: "@pycstudios", website: "https://pyc-studios.com", notes: "Yoga & Pilates boutique studio" },
  { name: "House of Hot Yoga", category: "Yoga Studios", area: "Angel", pricing: "££", instagram: "@houseofhotyoga", website: "https://houseofhotyoga.co.uk", notes: "Hot yoga specialist" },
  { name: "Paper Dress Yoga", category: "Yoga Studios", area: "Hackney", pricing: "££", instagram: "@paperdressyoga", website: "https://paperdressyoga.co.uk", notes: "Independent creative community studio" },
  { name: "Yoga Home", category: "Yoga Studios", area: "Wandsworth", pricing: "££", instagram: "@yogahome_london", website: "https://yogahome.co.uk", notes: "Teacher training and classes" },
  { name: "State Yoga", category: "Yoga Studios", area: "Highbury", pricing: "£££", instagram: "@stateyoga", website: "https://stateyoga.co.uk", notes: "Luxury boutique positioning" },
  { name: "Mudra Yoga London", category: "Yoga Studios", area: "London", pricing: "££", instagram: "@mudrayogalondon", website: "https://mudrayoga.co.uk", notes: "Holistic wellness and yoga" },
  { name: "Stillpoint Yoga", category: "Yoga Studios", area: "London", pricing: "££", instagram: "@stillpointyogalondon", website: "https://stillpointyogalondon.com", notes: "Community yoga studio" },
  { name: "Down To Earth Yoga", category: "Yoga Studios", area: "Tufnell Park", pricing: "££", instagram: "@downtoearthyoga", notes: "Yoga and massage — independent studio" },
  { name: "Mission", category: "Yoga Studios", area: "London", pricing: "£££", instagram: "@mission", website: "https://mission.co.uk", notes: "Strength and yoga combined" },
  { name: "Breathe Yoga London", category: "Yoga Studios", area: "London-wide", pricing: "£££", instagram: "@breatheyogalondon", website: "https://breatheyoga.co.uk", notes: "Corporate and private yoga" },

  // ── YOGA TEACHERS & RETREATS ──────────────────────────────
  { name: "Path of Yoga", category: "Yoga Teachers", area: "Central London", pricing: "£££", instagram: "@pathofyoga", website: "https://pathofyoga.co.uk", notes: "Private yoga tuition" },
  { name: "Yogi2Me", category: "Yoga Teachers", area: "London-wide", pricing: "££", instagram: "@yogi2me", website: "https://yogi2me.com", notes: "Teacher marketplace — at-home yoga sessions" },
  { name: "YOAS Yoga Retreats", category: "Yoga Teachers", area: "Herne Hill", pricing: "£££", instagram: "@yoasyogaretreats", website: "https://yoasyogaretreats.com", notes: "International yoga retreat operator" },
  { name: "Our Retreat", category: "Yoga Teachers", area: "City of London", pricing: "£££", instagram: "@ourretreat", website: "https://ourretreat.co.uk", notes: "Luxury wellness retreats" },
  { name: "Yoga Rocks", category: "Yoga Teachers", area: "London", pricing: "£££", instagram: "@yogarocksretreats", website: "https://yogarocks.co.uk", notes: "Yoga retreats across Europe" },

  // ── PILATES ───────────────────────────────────────────────
  { name: "Ten Health & Fitness", category: "Pilates", area: "Multiple London locations", pricing: "£££", instagram: "@tenhealth", website: "https://ten.co.uk", notes: "Premium reformer Pilates and physiotherapy" },
  { name: "Heartcore", category: "Pilates", area: "Notting Hill / Fitzrovia", pricing: "£££", instagram: "@heartcore", website: "https://heartcore.co.uk", notes: "Reformer Pilates boutique studio" },
  { name: "Frame", category: "Pilates", area: "Multiple London locations", pricing: "££", instagram: "@moveyourframe", website: "https://moveyourframe.com", notes: "Pilates, yoga and dance classes" },
  { name: "Equilibre Pilates", category: "Pilates", area: "Kensington", pricing: "£££", instagram: "@equilibrepilates", website: "https://equilibrepilates.co.uk", notes: "Boutique Pilates studio" },
  { name: "Pilates on the Go", category: "Pilates", area: "London-wide", pricing: "££", website: "https://pilatesonthego.co.uk", notes: "Mobile Pilates instruction at home or work" },
  { name: "Power Pilates London", category: "Pilates", area: "Soho / Covent Garden", pricing: "££", instagram: "@powerpilates_uk", website: "https://powerpilates.co.uk", notes: "Classical and contemporary Pilates" },
  { name: "Reformer Pilates London", category: "Pilates", area: "Fulham / Chelsea", pricing: "£££", instagram: "@reformerpilates_ldn", notes: "Specialist reformer sessions — small group and private" },

  // ── MEDITATION & MINDFULNESS ──────────────────────────────
  { name: "London Buddhist Centre", category: "Meditation", area: "Bethnal Green", pricing: "£", instagram: "@londonbuddhistcentre", website: "https://lbc.org.uk", notes: "Drop-in meditation classes and courses — open to all" },
  { name: "Kadampa Meditation Centre", category: "Meditation", area: "Clapham", pricing: "£", instagram: "@kadampalondon", website: "https://meditateInlondon.org", notes: "Buddhist-inspired meditation — beginners welcome" },
  { name: "London Meditation Centre", category: "Meditation", area: "Marylebone", pricing: "££", instagram: "@londonmeditationcentre", website: "https://londonmeditationcentre.com", notes: "Vedic meditation and mindfulness courses" },
  { name: "The School of Life", category: "Meditation", area: "Multiple locations", pricing: "££", instagram: "@theschooloflife", website: "https://theschooloflife.com", notes: "Emotional intelligence, mindfulness and wellbeing" },
  { name: "Mindfulness London", category: "Meditation", area: "London-wide", pricing: "££", website: "https://mindfulnesslondon.co.uk", notes: "MBSR and MBCT courses — clinically-backed mindfulness" },
  { name: "Headspace", category: "Meditation", area: "App — anywhere", pricing: "££", instagram: "@headspace", website: "https://headspace.com", notes: "Leading meditation app — guided sessions for sleep, focus and calm" },

  // ── FITNESS & PERSONAL TRAINING ───────────────────────────
  { name: "Barry's Bootcamp", category: "Fitness", area: "Multiple London locations", pricing: "£££", instagram: "@barrysuk", website: "https://www.barrys.com/uk", notes: "High-intensity interval training — iconic red room" },
  { name: "F45 Training", category: "Fitness", area: "Multiple London locations", pricing: "££", instagram: "@f45_training", website: "https://f45training.co.uk", notes: "Functional group training — 45-minute team sessions" },
  { name: "1Rebel", category: "Fitness", area: "City / Canary Wharf / Victoria", pricing: "£££", instagram: "@1rebel", website: "https://1rebel.co.uk", notes: "Boutique group fitness — Reshape and Ride classes" },
  { name: "Gymbox", category: "Fitness", area: "Multiple London locations", pricing: "££", instagram: "@gymbox", website: "https://gymbox.com", notes: "Unique classes including boxing, dance and martial arts" },
  { name: "Third Space", category: "Fitness", area: "Multiple London locations", pricing: "£££", instagram: "@thirdspacelondon", website: "https://thirdspace.london", notes: "Premium health clubs with PT, spa and nutrition" },
  { name: "FindFitnessInstructors.com", category: "Fitness", area: "UK-wide", pricing: "££", website: "https://www.findfitnessinstructors.com", notes: "Directory of independent personal trainers and fitness coaches" },
];

export interface DirectoryCategory {
  /** Must match the `category` field of its providers. */
  name: string;
  /** Web address of the category page: /directory/<slug> */
  slug: string;
  /** Page heading and title. */
  heading: string;
  /** One or two sentences shown at the top of the page and used as its search description. */
  intro: string;
}

export const directoryCategories: DirectoryCategory[] = [
  {
    name: "Yoga Studios",
    slug: "yoga-studios",
    heading: "Yoga Studios",
    intro: "Yoga studios, from affordable community studios to premium boutique spaces, with hot yoga, Vinyasa, Hatha and teacher training.",
  },
  {
    name: "Yoga Teachers",
    slug: "yoga-teachers",
    heading: "Yoga Teachers & Retreat Organisers",
    intro: "Private yoga teachers, at-home sessions and organisers of yoga retreats in the UK and abroad.",
  },
  {
    name: "Pilates",
    slug: "pilates",
    heading: "Pilates Studios & Instructors",
    intro: "Reformer and mat Pilates, from boutique studios to instructors who come to your home or workplace.",
  },
  {
    name: "Meditation",
    slug: "meditation",
    heading: "Meditation & Mindfulness",
    intro: "Meditation centres, mindfulness courses and meditation apps, including drop-in classes, MBSR and MBCT courses and Vedic meditation.",
  },
  {
    name: "Fitness",
    slug: "fitness",
    heading: "Fitness Studios & Personal Trainers",
    intro: "Boutique fitness studios, group training, health clubs and personal trainers.",
  },
];

export const categories = ["All", ...directoryCategories.map((c) => c.name)];

export function providersIn(category: string): WellbeingProvider[] {
  return wellbeingProviders.filter((p) => p.category === category);
}
