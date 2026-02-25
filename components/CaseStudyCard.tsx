"use client";

import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";
import type { CaseStudy } from "@/data/case-studies";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

export function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  return (
    <ScrollReveal delay={index * 80}>
      <Link
        href={`/case-studies/${study.slug}`}
        className="bg-white border border-border rounded-2xl p-7 cursor-pointer transition-all duration-[250ms] hover:border-blue hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)] hover:-translate-y-[3px] no-underline flex flex-col h-full"
      >
        <span className="text-[11px] font-semibold text-blue bg-blue-light px-2.5 py-1 rounded-md inline-block mb-3.5 self-start">
          {study.tag}
        </span>
        <h3 className="font-serif text-xl text-dark tracking-[-0.3px] mb-1.5">
          {study.company}
        </h3>
        <div className="text-xs text-light mb-4">{study.industryLine}</div>
        <div className="text-[13px] text-mid leading-relaxed italic border-l-[3px] border-blue-mid pl-3 mb-5 flex-1">
          &ldquo;{study.quote}&rdquo;
        </div>
        <div className="flex flex-col gap-1.5 mb-5">
          {study.cardStats.map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-[12.5px] text-mid before:content-[''] before:w-1.5 before:h-1.5 before:bg-green before:rounded-full before:shrink-0"
            >
              <strong className="text-dark font-semibold">{stat.bold}</strong>{" "}
              {stat.text}
            </div>
          ))}
        </div>
        <div className="text-[13px] font-semibold text-blue flex items-center gap-1 mt-auto">
          Read full breakdown →
        </div>
      </Link>
    </ScrollReveal>
  );
}
