"use client";

import { ScrollReveal } from "./ScrollReveal";
import { caseStudies } from "@/data/case-studies";
import { CaseStudyCard } from "./CaseStudyCard";

export function CaseStudiesSection() {
  return (
    <div id="case-studies">
      <div className="bg-bg border-t border-b border-border py-20 md:py-[100px] px-5 md:px-10">
        <div className="max-w-[1080px] mx-auto">
          <ScrollReveal>
            <div className="text-xs font-semibold text-blue uppercase tracking-[1.2px] mb-3.5">
              Real Engines. Real Businesses.
            </div>
            <h2 className="font-serif text-[clamp(32px,4vw,50px)] text-dark tracking-[-1px] leading-[1.1] mb-4">
              Here&apos;s what I&apos;ve built.
            </h2>
            <p className="text-base text-mid max-w-[520px] leading-[1.65]">
              Six businesses. Six complete AI operation builds. Real results,
              real tool costs, real mistakes I made and fixed.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.slug} study={study} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
