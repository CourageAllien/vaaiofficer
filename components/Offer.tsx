"use client";

import { ScrollReveal } from "./ScrollReveal";
import { siteConfig } from "@/data/site-config";

export function Offer() {
  return (
    <div id="pricing">
      <div className="py-20 md:py-[100px] px-5 md:px-10">
        <div className="max-w-[1080px] mx-auto">
          <ScrollReveal>
            <div className="bg-dark rounded-3xl p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center relative overflow-hidden offer-glow">
              {/* Left side */}
              <div>
                <div className="text-[11px] font-semibold text-white/40 uppercase tracking-[1.2px] mb-4">
                  The Offer
                </div>
                <div className="font-serif text-[36px] md:text-[42px] text-white leading-[1.1] tracking-[-1px] mb-4">
                  One VA.
                  <br />
                  Unlimited
                  <br />
                  Engines.
                </div>
                <div className="text-[15px] text-white/55 leading-[1.65] mb-8">
                  I embed in your business, learn your operation, and build the AI
                  systems that run it — month after month. You don&apos;t hire a
                  team. You get a one-person AI operation.
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    "Not a freelancer who builds one thing and disappears",
                    "Not a course that teaches you to do it yourself",
                    "An embedded VA who keeps building every month",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-white/60"
                    >
                      <div className="w-1.5 h-1.5 bg-green rounded-full shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - Price card */}
              <div className="bg-white/[0.06] border border-white/10 rounded-[18px] p-9">
                <div className="text-xs font-semibold text-white/45 uppercase tracking-[0.8px] mb-2">
                  Start Free
                </div>
                <div className="font-serif text-[56px] text-white tracking-[-2px] leading-none mb-1">
                  7 Days
                </div>
                <div className="text-sm text-white/40 mb-7">
                  Then $549/month — cancel anytime
                </div>
                <div className="flex flex-col gap-2.5 mb-7">
                  {[
                    "First engine live within 48–72hrs",
                    "Full operation audit included",
                    "I build, deploy & QC everything",
                    "New engines added every month",
                    "No contracts. No upsells.",
                  ].map((feat) => (
                    <div
                      key={feat}
                      className="flex items-center gap-2.5 text-[13.5px] text-white/70"
                    >
                      <div className="w-[18px] h-[18px] bg-blue rounded-full flex items-center justify-center shrink-0 text-[10px] text-white">
                        ✓
                      </div>
                      {feat}
                    </div>
                  ))}
                </div>
                <a
                  href={siteConfig.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-[15px] bg-blue text-white border-none rounded-[10px] text-[15px] font-semibold cursor-pointer font-sans transition-all duration-200 shadow-[0_4px_20px_rgba(37,99,235,0.4)] hover:bg-blue-hover hover:-translate-y-px text-center no-underline"
                >
                  Start Your Free Trial →
                </a>
                <div className="text-center text-[11.5px] text-white/30 mt-3">
                  No credit card required · Cancel before day 7 and pay nothing
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
