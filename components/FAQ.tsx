"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

const faqs = [
  {
    q: "What exactly do you do every month?",
    a: "I build, deploy, and maintain AI engines and agents for your business. Each month I focus on the highest-leverage things your operation needs. You tell me what matters most. I build it, I QC it, and I keep it running.",
  },
  {
    q: "What tools do you use?",
    a: "Whatever your business needs — I don't force a stack. Most engines cost $80–$200/month in tools on top of my fee. I'll tell you exactly what's needed before anything gets built. The case studies all show real tool costs so you can see what to expect.",
  },
  {
    q: "How fast do you move?",
    a: "Fast. Most clients have something live within 48–72 hours of starting. The trial is 7 days — I'll have a working engine in your business before it's over.",
  },
  {
    q: "What if I don't know what needs to be built?",
    a: "Perfect — that's exactly where we start. I audit your operation, find the bottlenecks, and tell you what to build first and exactly why. You don't need to come in knowing what you want. You just need to know what's costing you time or money.",
  },
  {
    q: "Is this a real person?",
    a: "Yes. Me. One VA. One point of contact. Fully dedicated to your business. This is not an agency, not a shared service, not a bot with a pretty interface. It's one person who knows your business and builds for it every month.",
  },
  {
    q: "What happens after the 7-day trial?",
    a: "$549/month. No contracts. Cancel anytime. Simple. If you see the value in the first 7 days — and you will — you stay on. If you don't, you walk away with everything I built and pay nothing.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-16 md:py-20 px-5 md:px-10 border-t border-border">
      <div className="max-w-[680px] mx-auto">
        <ScrollReveal className="text-center mb-12">
          <div className="text-xs font-semibold text-blue uppercase tracking-[1.2px] mb-3.5">
            Questions
          </div>
          <h2 className="font-serif text-4xl text-dark tracking-[-1px] leading-[1.1]">
            Common questions
          </h2>
        </ScrollReveal>

        <div>
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div
                className={`border-b border-border py-5 ${
                  openIndex === index ? "faq-item-open" : ""
                }`}
              >
                <div
                  className="faq-q text-[15px] font-semibold text-dark cursor-pointer flex items-center justify-between gap-3"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  {faq.q}
                </div>
                {openIndex === index && (
                  <div className="text-sm text-mid leading-[1.65] mt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
