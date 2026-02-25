"use client";

import { ScrollReveal } from "./ScrollReveal";

const cards = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        strokeWidth="2"
      >
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Sales & Outbound Engines",
    description:
      "Automated systems that find, score, and reach your ideal customers every single day — without you touching them.",
    items: [
      "Lead sourcing + ICP scoring (daily, automated)",
      "Personalized cold email sequences",
      "LinkedIn outreach agents",
      "Pre-call intelligence briefs",
    ],
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        strokeWidth="2"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: "Operations & Workflow Agents",
    description:
      "The repetitive tasks your team does manually every week — I automate them so they happen without anyone touching them.",
    items: [
      "Onboarding systems that run themselves",
      "Proposal and document generators",
      "Internal reporting dashboards",
      "Supplier and vendor automations",
    ],
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        strokeWidth="2"
      >
        <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: "Content & Comms Engines",
    description:
      "Consistent content, on-brand voice, every week — without you spending hours writing or managing a content team.",
    items: [
      "Weekly content cycles (auto-scheduled)",
      "Email follow-up + re-engagement sequences",
      "Review generation systems",
      "Brand voice libraries for your team",
    ],
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        strokeWidth="2"
      >
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Customer Experience Agents",
    description:
      "Systems that extend your customer experience past the door — following up, bringing people back, and increasing every sale.",
    items: [
      "Personalized recommendation tools for staff",
      "Post-purchase retention sequences",
      "Lapsed customer re-engagement flows",
      "Renewal and rebooking reminders",
    ],
  },
];

export function WhatIBuild() {
  return (
    <div id="what-i-build">
      <div className="py-20 md:py-[100px] px-5 md:px-10 max-w-[1080px] mx-auto">
        <ScrollReveal>
          <div className="text-xs font-semibold text-blue uppercase tracking-[1.2px] mb-3.5">
            What I Build
          </div>
          <h2 className="font-serif text-[clamp(32px,4vw,50px)] text-dark tracking-[-1px] leading-[1.1] mb-4">
            Other VAs manage your inbox.
            <br />I build the engines that run your business.
          </h2>
          <p className="text-base text-mid max-w-[520px] leading-[1.65]">
            Every month I add more AI systems to your operation. You keep
            compounding. You don&apos;t start over.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">
          {cards.map((card, index) => (
            <ScrollReveal key={card.title} delay={index * 100}>
              <div className="bg-bg border border-border rounded-2xl p-7 transition-all duration-[250ms] hover:border-blue hover:bg-blue-light hover:-translate-y-0.5 group h-full">
                <div className="w-10 h-10 bg-blue rounded-[10px] flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-[15px] font-semibold text-dark mb-2">
                  {card.title}
                </h3>
                <p className="text-[13.5px] text-mid leading-relaxed">
                  {card.description}
                </p>
                <ul className="list-none mt-3 flex flex-col gap-[5px]">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="text-[13px] text-mid pl-3.5 relative before:content-['→'] before:absolute before:left-0 before:text-blue before:text-[11px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
