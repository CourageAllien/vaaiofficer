"use client";

import { ScrollReveal } from "./ScrollReveal";

const steps = [
  {
    num: 1,
    title: "Tell me what's slow",
    desc: "What takes too long? What falls through the cracks? Tell me.",
  },
  {
    num: 2,
    title: "I audit your operation",
    desc: "I find the highest-leverage places to build first.",
  },
  {
    num: 3,
    title: "I build the engine",
    desc: "Your first system is live within days. Not weeks.",
  },
  {
    num: 4,
    title: "I QC everything",
    desc: "I test, tune, and make sure it actually delivers.",
  },
  {
    num: 5,
    title: "I keep building",
    desc: "Every month, another engine. Your business compounds.",
  },
];

export function HowItWorks() {
  return (
    <div
      id="how-it-works"
      className="bg-bg border-t border-b border-border"
    >
      <div className="py-20 md:py-[100px] px-5 md:px-10 max-w-[1080px] mx-auto">
        <ScrollReveal>
          <div className="text-xs font-semibold text-blue uppercase tracking-[1.2px] mb-3.5">
            How It Works
          </div>
          <h2 className="font-serif text-[clamp(32px,4vw,50px)] text-dark tracking-[-1px] leading-[1.1] mb-4">
            From conversation to live engine
            <br />
            in days — not weeks.
          </h2>
          <p className="text-base text-mid max-w-[520px] leading-[1.65]">
            I don&apos;t hand you a plan and disappear. I build the thing, test
            it, and make sure it actually works.
          </p>
        </ScrollReveal>

        <div className="steps-row grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-0 mt-14">
          {steps.map((step, index) => (
            <ScrollReveal
              key={step.num}
              delay={index * 100}
              className="flex flex-col items-center text-center px-3 relative z-[1]"
            >
              <div className="w-10 h-10 bg-blue text-white rounded-full flex items-center justify-center text-sm font-bold mb-4 border-[3px] border-white shadow-[0_0_0_1px_#2563EB]">
                {step.num}
              </div>
              <h4 className="text-[13px] font-semibold text-dark mb-1.5 leading-tight">
                {step.title}
              </h4>
              <p className="text-xs text-light leading-[1.5]">{step.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
