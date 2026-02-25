export interface CaseStudyEngine {
  name: string;
  description: string;
  details: string[];
}

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  engineNumber: string;
  company: string;
  industry: string;
  tag: string;
  industryLine: string;
  stage: string;
  teamSize: string;
  shortVersion: string;
  heroDescription: string;
  heroMeta: { label: string; value: string }[];
  topResults: { value: string; label: string }[];
  cardStats: { bold: string; text: string }[];
  situation: string[];
  toolsUsed: { name: string; tool: string }[];
  toolStack: string[];
  totalToolCost: string;
  engines: CaseStudyEngine[];
  results: CaseStudyMetric[];
  headlineStats: CaseStudyMetric[];
  quote: string;
  quoteAuthor: string;
  wrongAndFixed: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "kevs-kitchen",
    engineNumber: "01",
    company: "Kev's Kitchen",
    industry: "Food & Beverage (Restaurant Group)",
    tag: "Food & Beverage",
    industryLine: "Restaurant Group · 3 Locations",
    stage: "Independent, 3 locations, 24 employees",
    teamSize: "1 owner-operator + 2 location managers + kitchen/floor staff",
    shortVersion:
      "Kevin was running 3 restaurants and doing everything manually. I came in as his VA and built the AI systems that gave him his time — and his evenings — back.",
    heroDescription:
      "I built a content engine, daily ops briefings, menu revenue intelligence, and a lapsed customer re-engagement system for a 3-location restaurant group — giving the owner 3 hours back every day.",
    heroMeta: [
      { label: "Industry", value: "Food & Beverage" },
      { label: "Locations", value: "3" },
      { label: "Tool Cost", value: "~$90/month" },
      { label: "Time to First Engine", value: "48 hours" },
    ],
    topResults: [
      { value: "+22%", label: "Revenue in 60 days" },
      { value: "3 hrs", label: "Saved daily" },
      { value: "18%", label: "Lapsed customer return rate" },
    ],
    cardStats: [
      { bold: "+22%", text: "revenue in 60 days" },
      { bold: "3 hrs", text: "saved daily" },
      { bold: "~$90/mo", text: "tool cost" },
    ],
    situation: [
      "Kevin Osei had built three restaurants by 2024. The food was great. Customers loved it. But Kevin was drowning — manually writing specials copy, texting staff updates from his personal phone, forgetting to post on Instagram, chasing suppliers by memory. Everything was in his head. If he got sick for a week, things fell apart.",
      "He didn't need someone to manage his calendar. He needed the operational layer of his business built out properly. That's where I came in.",
    ],
    toolsUsed: [
      { name: "Content Generation", tool: "Claude AI (custom prompt library)" },
      { name: "Social Scheduling", tool: "Buffer" },
      { name: "Customer Database", tool: "Airtable" },
      { name: "Re-engagement Emails", tool: "Mailchimp" },
      { name: "Staff Communications", tool: "Slack + Slackbot workflows" },
      {
        name: "Sales & Menu Insights",
        tool: "Square POS → Airtable → weekly AI summary",
      },
      { name: "Supplier Follow-ups", tool: "Gmail + Zapier" },
      {
        name: "Review Monitoring",
        tool: "Google Alerts + AI response drafts",
      },
    ],
    toolStack: [
      "Claude AI",
      "Buffer",
      "Airtable",
      "Mailchimp",
      "Slack",
      "Square POS",
      "Zapier",
      "Google Alerts",
    ],
    totalToolCost: "~$90/month",
    engines: [
      {
        name: "The Weekly Content Machine",
        description:
          "A weekly content cycle that runs every week without Kevin touching it.",
        details: [
          "Every Sunday night Kevin fills out a 3-minute form — what's fresh, what's featured, any seasonal notes. That's all he does. Monday morning the system generates the full week: 3 Instagram captions, 1 Google Business post, and specials board copy — all in Kevin's voice. I spent time calibrating the prompt library against his old posts and texts so it sounds like him, not a brand.",
          "Wednesday: AI drafts responses to any new Google or Yelp reviews. Kevin approves and posts in 5 minutes. Friday: Weekend push post goes out across all three location accounts. Before I built this, Kevin was posting 1–2 times a week on a good week. After: 4–5 touchpoints per week, every week, without fail.",
        ],
      },
      {
        name: "The Operations Hub",
        description:
          "Moved all team communication from scattered texts, WhatsApp, and sticky notes into a Slack workspace with automated workflows.",
        details: [
          "Kevin's team communication was scattered across texts, WhatsApp, and sticky notes. I moved it into a Slack workspace with automated workflows. Every morning at 7AM, managers get a briefing: today's reservation count, featured items to push, a weather note, and a voice memo from Kevin (transcribed and formatted automatically). Supplier follow-ups draft themselves. Staff announcements go from voice note to formatted Slack message in 90 seconds.",
        ],
      },
      {
        name: "Revenue Intelligence + Re-engagement",
        description:
          "Connected Square POS data into Airtable with automated weekly AI reports and a lapsed customer win-back sequence.",
        details: [
          "I connected Kevin's Square POS data into Airtable. Every Monday a clear revenue report lands in his inbox — top performers, underperformers, upsell opportunities. Kevin had never seen his data this clearly. In the first 30 days he pulled two underperforming items and pushed high-margin sides harder. Average check size went up $4.20.",
          "For lapsed customers, a 3-email win-back sequence triggers automatically for anyone who hasn't visited in 45+ days. Open rate: 41%. Redemption rate: 18%. Average re-engaged customer spent $34 on their return visit.",
        ],
      },
    ],
    results: [
      { label: "Time saved daily", value: "~3 hours" },
      { label: "Social posting consistency", value: "4–5x/week (was 1–2x)" },
      { label: "Google review response rate", value: "100% (was ~20%)" },
      { label: "Lapsed customer return rate", value: "18%" },
      { label: "Average check size increase", value: "+$4.20" },
      { label: "Revenue increase (60 days)", value: "+22%" },
      { label: "Monthly tool cost", value: "~$90" },
    ],
    headlineStats: [
      { label: "Time saved daily", value: "3 hours" },
      { label: "Revenue increase", value: "+22%" },
      { label: "Tool cost", value: "~$90/mo" },
    ],
    quote:
      "I haven't felt like I was drowning in two months. My managers know what to do. My customers are coming back. And I actually went home before 9pm last Thursday for the first time in years.",
    quoteAuthor: "Kevin Osei, Kev's Kitchen",
    wrongAndFixed: [
      "The first content output was too polished — it sounded like a chain, not Kevin. Customers noticed. I rebuilt the prompt library from his actual old posts and texts. Fixed immediately. I also initially sent supplier follow-up emails automatically without Kevin reviewing. One went out too sharp with a long-term vendor. Moved to review-and-approve. One extra click. Relationship saved.",
    ],
  },
  {
    slug: "zortcloud",
    engineNumber: "02",
    company: "Zortcloud",
    industry: "B2B SaaS (Cloud Infrastructure & DevOps Tooling)",
    tag: "B2B SaaS",
    industryLine: "Cloud Infrastructure · Pre-Series A",
    stage: "Pre-Series A, $2.1M raised, 9 employees",
    teamSize: "2 founders + 7",
    shortVersion:
      "Tara was the entire sales team. Writing cold emails at midnight, manually researching leads, running demos with no prep. I built an outbound engine that ran without her — so she could just show up to conversations.",
    heroDescription:
      "I built a daily lead sourcing agent, ICP scoring engine, cold email and LinkedIn outbound system, and pre-call intelligence briefs — so the founder could stop doing sales manually and just show up to conversations.",
    heroMeta: [
      { label: "Industry", value: "B2B SaaS" },
      { label: "Stage", value: "Pre-Series A" },
      { label: "Tool Cost", value: "~$195/month" },
      { label: "Emails Sent (Month 1)", value: "1,200+" },
    ],
    topResults: [
      { value: "11", label: "Demos booked in 2 weeks" },
      { value: "7.8%", label: "Cold email reply rate" },
      { value: "13.2%", label: "LinkedIn connect-to-reply" },
    ],
    cardStats: [
      { bold: "11 demos", text: "booked in 2 weeks" },
      { bold: "7.8%", text: "cold email reply rate" },
      { bold: "~$195/mo", text: "tool cost" },
    ],
    situation: [
      "Tara Ndukwe was the entire sales operation at Zortcloud. Writing cold emails at midnight. Manually searching LinkedIn. Forgetting to follow up. Running demos back-to-back with no prep. The investors were asking about pipeline. She had a product people wanted but no repeatable way to reach them.",
    ],
    toolsUsed: [
      { name: "LinkedIn Lead Mining", tool: "RapidAPI (Fresh LinkedIn Data)" },
      { name: "Enrichment", tool: "Clay + Apollo" },
      { name: "Email Finding", tool: "Hunter.io + Findymail" },
      { name: "ICP Scoring", tool: "n8n (custom logic)" },
      { name: "Signal Research", tool: "Perplexity AI" },
      { name: "Cold Email", tool: "Instantly.ai" },
      { name: "LinkedIn Outreach", tool: "Heyreach" },
      { name: "Pre-Call Briefs", tool: "Perplexity AI" },
      { name: "CRM", tool: "HubSpot" },
      { name: "Reporting", tool: "Airtable + Slack" },
    ],
    toolStack: [
      "RapidAPI (LinkedIn)",
      "Clay + Apollo",
      "Hunter.io",
      "n8n",
      "Perplexity AI",
      "Instantly.ai",
      "Heyreach",
      "HubSpot",
    ],
    totalToolCost: "~$195/month",
    engines: [
      {
        name: "Daily Lead Sourcing + ICP Scoring",
        description:
          "Every morning at 6:30AM the system pulls 40–70 leads from LinkedIn that match Zortcloud's ICP, scored and tiered automatically.",
        details: [
          'Every morning at 6:30AM the system pulls 40–70 leads from LinkedIn matching Zortcloud\'s ICP — targeting keywords like "deployment pipeline", "CI/CD issues", and "platform engineering". I also set up monitors on DevOps influencer accounts so anyone engaging with that content gets flagged as warm before outreach.',
          "A custom n8n scoring engine tiers each lead: A-tier gets email + LinkedIn + deep personalization. B-tier gets email only. C-tier gets a LinkedIn connection. The scoring covers title (30 pts), company size sweet spot (25 pts), confirmed tech stack (20 pts), and live pain signals (25 pts).",
        ],
      },
      {
        name: "Cold Email + LinkedIn Outreach System",
        description:
          "Full email copy and sequences built in Instantly. Peer-to-peer tone, not vendor-to-prospect.",
        details: [
          "I wrote all the copy and built the sequences in Instantly. The goal was peer-to-peer, not vendor-to-prospect — short, specific, technically credible. The best-performing emails were the simplest ones. A-tier emails referenced something specific from each lead's own posts or job listings. 4-email B-tier sequences ran over 14 days. Reply rate across all tiers: 7.8% (industry average: 2–3%).",
          "LinkedIn outreach via Heyreach ran in parallel for A-tier leads. Two messages maximum — connection request, then one follow-up DM. Hard stop. 60-day cooldown if no reply. Connection-to-reply rate: 13.2%.",
        ],
      },
      {
        name: "Pre-Call Intelligence Briefs",
        description:
          "Every booked demo triggers a Perplexity brief 45 minutes before the call.",
        details: [
          "Every booked demo triggers a Perplexity brief 45 minutes before the call. It covers who they are, their confirmed tech stack, company stage and growth signals, what triggered their interest, whether they're evaluating competitors, the first question to open with, two likely objections and how to handle each, and the recommended next step. Tara stopped doing pre-call research. The brief just shows up.",
        ],
      },
    ],
    results: [
      { label: "Demos booked (weeks 1–2, email only)", value: "3/week" },
      {
        label: "Demos booked (weeks 4–5, all channels)",
        value: "11 over 2 weeks",
      },
      { label: "Cold email reply rate", value: "7.8%" },
      { label: "LinkedIn connection-to-reply rate", value: "13.2%" },
      {
        label: "Pipeline value generated",
        value: "~$148,000 estimated ACV",
      },
      { label: "Pilot agreements initiated", value: "3" },
      { label: "Tara's daily time on GTM", value: "~15 minutes" },
      { label: "Monthly tool cost", value: "~$195" },
    ],
    headlineStats: [
      { label: "Demos booked", value: "11 in 2 weeks" },
      { label: "Reply rate", value: "7.8%" },
      { label: "Tool cost", value: "~$195/mo" },
    ],
    quote:
      "My co-founder asked how many emails I'd sent this month. I said I hadn't sent any. The system sent 1,200. I just showed up to 11 conversations.",
    quoteAuthor: "Tara Ndukwe, Zortcloud",
    wrongAndFixed: [
      "The first email copy was too technical — it read like a spec sheet. The best-performing emails ended up being the simplest ones. I also over-indexed on CTO targeting. At 30–150 person companies, CTOs are often deep in code and don't respond to leadership-framed outreach. Engineering Managers and DevOps Leads were far more responsive — and they pulled CTOs in themselves once they saw the value.",
    ],
  },
  {
    slug: "bizal",
    engineNumber: "03",
    company: "Bizal",
    industry: "B2B Marketplace (SMB Services Platform)",
    tag: "B2B Marketplace",
    industryLine: "SMB Services Platform · Bootstrapped",
    stage: "Early growth, bootstrapped, 7 employees",
    teamSize: "2 co-founders + 5",
    shortVersion:
      "Bizal's ops team was buried in manual work — onboarding vendors by hand, writing proposals from scratch, matching clients to vendors by gut. I built the automations that cut their ops time by 70% and nearly doubled their proposal close rate.",
    heroDescription:
      "I built vendor onboarding automation, an AI client-vendor matching engine, a proposal generator, and a live reporting dashboard — cutting ops time by 70% and pushing their proposal close rate from 41% to 64%.",
    heroMeta: [
      { label: "Industry", value: "B2B Marketplace" },
      { label: "Stage", value: "Bootstrapped" },
      { label: "Tool Cost", value: "~$165/month" },
      { label: "Ops Hours Freed", value: "22/week" },
    ],
    topResults: [
      { value: "70%", label: "Onboarding time cut" },
      { value: "64%", label: "Proposal close rate (was 41%)" },
      { value: "2", label: "Enterprise clients in 30 days" },
    ],
    cardStats: [
      { bold: "70%", text: "onboarding time cut" },
      { bold: "41% → 64%", text: "proposal close rate" },
      { bold: "~$165/mo", text: "tool cost" },
    ],
    situation: [
      "Bizal connects SMBs with vetted service providers. Good model, growing fast — but the infrastructure was held together with spreadsheets and two exhausted ops employees. Every vendor was onboarded by hand. Every client was matched by gut. Proposals took 45–90 minutes each. The founders had zero pipeline visibility.",
    ],
    toolsUsed: [
      { name: "Vendor Intake", tool: "Typeform → Airtable" },
      { name: "Onboarding Automation", tool: "Make (Integromat)" },
      { name: "Document Generation", tool: "Documint + Claude AI" },
      {
        name: "Client-Vendor Matching",
        tool: "Claude AI + Airtable scoring logic",
      },
      {
        name: "Proposal Generation",
        tool: "Claude AI (category-specific templates)",
      },
      { name: "E-Signature", tool: "DocuSign (via Make)" },
      { name: "Reporting Dashboard", tool: "Airtable + Softr" },
      { name: "Alerts & Comms", tool: "Slack automations" },
      { name: "CRM", tool: "HubSpot" },
    ],
    toolStack: [
      "Typeform",
      "Airtable",
      "Make (Integromat)",
      "Documint",
      "Claude AI",
      "DocuSign",
      "Softr",
      "HubSpot",
    ],
    totalToolCost: "~$165/month",
    engines: [
      {
        name: "Vendor Onboarding Automation",
        description:
          "Replaced a 4–6 hour manual process per vendor with an automated flow that takes under 10 minutes of ops time.",
        details: [
          "Vendor submits Typeform → Make triggers immediately. The system creates their Airtable profile, scores them against Bizal's quality rubric, assigns a tier (Verified/Standard/Pending), sends a personalized welcome email within 5 minutes, generates their service agreement via Documint with details pre-filled, and sends it for e-signature via DocuSign. Pending Review vendors get flagged to ops with a one-line summary of what's missing. Total ops time per vendor went from 4–6 hours to under 10 minutes.",
        ],
      },
      {
        name: "Client-Vendor Matching + Proposal Generator",
        description:
          "AI interprets client briefs, scores vendor matches, and generates full proposals automatically.",
        details: [
          "When a client submits a request, AI processes the brief and extracts primary needs, urgency level (inferred from language), budget signal, and geographic requirements. Claude then scores every vendor in Airtable against those needs — category match (40 pts), availability (20 pts), capacity (15 pts), past ratings (15 pts), tier (10 pts) — and surfaces the top 3 with a match rationale. Ops confirms in one click. Proposal generates in under 2 minutes. Proposal close rate went from 41% to 64%.",
        ],
      },
      {
        name: "Live Reporting Dashboard",
        description:
          "A live internal Softr dashboard connected to Airtable with weekly automated Slack summaries.",
        details: [
          "A Softr dashboard connected to Airtable shows active engagements, vendor utilization, proposal acceptance rates, revenue by week, and top/inactive vendors — all in real time. Every Monday a Slack report goes to both founders with the week's numbers, flags, and action items.",
        ],
      },
    ],
    results: [
      {
        label: "Vendor onboarding time",
        value: "Reduced 70% (5hrs → 10 min)",
      },
      {
        label: "Proposal generation time",
        value: "Reduced 95% (60 min → under 2 min)",
      },
      { label: "Proposal-to-close rate", value: "Up from 41% to 64%" },
      { label: "New enterprise clients", value: "2 signed in first 30 days" },
      { label: "Ops team capacity freed", value: "~22 hours/week" },
      { label: "Monthly tool cost", value: "~$165" },
    ],
    headlineStats: [
      { label: "Onboarding time cut", value: "70%" },
      { label: "Close rate", value: "41% → 64%" },
      { label: "Tool cost", value: "~$165/mo" },
    ],
    quote:
      "My ops team came to me last week and asked what to do with all the extra time. That's the best problem I've had in two years.",
    quoteAuthor: "Simone Adeyemi, Bizal",
    wrongAndFixed: [
      "The first matching engine weighted category too heavily — surfacing technically correct vendors that were wrong in context. Added company-size and complexity weighting. I also launched the proposal generator before building category-specific templates. IT service proposals were using a legal template. Spent one week building category-specific templates and the quality complaints stopped.",
    ],
  },
  {
    slug: "bulletproof-management",
    engineNumber: "04",
    company: "Bulletproof Management",
    industry: "Talent & Artist Management",
    tag: "Talent Management",
    industryLine: "Artist & Talent Management · 11 Roster",
    stage: "Independent, 4 years operating, 3 employees",
    teamSize:
      "1 founder-manager + 2 (1 assistant, 1 bookings coordinator)",
    shortVersion:
      "Darnell was the bottleneck on everything — contracts, pitches, inbound inquiries, pre-meeting research. His assistant was capable but had nothing to work from. I built the systems that let his team actually operate without him in the middle of every task.",
    heroDescription:
      "I built a contract intelligence agent, inbound inquiry triage engine, pitch deck generator, and talent brief system — saving the founder 14 hours a week and letting his assistant run the inbox for the first time.",
    heroMeta: [
      { label: "Industry", value: "Talent Management" },
      { label: "Roster", value: "11 Artists" },
      { label: "Tool Cost", value: "~$140/month" },
      { label: "Hours Saved/Week", value: "14" },
    ],
    topResults: [
      { value: "14hrs", label: "Saved every week" },
      { value: "6hrs", label: "Avg inquiry response (was 3.2 days)" },
      { value: "62%", label: "Inquiries handled by assistant" },
    ],
    cardStats: [
      { bold: "14 hrs/wk", text: "saved" },
      { bold: "3.2 days → 6hrs", text: "response time" },
      { bold: "~$140/mo", text: "tool cost" },
    ],
    situation: [
      "Darnell Hughes was managing 11 artists and doing every operational task himself. Contracts reviewed line-by-line with no summary layer. Pitch decks rebuilt from scratch every time. Inbound inquiries sitting in his inbox for days. Pre-meeting research eating 45 minutes before every call. His assistant was capable — but Darnell had built nothing for her to work from.",
    ],
    toolsUsed: [
      {
        name: "Contract Summarization",
        tool: "Claude AI (PDF processing)",
      },
      { name: "Inbound Email Triage", tool: "Gmail + Zapier + Claude AI" },
      { name: "Pitch Deck Generation", tool: "Claude AI + Beautiful.ai" },
      { name: "Talent Brief System", tool: "Airtable + Claude AI" },
      { name: "Pre-Meeting Research", tool: "Perplexity AI" },
      { name: "Outreach Sequences", tool: "Instantly.ai" },
      { name: "Pipeline Tracking", tool: "HubSpot" },
      { name: "Internal Comms", tool: "Slack automations" },
    ],
    toolStack: [
      "Claude AI",
      "Gmail + Zapier",
      "Beautiful.ai",
      "Airtable",
      "Perplexity AI",
      "Instantly.ai",
      "HubSpot",
      "Slack",
    ],
    totalToolCost: "~$140/month",
    engines: [
      {
        name: "Contract Intelligence Agent",
        description:
          "Every contract gets processed automatically with a summary, red flags, and negotiation points.",
        details: [
          "Darnell forwards any contract PDF to a dedicated email. Within 3 minutes a structured summary hits his Slack — parties, deal type, key terms, red flags with specific clause references, and suggested negotiation points. Contract review time down 75%. In the first 30 days he caught two clauses he said he likely would have missed under time pressure.",
        ],
      },
      {
        name: "Inbound Inquiry Triage Engine",
        description:
          "Every inbound inquiry gets automatically scored (HOT/WARM/COLD/SPAM) and summarized before anyone sees it.",
        details: [
          "Every inbound inquiry gets automatically scored (HOT/WARM/COLD/SPAM) and summarized before anyone sees it. Each non-spam inquiry triggers a Slack notification with the sender's details, a one-paragraph summary, and a draft reply. Darnell's assistant can now handle 62% of inquiries independently. Inquiry response time went from 3.2 days to under 6 hours.",
        ],
      },
      {
        name: "Pitch Deck Generator + Talent Brief System",
        description:
          "Living artist profiles in Airtable and automated pitch deck generation.",
        details: [
          "Every artist has a living profile in Airtable (bios, social stats, past partnerships, rates, availability) that auto-updates weekly via Zapier. Darnell types an artist name into Slack and gets a formatted one-pager in 30 seconds. For new pitch decks, he inputs five fields — artist, brand, deal type, angle, tone — and Claude generates a full deck outline. Beautiful.ai populates it from Bulletproof's template. Under 90 minutes to a polished pitch. Down from 3–4 hours.",
        ],
      },
    ],
    results: [
      { label: "Hours saved per week", value: "14" },
      { label: "Contract review time", value: "Down 75%" },
      {
        label: "Inbound response time",
        value: "From 3.2 days to under 6 hours",
      },
      { label: "Pitch deck production time", value: "Down 65%" },
      { label: "Inquiries handled by assistant", value: "62% (was 0%)" },
      { label: "New partnership deals accelerated", value: "3 closed faster" },
      { label: "Monthly tool cost", value: "~$140" },
    ],
    headlineStats: [
      { label: "Hours saved/week", value: "14" },
      { label: "Response time", value: "3.2d → 6h" },
      { label: "Tool cost", value: "~$140/mo" },
    ],
    quote:
      "My assistant actually runs the inbox now. I show up to meetings with a brief already written. And I caught two bad contract clauses last month that I probably would have missed. That alone paid for everything.",
    quoteAuthor: "Darnell Hughes, Bulletproof Management",
    wrongAndFixed: [
      "The first pitch deck generator was too generic — polished but not specific to each artist. Rebuilt the prompt system with artist-specific tone guides. I also initially set up inbound replies to send automatically without review. One draft went out slightly off-brand for the relationship context. Immediately moved to review-and-approve.",
    ],
  },
  {
    slug: "gdnd-architects",
    engineNumber: "05",
    company: "GD&D Architects",
    industry: "Architecture & Design",
    tag: "Architecture",
    industryLine: "Architecture & Design · 12 Years",
    stage: "Established practice, 12 years, 8 employees",
    teamSize: "2 founding partners + 6",
    shortVersion:
      "GD&D was losing bids to faster firms — not because their work was worse, but because their proposals were slow and inconsistent. I built the systems that cut proposal time from 3 days to 4 hours and pushed their win rate from 38% to 61%.",
    heroDescription:
      "I built an AI proposal writer, brief interpreter agent, fee calculator, and BD pipeline — cutting proposal time from 3 days to 4 hours and pushing their win rate from 38% to 61% in 8 weeks.",
    heroMeta: [
      { label: "Industry", value: "Architecture" },
      { label: "Practice Size", value: "8 Employees" },
      { label: "Tool Cost", value: "~$120/month" },
      { label: "Late Proposals", value: "0 (was 2–3/qtr)" },
    ],
    topResults: [
      { value: "61%", label: "Proposal win rate (was 38%)" },
      { value: "4hrs", label: "Proposal time (was 2–3 days)" },
      { value: "70%", label: "Less partner time on BD admin" },
    ],
    cardStats: [
      { bold: "3 days → 4 hrs", text: "proposal time" },
      { bold: "38% → 61%", text: "win rate" },
      { bold: "~$120/mo", text: "tool cost" },
    ],
    situation: [
      "GD&D Architects had 12 years of strong work and excellent references. They were losing bids not to better architects — to faster ones. A proposal for a mid-sized project took 2–3 full working days. By Thursday morning on a Monday RFP, the deck looked rushed. No formal BD pipeline. No follow-up process. Grace was managing business development from memory.",
    ],
    toolsUsed: [
      { name: "Proposal Generation", tool: "Claude AI" },
      { name: "Project Portfolio Database", tool: "Airtable" },
      { name: "Brief Interpreter", tool: "Claude AI (PDF/doc processing)" },
      {
        name: "Fee Proposal Calculator",
        tool: "Airtable (custom formula sheet)",
      },
      { name: "Competitive Research", tool: "Perplexity AI" },
      { name: "BD Pipeline", tool: "HubSpot" },
      { name: "Follow-up Sequences", tool: "Gmail + Zapier" },
      {
        name: "Document Formatting",
        tool: "Google Slides templates + Documint",
      },
      { name: "Reporting", tool: "Airtable + weekly Slack summary" },
    ],
    toolStack: [
      "Claude AI",
      "Airtable",
      "Perplexity AI",
      "HubSpot",
      "Documint",
      "Gmail + Zapier",
      "Google Slides",
    ],
    totalToolCost: "~$120/month",
    engines: [
      {
        name: "Proposal Intelligence System",
        description:
          "A structured project portfolio in Airtable paired with an AI proposal generation engine and a fee calculator.",
        details: [
          "I catalogued every GD&D project in Airtable with tags, outcomes, images, and relevance signals. When an RFP arrives, the system surfaces the 3–5 most relevant precedents with match rationale. Claude then generates a full proposal draft — executive summary, practice overview, relevant experience, project approach, team bios, fee proposal, and a tailored Why GD&D section — in under 20 minutes. Grace spends 2 hours refining, not 2 days writing.",
          "I also built a fee calculator using GD&D's historical data and industry benchmarks. Grace inputs project type, floor area, budget, scope, and programme. The calculator outputs a recommended fee range with a breakdown by RIBA stage. First time in 12 years she felt confident about a fee proposal without second-guessing herself.",
        ],
      },
      {
        name: "Brief Interpreter + Competitive Research",
        description:
          "Automated processing of RFP documents to extract priorities and competitive context.",
        details: [
          "When a brief arrives as a PDF, I built a processing layer that extracts stated priorities, implicit priorities (from language analysis), constraints, red flags, and a recommended proposal angle — before the proposal engine runs. For significant bids, Perplexity builds a competitive brief: who else is likely in the running, what they typically lead with, and the client's previous project history. Grace positions GD&D's proposal deliberately, not generically.",
        ],
      },
      {
        name: "BD Pipeline + Automated Follow-ups",
        description:
          "HubSpot pipeline with five stages and automated follow-up sequences at each stage.",
        details: [
          "I built a five-stage HubSpot pipeline with automated follow-up sequences at every stage. After initial contact: 7-day follow-up. After proposal submitted: 10-day follow-up. After a loss: 3-month warm sequence for the next opportunity. Every Monday Grace gets a pipeline Slack report with active proposals, their combined value, and pending follow-ups.",
        ],
      },
    ],
    results: [
      {
        label: "Proposal production time",
        value: "From 2–3 days to under 4 hours",
      },
      { label: "Proposal win rate", value: "Up from 38% to 61%" },
      { label: "Partner time on BD admin", value: "Down 70%" },
      { label: "Late fee proposals", value: "0 (was 2–3 per quarter)" },
      { label: "Pipeline visibility", value: "Full (was zero)" },
      { label: "Monthly tool cost", value: "~$120" },
    ],
    headlineStats: [
      { label: "Proposal time", value: "3d → 4h" },
      { label: "Win rate", value: "38% → 61%" },
      { label: "Tool cost", value: "~$120/mo" },
    ],
    quote:
      "We won a project last month that I believe we would have lost before — not because our work wasn't good enough, but because we were faster, the proposal was sharper, and we walked in knowing exactly what the client cared about most. That's the system.",
    quoteAuthor: "Grace Obi, GD&D Architects",
    wrongAndFixed: [
      'The first proposal generator produced generic "Why GD&D" sections — buzzwords every firm uses. Rebuilt to pull from GD&D\'s actual differentiators and tailor language by project type. The fee calculator also needed calibration — ran 24 historical projects through it and adjusted the multipliers until Grace trusted the outputs.',
    ],
  },
  {
    slug: "bene-optics",
    engineNumber: "06",
    company: "Bene Optics",
    industry: "Optical Retail (Independent Eyewear Brand)",
    tag: "Optical Retail",
    industryLine: "Independent Eyewear · 2 Locations",
    stage: "Independent, 2 locations, 11 employees",
    teamSize: "1 founder + 10",
    shortVersion:
      "Bene Optics had a great in-store experience but nothing extending it past the door. No follow-up. No review system. Inconsistent staff recommendations. I built the customer experience engine that pushed AOV up 31% and doubled Google reviews in 45 days.",
    heroDescription:
      "I built an in-store recommendation agent, post-purchase follow-up engine, review generation system, weekly content cycle, and staff training hub — pushing AOV up 31% and doubling Google reviews in 45 days.",
    heroMeta: [
      { label: "Industry", value: "Optical Retail" },
      { label: "Locations", value: "2" },
      { label: "Tool Cost", value: "~$135/month" },
      { label: "AOV Change", value: "£187 → £246" },
    ],
    topResults: [
      { value: "+31%", label: "Average order value" },
      { value: "+166%", label: "Google reviews in 45 days" },
      { value: "54%", label: "Post-purchase email open rate" },
    ],
    cardStats: [
      { bold: "+31%", text: "average order value" },
      { bold: "+166%", text: "Google reviews in 45 days" },
      { bold: "~$135/mo", text: "tool cost" },
    ],
    situation: [
      "Nadia Mensah had built two Bene Optics locations on the premise that buying glasses should feel personal, not clinical. It worked. Customers loved the in-store experience. But they walked out the door and nothing followed them. No follow-up. No review ask. Staff recommendations were inconsistent across locations. Content was sporadic. And Nadia was spending 8 hours a week on content and communications.",
    ],
    toolsUsed: [
      { name: "Customer Profiles", tool: "Airtable (CRM-lite)" },
      {
        name: "Recommendation Engine",
        tool: "Claude AI (staff-facing tool)",
      },
      { name: "Post-Purchase Sequences", tool: "Klaviyo" },
      { name: "Review Request System", tool: "Klaviyo + QR flow" },
      { name: "Prescription Reminders", tool: "Klaviyo + Zapier" },
      { name: "Content Generation", tool: "Claude AI + Buffer" },
      { name: "Staff Training Hub", tool: "Notion" },
      { name: "POS Integration", tool: "Lightspeed → Airtable" },
      { name: "Reporting", tool: "Airtable + weekly Slack summary" },
    ],
    toolStack: [
      "Claude AI",
      "Airtable",
      "Klaviyo",
      "Lightspeed POS",
      "Buffer",
      "Zapier",
      "Notion",
    ],
    totalToolCost: "~$135/month",
    engines: [
      {
        name: "In-Store Recommendation Agent",
        description:
          "A Claude-powered tool that any dispensing staff member can run during consultation to get curated frame recommendations.",
        details: [
          "I built a staff-facing Claude tool that any dispensing team member can run during a consultation. They input face shape, primary use, style preference, skin tone, budget tier, and any context notes. The tool outputs 3 curated frame recommendations — each with the product code, a \"why it suits them\" rationale, a conversational line for the staff member to use naturally, a lens upgrade suggestion, and an alternative. The lens upgrade prompt alone drove most of the AOV increase. Staff were suggesting upgrades inconsistently before. Now it's prompted every time.",
        ],
      },
      {
        name: "Post-Purchase Follow-up + Review System",
        description:
          "Automated Klaviyo sequences triggered by every purchase for follow-up and review collection.",
        details: [
          'Every purchase in Lightspeed automatically triggers a Klaviyo sequence. Day 1: warm congratulatory email signed by the staff member who served them. Day 5: honest review request referencing their specific frame purchase. Day 14: educational lens care content with a soft accessories prompt. The Day 5 subject line change was the biggest unlock: "Please leave us a review" got 19% open rate. "How are your new glasses treating you?" got 54%. Same email body. Google reviews went from 9 to 24 in 45 days.',
        ],
      },
      {
        name: "Prescription Renewal + Lapsed Customer Engine",
        description:
          "Automated prescription expiry tracking and lapsed customer re-engagement.",
        details: [
          "Every prescription expiry date triggers automatically. At 11 months: warm renewal reminder with a booking link. At 18 months with no return: a 3-email lapsed sequence — reconnection, new collection highlight relevant to their past purchase style, then a one-time 10% welcome back offer. Lapsed re-engagement return rate in first 60 days: 22%.",
        ],
      },
      {
        name: "Content Engine + Staff Training Hub",
        description:
          "Weekly content cycle and a comprehensive Notion-based training hub.",
        details: [
          "Every Monday AI generates 4 content ideas based on season, new stock (from Lightspeed), and top-sellers. Nadia or her social media staff pick 3. Wednesday: AI drafts captions. Buffer schedules. I calibrated the prompt library around Bene's voice: warm, knowledgeable, slightly playful, never corporate. Post engagement up 84% over 45 days. I also moved all of Bene's SOPs, scripts, and service guides into a Notion staff training hub with AI quizzes — cutting new staff onboarding time by 60%.",
        ],
      },
    ],
    results: [
      { label: "Average order value", value: "Up 31% (£187 → £246)" },
      { label: "Google reviews", value: "Up 166% in 45 days" },
      {
        label: "Post-purchase email open rate",
        value: "54% (industry avg: 21%)",
      },
      {
        label: "Prescription renewal booking rate",
        value: "38% (first cycle)",
      },
      { label: "Lapsed customer return rate", value: "22%" },
      { label: "Staff onboarding time", value: "Down 60%" },
      { label: "Social engagement per post", value: "Up 84%" },
      {
        label: "Nadia's time on content/comms weekly",
        value: "Down from 8hrs to 45 min",
      },
      { label: "Monthly tool cost", value: "~$135" },
    ],
    headlineStats: [
      { label: "AOV increase", value: "+31%" },
      { label: "Google reviews", value: "+166%" },
      { label: "Tool cost", value: "~$135/mo" },
    ],
    quote:
      "The experience I was delivering in person is now extending past the door. Customers hear from me at the right moments, in the right way. And my staff actually sound like they work for Bene.",
    quoteAuthor: "Nadia Mensah, Bene Optics",
    wrongAndFixed: [
      'The first recommendation tool was too detailed — four paragraphs per frame. Staff were reading from it awkwardly mid-consultation and customers noticed. Rebuilt to be scannable: bullet points, one conversational line. Immediately felt natural. The review email subject line was the other fix — "Please leave us a review" vs "How are your new glasses treating you?" was a 35-point open rate difference.',
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}
