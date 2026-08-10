// Single source of truth for the entire blog module (/blog, /blog/[slug],
// and the homepage's Health Tips preview). Every page/component below reads
// from the exported functions rather than importing `blogPosts` directly, so
// the day this moves to Supabase, only the functions in this file need to
// become async (`await`-ed from the already-async Server Components that
// call them) — no UI component needs to change.
//
// Author bylines use a shared team name plus a role, not fabricated
// individual identities — the same restraint `src/data/team.ts` uses for
// staff profiles until real, verified names are available.

export type BlogContentBlock =
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "paragraph"; text: string }
  | { type: "list"; style?: "bullet" | "ordered"; items: string[] }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | {
      type: "callout";
      variant?: "info" | "tip" | "warning";
      title?: string;
      text: string;
    };

export interface BlogAuthor {
  name: string;
  role: string;
}

export interface BlogSeo {
  title?: string;
  description?: string;
  keywords?: string[];
}

export const blogCategories = [
  "Elder Care",
  "Home Nursing",
  "ICU Care",
  "Physiotherapy",
  "Wellness",
  "Medical Tips",
  "Recovery",
  "Caregiver Guide",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: BlogContentBlock[];
  author: BlogAuthor;
  publishDate: string;
  readingTime: string;
  category: BlogCategory;
  /** Describes the intended photo for this article — used as future alt text once real imagery replaces the placeholder. */
  featuredImagePlaceholder: string;
  /** Real photo path in /public, e.g. "/images/blogs/slug.png". Omit to keep the "Photo coming soon" placeholder box. */
  featuredImage?: string;
  /** Exactly one post should be `true` at a time — it becomes the large hero card on /blog. */
  featured: boolean;
  tags: string[];
  seo?: BlogSeo;
}

const nurse: BlogAuthor = { name: "PinkCity Healthcare Team", role: "Senior Registered Nurse" };
const elderCarePro: BlogAuthor = { name: "PinkCity Healthcare Team", role: "Elder Care Professional" };
const icuSpecialist: BlogAuthor = { name: "PinkCity Healthcare Team", role: "ICU Care Specialist" };
const physio: BlogAuthor = { name: "PinkCity Healthcare Team", role: "Physiotherapy Specialist" };
const coordinator: BlogAuthor = { name: "PinkCity Healthcare Team", role: "Home Healthcare Coordinator" };

export const blogPosts: BlogPost[] = [
  {
    id: "elderly-parent-home-care-signs",
    slug: "signs-elderly-parent-needs-home-care",
    title: "10 Signs Your Elderly Parent May Need Professional Home Care",
    excerpt:
      "From missed medications to unexplained falls, learn the early signs that indicate it may be time to bring in professional support at home.",
    author: elderCarePro,
    publishDate: "2026-07-28",
    readingTime: "5 min",
    category: "Elder Care",
    featuredImagePlaceholder: "A caregiver assisting an elderly parent at home",
    featuredImage: "/images/blogs/10-signs.png",
    featured: false,
    tags: ["elder care", "aging parents", "home care signs", "senior health"],
    content: [
      {
        type: "paragraph",
        text: "Most families want their elderly parents to stay independent for as long as possible — and that's the right goal. But independence and safety aren't always the same thing, and the shift from \"managing fine\" to \"needs support\" is often gradual enough that it's easy to miss from the inside.",
      },
      { type: "heading", text: "Signs to Watch For" },
      {
        type: "list",
        style: "bullet",
        items: [
          "Missed or duplicated medication doses",
          "Unexplained bruises, or a fall they downplay",
          "Noticeable weight loss or an emptier-than-usual fridge",
          "Slipping personal hygiene or unwashed laundry piling up",
          "Unopened mail, unpaid bills, or missed appointments",
          "Withdrawing from calls, visits, or activities they used to enjoy",
          "Memory lapses that go beyond occasionally forgetting a name",
          "New difficulty with stairs, balance, or getting up from a chair",
          "A home that's noticeably less tidy or maintained than before",
          "A family caregiver who sounds exhausted every time you talk to them",
        ],
      },
      { type: "heading", text: "What Professional Home Care Can Offer" },
      {
        type: "paragraph",
        text: "None of these signs on their own mean it's time for a major change. But two or three together are usually worth a real conversation. Professional home care can be as light-touch as a few hours of daily check-ins, or as involved as full-time nursing support — the point is that it's flexible, not all-or-nothing.",
      },
      {
        type: "quote",
        text: "Families often wait until there's a crisis before calling us. It's almost always easier — for the patient and for the family — to start with lighter support before that point.",
        attribution: "PinkCity Healthcare Care Coordinator",
      },
      {
        type: "callout",
        variant: "tip",
        title: "Start with a conversation, not an ultimatum",
        text: "Frame home care as extra support, not a loss of independence. Involving your parent in choosing the caregiver and the schedule makes the transition far easier.",
      },
      {
        type: "paragraph",
        text: "If a few of these signs feel familiar, it's worth exploring what elder care support could look like for your family — even if you're not ready to commit to anything yet.",
      },
    ],
    seo: {
      keywords: ["signs elderly parent needs care", "elder care Jaipur", "home care for seniors"],
    },
  },
  {
    id: "home-nursing-recovery-after-surgery",
    slug: "home-nursing-speeds-up-recovery-after-surgery",
    title: "How Home Nursing Helps Speed Up Recovery After Surgery",
    excerpt:
      "Post-surgical recovery goes smoother with the right support. Here's how skilled home nursing reduces complications and shortens recovery time.",
    author: nurse,
    publishDate: "2026-07-15",
    readingTime: "6 min",
    category: "Home Nursing",
    featuredImagePlaceholder: "A home nurse checking on a recovering patient",
        featuredImage: "/images/blogs/nursing-speed-recovery.png",
    featured: false,
    tags: ["home nursing", "post-surgery recovery", "wound care", "recovery at home"],
    content: [
      {
        type: "paragraph",
        text: "Recovering from surgery in a hospital bed and recovering at home are very different experiences — and for many patients, home turns out to be the better environment, provided the right nursing support comes with it.",
      },
      { type: "heading", text: "Why Recovery at Home Works Better for Many Patients" },
      {
        type: "list",
        style: "ordered",
        items: [
          "Lower exposure to hospital-acquired infections",
          "More restful, uninterrupted sleep in a familiar bed",
          "Family involved in day-to-day care and decisions",
          "A familiar environment that reduces stress and anxiety, which itself supports healing",
        ],
      },
      { type: "heading", text: "What a Home Nursing Recovery Plan Typically Includes" },
      {
        type: "list",
        style: "bullet",
        items: [
          "Regular vital sign monitoring",
          "Wound dressing changes and infection checks",
          "Medication administration, on schedule",
          "Guided, safe mobility support to avoid re-injury",
          "Direct coordination with the operating surgeon's instructions",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "When to call your surgeon immediately",
        text: "Fever, spreading redness around the incision, unusual drainage, or sudden severe pain are signs to contact your surgeon right away — a home nurse will flag these, but the family should know them too.",
      },
      { type: "heading", text: "How Long Does Home Nursing Support Usually Last?" },
      {
        type: "paragraph",
        text: "This varies a lot by procedure and by patient. As a general guide only — every recovery plan should come from your surgeon, not a table on the internet:",
      },
      {
        type: "table",
        headers: ["Surgery Type", "Typical Home Nursing Duration"],
        rows: [
          ["Orthopedic (knee / hip)", "2–4 weeks"],
          ["Abdominal surgery", "1–3 weeks"],
          ["Cardiac surgery", "3–6 weeks"],
          ["Minor procedures", "3–7 days"],
        ],
      },
      {
        type: "paragraph",
        text: "If your family is planning a recovery at home after an upcoming surgery, it's worth arranging nursing support before discharge day rather than scrambling afterward.",
      },
    ],
    seo: {
      keywords: ["home nursing after surgery", "post surgery care Jaipur", "recovery at home"],
    },
  },
  {
    id: "choosing-the-right-caregiver",
    slug: "how-to-choose-the-right-caregiver",
    title: "How to Choose the Right Caregiver for Your Loved One",
    excerpt:
      "Finding the right caregiver is about more than credentials. Here's what to ask and look for before welcoming someone into your home.",
    author: elderCarePro,
    publishDate: "2026-06-30",
    readingTime: "4 min",
    category: "Caregiver Guide",
    featuredImagePlaceholder: "A family meeting with a caregiver in their living room",
    featuredImage: "/images/blogs/choose.png",
    featured: false,
    tags: ["caregiver guide", "choosing a caregiver", "home care tips", "family caregiving"],
    content: [
      {
        type: "paragraph",
        text: "Bringing a caregiver into your home is as much a personal decision as a practical one. Credentials matter, but so does fit — the right caregiver for one family isn't automatically right for another.",
      },
      { type: "heading", text: "Questions to Ask Before You Decide" },
      {
        type: "list",
        style: "bullet",
        items: [
          "Has the caregiver been background-verified, and can the agency show you how?",
          "What specific training or certifications do they hold?",
          "Do they have experience with your loved one's specific condition?",
          "How flexible is scheduling if care needs change?",
          "How do they communicate updates — daily notes, calls, something else?",
          "What happens if the assigned caregiver is unavailable one day?",
        ],
      },
      {
        type: "quote",
        text: "We didn't just want someone qualified on paper. We wanted someone who'd actually sit and talk with my mother, not just get through a task list.",
        attribution: "A PinkCity Healthcare family",
      },
      { type: "heading", text: "Red Flags to Watch For" },
      {
        type: "list",
        style: "bullet",
        items: [
          "Reluctance to share verification or background-check details",
          "Vague, non-specific answers about training or experience",
          "No clear process for what happens in an emergency",
          "Inconsistent or hard-to-reach communication before care even starts",
        ],
      },
      {
        type: "callout",
        variant: "info",
        text: "A checklist helps you compare options objectively, but trust your instincts too — you and your family will be interacting with this person every day.",
      },
      {
        type: "paragraph",
        text: "Take your time with this decision where you can. A short conversation with a care coordinator before you commit to anything is usually enough to tell whether an agency takes this seriously.",
      },
    ],
    seo: {
      keywords: ["how to choose a caregiver", "hiring a caregiver in Jaipur", "caregiver checklist"],
    },
  },
  {
    id: "icu-care-at-home-what-families-should-know",
    slug: "icu-care-at-home-what-families-should-know",
    title: "ICU Care at Home: What Families Should Know Before Getting Started",
    excerpt:
      "Moving ICU-level care home is a major decision. Here's what it actually involves, how to know if your home is ready, and what to ask first.",
    author: icuSpecialist,
    publishDate: "2026-07-02",
    readingTime: "7 min",
    category: "ICU Care",
    featuredImagePlaceholder: "An ICU nurse monitoring equipment beside a patient's bed at home",
            featuredImage: "/images/blogs/icu-care.png",
    featured: false,
    tags: ["icu care at home", "critical care", "home icu setup", "ventilator support"],
    content: [
      {
        type: "paragraph",
        text: "Choosing to continue ICU-level care at home instead of in a hospital is one of the bigger decisions a family can make — and it should always be made together with the patient's treating doctor, not in place of that conversation.",
      },
      { type: "heading", text: "What Home ICU Care Typically Involves" },
      {
        type: "list",
        style: "bullet",
        items: [
          "Continuous monitoring of vitals — heart rate, oxygen levels, blood pressure",
          "Ventilator or oxygen support, where the patient's condition requires it",
          "A certified ICU-trained nurse present according to the agreed staffing pattern",
          "Direct coordination with the hospital's discharge and treating team",
          "A clear emergency response and re-admission plan",
        ],
      },
      { type: "heading", text: "Is Your Home Ready?" },
      {
        type: "list",
        style: "ordered",
        items: [
          "Enough space for monitoring and support equipment near the bed",
          "Reliable power, ideally with backup, for anything electrically dependent",
          "A hygienic, easily cleanable setup around the care area",
          "Clear, accessible entry and exit in case emergency transport is needed",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        text: "Home ICU care is not the right fit for every case. This should always be assessed and approved by your treating doctor before anything is arranged.",
      },
      { type: "heading", text: "What to Ask Before Starting Home ICU Care" },
      {
        type: "list",
        style: "bullet",
        items: [
          "Exactly what equipment is included, and who maintains it",
          "Whether staffing is round-the-clock or in shifts, and how handovers work",
          "What the emergency escalation plan looks like, step by step",
          "How costs are structured, so there are no surprises later",
        ],
      },
      {
        type: "paragraph",
        text: "Done well, home ICU care can mean a critically ill patient recovers surrounded by family instead of hospital walls. Done without proper planning, it can put the patient at real risk — the planning stage is not something to rush.",
      },
    ],
    seo: {
      keywords: ["ICU care at home Jaipur", "home ICU setup", "critical care at home"],
    },
  },
  {
    id: "physiotherapy-exercises-you-can-do-at-home",
    slug: "physiotherapy-exercises-you-can-do-at-home",
    title: "5 Physiotherapy Exercises You Can Safely Discuss With Your Therapist",
    excerpt:
      "Gentle mobility exercises can support recovery between sessions — but they should always be personalized by a physiotherapist first. Here's a starting point.",
    author: physio,
    publishDate: "2026-06-10",
    readingTime: "5 min",
    category: "Physiotherapy",
    featuredImagePlaceholder: "A physiotherapist guiding a patient through a gentle home exercise",
    featuredImage: "/images/blogs/Physiotherapy.png",
    featured: false,
    tags: ["physiotherapy at home", "home exercises", "mobility", "recovery exercises"],
    content: [
      {
        type: "paragraph",
        text: "Between physiotherapy sessions, patients often ask what they can safely do on their own. The honest answer is: it depends entirely on the individual's condition — but here are five gentle exercise types worth discussing with your physiotherapist.",
      },
      {
        type: "callout",
        variant: "warning",
        text: "These are general starting points, not a personalized routine. Always confirm what's appropriate for your specific condition with a licensed physiotherapist before starting.",
      },
      { type: "heading", text: "Exercises to Discuss With Your Physiotherapist" },
      {
        type: "list",
        style: "ordered",
        items: [
          "Ankle pumps — slow, controlled flexing of the foot to support circulation, especially useful after periods of reduced mobility",
          "Seated marching — lifting the knees gently while seated, to maintain leg strength without added fall risk",
          "Shoulder rolls — slow rotations to ease stiffness after long periods of inactivity",
          "Wall push-ups — a lower-impact way to maintain upper body strength than floor push-ups",
          "Gentle seated stretches — for the neck, back, and legs, held briefly and never forced",
        ],
      },
      { type: "heading", text: "Signs You Should Stop and Check In With Your Therapist" },
      {
        type: "list",
        style: "bullet",
        items: [
          "Sharp or worsening pain during or after the exercise",
          "Dizziness or lightheadedness",
          "New or increased swelling",
          "Unusual fatigue that doesn't ease with rest",
        ],
      },
      {
        type: "paragraph",
        text: "In-home physiotherapy adds a layer of supervision that's hard to replicate alone — a therapist adjusts the plan in real time based on how the patient actually responds, not just how they're supposed to.",
      },
    ],
    seo: {
      keywords: ["physiotherapy at home exercises", "home physiotherapy Jaipur", "mobility exercises"],
    },
  },
  {
    id: "summer-wellness-tips-for-seniors",
    slug: "summer-wellness-tips-for-seniors",
    title: "Summer Wellness Tips to Keep Seniors Safe and Healthy at Home",
    excerpt:
      "Jaipur summers are hard on everyone, but especially on seniors. Simple daily habits can make a real difference in staying safe through the heat.",
    author: coordinator,
    publishDate: "2026-05-25",
    readingTime: "4 min",
    category: "Wellness",
    featuredImagePlaceholder: "A caregiver helping a senior stay cool and hydrated at home",
    featuredImage: "/images/blogs/summer.png",
    featured: false,
    tags: ["senior wellness", "summer health tips", "heat safety", "elder care Jaipur"],
    content: [
      {
        type: "paragraph",
        text: "Jaipur's summer heat is tough on anyone, but seniors are especially vulnerable — the body's ability to regulate temperature and recognize thirst both decline with age. A few consistent habits go a long way.",
      },
      { type: "heading", text: "Simple Habits That Make a Big Difference" },
      {
        type: "list",
        style: "bullet",
        items: [
          "Regular hydration reminders, not just water available if remembered",
          "Lightweight, breathable clothing suited to the heat",
          "Avoiding outdoor activity during peak-heat hours",
          "Keeping indoor spaces genuinely cool, not just \"less hot\"",
          "Watching closely for early signs of heat exhaustion",
        ],
      },
      { type: "heading", text: "Warning Signs of Heat-Related Illness" },
      {
        type: "list",
        style: "bullet",
        items: [
          "Confusion or unusual disorientation",
          "Rapid pulse",
          "Dizziness or fainting",
          "Excessive sweating, or unusually dry skin with no sweating at all",
          "Nausea",
        ],
      },
      {
        type: "callout",
        variant: "info",
        text: "If you notice any of these signs, move to a cool space and hydrate immediately — and don't hesitate to seek medical help if symptoms don't improve quickly.",
      },
      {
        type: "paragraph",
        text: "For families managing this alongside work and other responsibilities, having elder care support at home during the hottest months can make monitoring far less stressful.",
      },
    ],
    seo: {
      keywords: ["senior wellness Jaipur", "heat safety for elderly", "summer health tips seniors"],
    },
  },
  {
    id: "medication-management-guide-for-family-caregivers",
    slug: "medication-management-guide-for-family-caregivers",
    title: "Medication Management: A Practical Guide for Family Caregivers",
    excerpt:
      "Medication mistakes at home are more common than families realize. A simple, consistent system prevents most of them.",
    author: nurse,
    publishDate: "2026-08-05",
    readingTime: "6 min",
    category: "Medical Tips",
    featuredImagePlaceholder: "A caregiver organizing a weekly medication pill box",
    featuredImage: "/images/blogs/medication-management.png",
    featured: true,
    tags: ["medication management", "family caregivers", "medication safety", "home care tips"],
    content: [
      {
        type: "paragraph",
        text: "Managing medications for a family member is one of the most stressful parts of caregiving — not because it's complicated in theory, but because ordinary daily life keeps getting in the way of doing it perfectly.",
      },
      { type: "heading", text: "Common Medication Mistakes at Home" },
      {
        type: "list",
        style: "bullet",
        items: [
          "Missed doses during busy or disrupted days",
          "Accidental double-dosing after forgetting an earlier dose was taken",
          "Mixing up medications that look similar",
          "Not tracking how a new prescription interacts with existing ones",
          "Stopping a medication early once symptoms improve",
        ],
      },
      { type: "heading", text: "Building a Simple, Reliable System" },
      {
        type: "list",
        style: "ordered",
        items: [
          "Keep one single, always-current list of every medication and dose",
          "Use a labeled pill organizer instead of loose bottles",
          "Set consistent daily reminder times, not \"whenever it's convenient\"",
          "Store medications properly — away from heat, and out of reach of confusion-prone patients",
          "Bring the full list to every doctor visit, not just the ones that feel relevant",
        ],
      },
      {
        type: "quote",
        text: "Families are usually managing this perfectly well until something changes — a new prescription, a hospital stay, a busier week. That's exactly when a second set of trained eyes matters most.",
        attribution: "PinkCity Healthcare Senior Registered Nurse",
      },
      {
        type: "table",
        headers: ["Medication Type", "Key Precaution"],
        rows: [
          ["Blood thinners", "Watch for unusual bruising or bleeding"],
          ["Diabetes medication", "Time doses consistently around meals"],
          ["Blood pressure medication", "Never stop abruptly without medical advice"],
          ["Pain medication", "Track dosage carefully to avoid dependency or overdose"],
        ],
      },
      {
        type: "callout",
        variant: "tip",
        text: "A home nurse can take medication management off your plate entirely — administering doses, tracking a schedule, and flagging concerns before they become problems.",
      },
      {
        type: "paragraph",
        text: "If medication management has started to feel like a second job on top of everything else, that's usually a sign it's worth bringing in professional support.",
      },
    ],
    seo: {
      keywords: ["medication management at home", "caregiver medication tips", "home nursing Jaipur"],
    },
  },
  {
    id: "what-to-expect-post-surgery-recovery-at-home",
    slug: "what-to-expect-post-surgery-recovery-at-home",
    title: "What to Expect During Post-Surgery Recovery at Home",
    excerpt:
      "A realistic look at what the first weeks of recovery at home usually involve, and how to know things are on track.",
    author: nurse,
    publishDate: "2026-06-20",
    readingTime: "5 min",
    category: "Recovery",
    featuredImagePlaceholder: "A patient resting at home during post-surgery recovery",
    featuredImage: "/images/blogs/post-surgery.png",
    featured: false,
    tags: ["post surgery recovery", "recovery at home", "wound care", "surgery aftercare"],
    content: [
      {
        type: "paragraph",
        text: "Every recovery timeline is different, and your surgeon's specific instructions always take priority over general guidance. That said, most home recoveries follow a broadly similar shape worth knowing in advance.",
      },
      { type: "heading", text: "The First Few Days" },
      {
        type: "paragraph",
        text: "Expect rest to be the priority, alongside careful pain management and close attention to the surgical site. This is usually the period where a home nurse's presence matters most — for monitoring, not just comfort.",
      },
      { type: "heading", text: "General Milestones in a Typical Recovery" },
      {
        type: "list",
        style: "ordered",
        items: [
          "Week 1: Rest, pain management, and wound care are the main focus",
          "Weeks 2–3: Gradual increases in mobility, as approved by your surgeon",
          "Week 4 onward: A return toward normal activity, paced by how the body responds",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        text: "Fever, spreading redness, unusual drainage, or a sudden increase in pain are always reasons to contact your surgeon — regardless of what week of recovery you're in.",
      },
      { type: "heading", text: "How a Home Nurse Supports This Process" },
      {
        type: "paragraph",
        text: "Beyond the clinical tasks — dressing changes, vitals, medication — a home nurse also acts as an early warning system, catching small issues before they become setbacks that could mean a return trip to the hospital.",
      },
      {
        type: "paragraph",
        text: "If a family member has surgery coming up, it's worth discussing a home recovery plan with the surgical team well before discharge day.",
      },
    ],
    seo: {
      keywords: ["post surgery recovery at home", "surgery recovery timeline", "home nursing after surgery"],
    },
  },
  {
    id: "understanding-bedridden-patient-care",
    slug: "understanding-bedridden-patient-care",
    title: "Understanding Bedridden Patient Care: A Complete Guide",
    excerpt:
      "Caring for a bedridden loved one involves more than most families expect. Here's what daily care and pressure sore prevention actually require.",
    author: elderCarePro,
    publishDate: "2026-07-30",
    readingTime: "6 min",
    category: "Elder Care",
    featuredImagePlaceholder: "A caregiver assisting a bedridden patient with daily care",
    featuredImage: "/images/blogs/bedridden-patient-care.png",
    featured: false,
    tags: ["bedridden patient care", "pressure sores", "elder care", "home nursing"],
    content: [
      {
        type: "paragraph",
        text: "Caring for a bedridden family member is physically and emotionally demanding in ways that are hard to appreciate until you're doing it. Getting the daily routine right matters more than most families expect.",
      },
      { type: "heading", text: "Daily Care Essentials" },
      {
        type: "list",
        style: "bullet",
        items: [
          "A consistent repositioning schedule to prevent pressure sores",
          "Regular skin checks, especially around bony areas",
          "Hygiene and grooming, done gently and with dignity",
          "Nutrition and hydration support, adjusted to the patient's needs",
          "Gentle range-of-motion movement to maintain joint flexibility",
        ],
      },
      { type: "heading", text: "Preventing Pressure Sores" },
      {
        type: "paragraph",
        text: "Repositioning roughly every two hours is a commonly used guideline, alongside proper mattress and cushioning support. Pressure sores can develop faster than families expect, and once they start, they're far harder to treat than to prevent.",
      },
      {
        type: "callout",
        variant: "warning",
        text: "Daily skin checks matter. Redness that doesn't fade after repositioning is an early warning sign worth addressing immediately, not \"keeping an eye on.\"",
      },
      { type: "heading", text: "Supporting Emotional Wellbeing" },
      {
        type: "paragraph",
        text: "Physical care is only part of it. Bedridden patients are at real risk of isolation, and something as simple as regular conversation and company makes a meaningful difference to their quality of life.",
      },
      {
        type: "paragraph",
        text: "For many families, professional support isn't about replacing family care — it's about sustaining it, since round-the-clock bedridden care is genuinely difficult to manage alone.",
      },
    ],
    seo: {
      keywords: ["bedridden patient care at home", "pressure sore prevention", "elder care Jaipur"],
    },
  },
  {
    id: "when-to-consider-palliative-care-at-home",
    slug: "when-to-consider-palliative-care-at-home",
    title: "When Is It Time to Consider Palliative Care at Home?",
    excerpt:
      "Palliative care is about comfort and quality of life, not giving up. Here are signs it may be worth discussing with your doctor.",
    author: nurse,
    publishDate: "2026-07-18",
    readingTime: "5 min",
    category: "Medical Tips",
    featuredImagePlaceholder: "A nurse offering comfort-focused care to a patient at home",
    featuredImage: "/images/blogs/palliative-care.png",
    featured: false,
    tags: ["palliative care", "comfort care", "serious illness", "family support"],
    content: [
      {
        type: "paragraph",
        text: "\"Palliative care\" is a phrase many families hesitate to even bring up, often because it's misunderstood as giving up on treatment. In practice, it's about comfort and quality of life — and it can run alongside ongoing treatment, not instead of it.",
      },
      { type: "heading", text: "Signs It May Be Time to Discuss Palliative Care" },
      {
        type: "list",
        style: "bullet",
        items: [
          "Frequent hospitalizations that feel like they're happening more often",
          "Symptoms that are getting harder to manage comfortably at home",
          "A family caregiver who is visibly reaching the point of burnout",
          "The patient expressing a wish to focus more on comfort",
          "Uncertainty within the family about what the treatment goals actually are right now",
        ],
      },
      {
        type: "quote",
        text: "Palliative care isn't a final step — it's an extra layer of support focused entirely on comfort, alongside whatever treatment plan the doctor has set.",
        attribution: "PinkCity Healthcare Senior Registered Nurse",
      },
      { type: "heading", text: "What Home-Based Palliative Support Looks Like" },
      {
        type: "list",
        style: "bullet",
        items: [
          "Symptom and pain management focused on comfort",
          "Close coordination with the patient's treating doctor",
          "Emotional and practical support for the whole family, not just the patient",
          "Flexible visit schedules that adapt as needs change",
        ],
      },
      {
        type: "callout",
        variant: "info",
        text: "This is always a conversation to have with your treating doctor first — home-based palliative support is there to carry out the plan they set, not to replace that decision.",
      },
      {
        type: "paragraph",
        text: "If your family is navigating a serious illness and comfort has started to feel like the priority, it's a reasonable and caring thing to bring up — not a difficult admission.",
      },
    ],
    seo: {
      keywords: ["palliative care at home Jaipur", "comfort care for serious illness", "home palliative support"],
    },
  },
  {
    id: "choosing-medical-equipment-for-home-care",
    slug: "choosing-the-right-medical-equipment-for-home-care",
    title: "Choosing the Right Medical Equipment for Home Care",
    excerpt:
      "Hospital beds, oxygen concentrators, wheelchairs — knowing what your loved one actually needs, and what to check before renting, makes home care safer from day one.",
    author: coordinator,
    publishDate: "2026-08-10",
    readingTime: "5 min",
    category: "Medical Tips",
    featuredImagePlaceholder: "A hospital bed and oxygen concentrator set up in a home care room",
        featuredImage: "/images/blogs/medical-equipment.png",
    featured: false,
    tags: ["medical equipment", "home care equipment", "hospital bed rental", "oxygen concentrator"],
    content: [
      {
        type: "paragraph",
        text: "Setting up a home for recovery or long-term care often comes down to more than arranging a caregiver — the right equipment matters just as much. Getting it wrong, or skipping something the patient actually needs, can slow recovery or create safety risks that are easy to avoid.",
      },
      { type: "heading", text: "Common Equipment Used in Home Care" },
      {
        type: "list",
        style: "bullet",
        items: [
          "Hospital beds — for positioning, pressure relief, and easier caregiving",
          "Oxygen concentrators — for patients prescribed home oxygen therapy",
          "Wheelchairs and walkers — for safe mobility during recovery",
          "Patient monitors — for tracking vitals like heart rate and oxygen levels",
          "Pressure-relief mattresses and cushions — especially for bedridden or low-mobility patients",
        ],
      },
      { type: "heading", text: "How to Know What You Actually Need" },
      {
        type: "paragraph",
        text: "The starting point should always be your doctor's or discharging hospital's recommendation, not a guess based on what seems useful. A treating physician's guidance on mobility level, oxygen requirements, and expected recovery timeline determines what equipment actually belongs in the home — renting more than that just adds clutter and cost.",
      },
      {
        type: "quote",
        text: "Families sometimes over-order out of caution, or under-order because they didn't realize a hospital bed would make caregiving so much easier. A quick conversation before delivery day saves both problems.",
        attribution: "PinkCity Healthcare Home Healthcare Coordinator",
      },
      { type: "heading", text: "What to Check Before Renting Equipment" },
      {
        type: "list",
        style: "ordered",
        items: [
          "Is the equipment cleaned, checked, and functioning before it reaches your home?",
          "Does the rental include delivery, setup, and a usage demonstration?",
          "Can the rental period be extended if recovery takes longer than expected?",
          "What's the process if something malfunctions mid-rental?",
          "Is there ongoing support available for questions between visits?",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Set up the space before the equipment arrives",
        text: "Clear enough room around the bed for a caregiver to move on both sides, confirm a nearby power outlet for anything electrical, and keep the area easy to clean — small preparation that makes daily care noticeably easier.",
      },
      {
        type: "paragraph",
        text: "If you're setting up a home for recovery or ongoing care, it's worth arranging equipment alongside your caregiving plan — not as an afterthought once the patient is already home.",
      },
    ],
    seo: {
      keywords: [
        "medical equipment for home care",
        "hospital bed rental Jaipur",
        "oxygen concentrator rental Jaipur",
      ],
    },
  },
];

export const blogCategoryFilters: { label: string; value: BlogCategory | "all" }[] = [
  { label: "All", value: "all" },
  ...blogCategories.map((category) => ({ label: category, value: category })),
];

// getAllPosts()/getPostBySlug()/etc. below are the only functions the UI
// ever calls — swapping the static `blogPosts` array for Supabase queries
// later only means making these `async` and awaiting them at each call
// site (already inside async Server Components / generateStaticParams).

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
  );
}

/** The single hero article shown on /blog — the post flagged `featured`, falling back to the newest. */
export function getFeaturedPost(): BlogPost {
  const posts = getAllPosts();
  return posts.find((post) => post.featured) ?? posts[0];
}

export function getLatestPosts(limit: number): BlogPost[] {
  return getAllPosts().slice(0, limit);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/** Same-category posts first, newest-first fallback, always excluding the post itself. */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const others = getAllPosts().filter((candidate) => candidate.slug !== post.slug);
  const sameCategory = others.filter((candidate) => candidate.category === post.category);
  const rest = others.filter((candidate) => candidate.category !== post.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

export function getAdjacentPosts(slug: string): {
  previous: BlogPost | null;
  next: BlogPost | null;
} {
  const posts = getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  };
}

export function getCategoryCounts(): { category: BlogCategory; count: number }[] {
  return blogCategories
    .map((category) => ({
      category,
      count: blogPosts.filter((post) => post.category === category).length,
    }))
    .filter((entry) => entry.count > 0)
    .sort((a, b) => b.count - a.count);
}
