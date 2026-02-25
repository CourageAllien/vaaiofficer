import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="bg-dark px-5 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-serif text-lg text-white">{siteConfig.name}</span>
      <span className="text-[13px] text-white/35 text-center">
        I&apos;m a Virtual Assistant. I just build AI engines instead of booking
        flights.
      </span>
      <a
        href={siteConfig.ctaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[13px] text-white/55 cursor-pointer no-underline hover:text-white/80 transition-colors"
      >
        Start Free Trial
      </a>
    </footer>
  );
}
