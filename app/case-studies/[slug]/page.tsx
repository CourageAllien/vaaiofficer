import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/data/case-studies";
import { CaseStudyDetail } from "@/components/CaseStudyDetail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.company} — VA AI Officer Case Study`,
    description: study.shortVersion,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyDetail study={study} />;
}

