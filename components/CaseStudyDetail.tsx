"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/data/case-studies";
import { siteConfig } from "@/data/site-config";

interface CaseStudyDetailProps {
  study: CaseStudy;
}

export function CaseStudyDetail({ study }: CaseStudyDetailProps) {
  return (
    <div>
      {/* Case Study Nav */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-[12px] border-b border-border px-5 md:px-10 h-16 flex items-center gap-5">
        <Link
          href="/#case-studies"
          className="flex items-center gap-1.5 text-[13px] text-mid cursor-pointer border border-border px-3.5 py-1.5 rounded-[7px] font-medium bg-white hover:border-dark hover:text-dark transition-all no-underline"
        >
          ← Back to Home
        </Link>
        <span className="text-[13px] text-light">Case Study</span>
      </nav>

      {/* Hero */}
      <div className="pt-16 bg-bg border-b border-border">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[820px] mx-auto px-5 md:px-10 py-16 md:pb-14"
        >
          <span className="text-[11px] font-semibold text-blue bg-blue-light px-3 py-[5px] rounded-md inline-block mb-5">
            {study.tag} · VA Engine {study.engineNumber}
          </span>
          <h1 className="font-serif text-[clamp(34px,5vw,56px)] text-dark tracking-[-1.5px] leading-[1.05] mb-4">
            {study.company}
          </h1>
          <p className="text-[17px] text-mid leading-relaxed max-w-[600px] mb-8">
            {study.heroDescription}
          </p>
          <div className="flex gap-6 flex-wrap">
            {study.heroMeta.map((meta) => (
              <div key={meta.label} className="flex flex-col gap-[3px]">
                <div className="text-[11px] text-light font-medium uppercase tracking-[0.6px]">
                  {meta.label}
                </div>
                <div className="text-sm font-semibold text-dark">
                  {meta.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Body */}
      <div className="max-w-[820px] mx-auto px-5 md:px-10 py-16">
        {/* Top Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-dark rounded-2xl p-9 grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {study.topResults.map((result) => (
            <div key={result.label} className="text-center">
              <div className="font-serif text-4xl text-white tracking-[-1px] mb-1">
                {result.value}
              </div>
              <div className="text-xs text-white/40 leading-[1.4]">
                {result.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Situation */}
        {study.situation.map((paragraph, i) => (
          <p
            key={i}
            className="text-[15px] text-mid leading-[1.75] mb-4"
          >
            {paragraph}
          </p>
        ))}

        {/* Quote */}
        <div className="cs-quote-block px-7 py-6 my-9">
          <div className="font-serif text-xl text-dark leading-[1.5] italic mb-2">
            &ldquo;{study.quote}&rdquo;
          </div>
          <div className="text-[13px] text-mid font-medium">
            — {study.quoteAuthor}
          </div>
        </div>

        {/* Tool Stack */}
        <div className="bg-bg border border-border rounded-[14px] p-6 my-6">
          <div className="text-xs font-semibold text-light uppercase tracking-[0.8px] mb-3.5">
            Tools I Used
          </div>
          <div className="flex flex-wrap gap-2">
            {study.toolStack.map((tool) => (
              <div
                key={tool}
                className="bg-white border border-border rounded-[7px] px-3 py-[5px] text-[12.5px] text-mid flex items-center gap-1.5"
              >
                <div className="w-1.5 h-1.5 bg-blue rounded-full" />
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* Section: What I Built */}
        <h2 className="font-serif text-[26px] text-dark tracking-[-0.5px] mt-12 mb-5 pt-4 border-t border-border">
          What I Built
        </h2>

        {/* Engine Blocks */}
        {study.engines.map((engine, index) => (
          <div
            key={engine.name}
            className="bg-white border border-border rounded-[14px] p-6 my-5"
          >
            <div className="text-[11px] font-bold text-blue uppercase tracking-[0.8px] mb-1.5">
              Engine {String(index + 1).padStart(2, "0")}
            </div>
            <div className="text-[17px] font-semibold text-dark mb-3">
              {engine.name}
            </div>
            {engine.details.map((detail, i) => (
              <p
                key={i}
                className="text-[15px] text-mid leading-[1.75] mb-4 last:mb-0"
              >
                {detail}
              </p>
            ))}
          </div>
        ))}

        {/* What I Got Wrong */}
        <div className="cs-wrong rounded-xl px-6 py-5 my-8">
          <div className="text-xs font-bold text-[#92400E] uppercase tracking-[0.8px] mb-2.5">
            ⚠ What I Got Wrong and Fixed
          </div>
          {study.wrongAndFixed.map((text, i) => (
            <p
              key={i}
              className="text-[15px] text-mid leading-[1.75] mb-0"
            >
              {text}
            </p>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-blue rounded-2xl p-10 text-center mt-16">
          <h3 className="font-serif text-[28px] text-white mb-2">
            Want this for your business?
          </h3>
          <p className="text-sm text-white/65 mb-6">
            Start with 7 days free. I&apos;ll have something live before the
            trial ends.
          </p>
          <a
            href={siteConfig.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-[13px] bg-white text-blue border-none rounded-[9px] text-sm font-bold cursor-pointer font-sans hover:bg-bg transition-all no-underline"
          >
            Start Your Free Trial →
          </a>
        </div>
      </div>
    </div>
  );
}
