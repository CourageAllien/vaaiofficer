import { Hero } from "@/components/Hero";
import { LogosBar } from "@/components/LogosBar";
import { WhatIBuild } from "@/components/WhatIBuild";
import { HowItWorks } from "@/components/HowItWorks";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { Offer } from "@/components/Offer";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <LogosBar />
      <WhatIBuild />
      <HowItWorks />
      <CaseStudiesSection />
      <Offer />
      <FAQ />
    </>
  );
}

