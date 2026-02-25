"use client";

export function Hero() {
  return (
    <section className="pt-16 min-h-screen bg-white relative overflow-hidden">
      <div className="dot-bg" />
      <div className="dot-fade" />

      {/* Hero Content */}
      <div className="relative z-[2] text-center px-5 pt-14 md:pt-20">
        {/* Badge */}
        <div className="animate-fade-up animate-fade-up-1 inline-flex items-center gap-2 bg-white border border-border rounded-full px-3.5 py-[5px] text-xs font-medium text-mid mb-7">
          <div className="w-1.5 h-1.5 bg-blue rounded-full animate-pulse-dot" />
          I&apos;m a Virtual Assistant —{" "}
          <span className="text-blue font-semibold cursor-pointer">
            but not the kind you&apos;re thinking of
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up animate-fade-up-2 font-serif text-[clamp(44px,7vw,80px)] leading-[1.05] text-dark tracking-[-1.5px] max-w-[800px] mx-auto mb-5">
          I Build <em className="italic text-blue">AI Engines</em>
          <br />
          That Run Your Business
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up animate-fade-up-3 text-[17px] text-mid max-w-[480px] mx-auto mb-9 leading-relaxed font-normal">
          You tell me what&apos;s slow or broken. I build the AI engine that
          fixes it. Then it runs — automatically — while you focus on everything
          else.
        </p>

        {/* Buttons */}
        <div className="animate-fade-up animate-fade-up-4 flex items-center justify-center gap-3 mb-16">
          <a
            href="#pricing"
            className="px-7 py-[14px] text-[15px] font-semibold text-white bg-blue border-none rounded-[10px] cursor-pointer font-sans transition-all duration-200 shadow-[0_4px_16px_rgba(37,99,235,0.35)] hover:bg-blue-hover hover:-translate-y-px no-underline"
          >
            Start Free — 7 Days
          </a>
          <a
            href="#case-studies"
            className="px-7 py-[14px] text-[15px] font-medium text-dark bg-white border-[1.5px] border-border rounded-[10px] cursor-pointer font-sans transition-all duration-200 hover:border-light no-underline"
          >
            See What I&apos;ve Built
          </a>
        </div>
      </div>

      {/* Dashboard Mockup */}
      <div className="animate-fade-up animate-fade-up-5 relative max-w-[860px] mx-auto px-5">
        <div className="mockup-shadow">
          {/* Browser Bar */}
          <div className="bg-[#F1F5F9] border-b border-border px-4 py-2.5 flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FC5153]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FDBB2F]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#2BC840]" />
            <div className="ml-3 bg-white border border-border rounded-md px-3 py-[3px] text-[11px] text-light flex-1 max-w-[280px]">
              vaengines.app/dashboard
            </div>
          </div>

          {/* Dashboard Body */}
          <div className="hidden md:grid grid-cols-[200px_1fr_220px] h-[380px]">
            {/* Sidebar */}
            <div className="bg-bg border-r border-border p-4">
              <div className="text-[11px] font-semibold text-light uppercase tracking-[0.8px] mb-3">
                Engines
              </div>
              <div className="flex items-center gap-2 px-2.5 py-2 rounded-[7px] bg-blue text-white text-[12.5px] mb-0.5">
                <div className="w-4 h-4 rounded bg-current opacity-70 shrink-0" />
                Active Engines
              </div>
              {["Outbound", "Operations", "Content", "Retention"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 px-2.5 py-2 rounded-[7px] text-mid text-[12.5px] mb-0.5"
                  >
                    <div className="w-4 h-4 rounded bg-current opacity-30 shrink-0" />
                    {item}
                  </div>
                )
              )}
              <div className="mt-4">
                <div className="text-[11px] font-semibold text-light uppercase tracking-[0.8px] mb-3">
                  Reports
                </div>
                {["Weekly Brief", "Analytics"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 px-2.5 py-2 rounded-[7px] text-mid text-[12.5px] mb-0.5"
                  >
                    <div className="w-4 h-4 rounded bg-current opacity-30 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="p-5 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm font-semibold text-dark">
                    Your AI Operations
                  </div>
                  <div className="text-[11px] text-light">
                    5 engines active · Last built 2 hours ago
                  </div>
                </div>
                <div className="bg-[#F1F5F9] rounded-[7px] px-3 py-1.5 text-[11px] text-[#64748B] font-semibold">
                  Feb 2026
                </div>
              </div>

              {/* Stat Cards */}
              <div className="grid grid-cols-3 gap-2.5 mb-4">
                {[
                  {
                    label: "Hours Saved",
                    value: "142",
                    tag: "↑ +14 this week",
                  },
                  {
                    label: "Engines Live",
                    value: "5",
                    tag: "↑ +1 building",
                  },
                  {
                    label: "Outputs Today",
                    value: "38",
                    tag: "↑ All running",
                  },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="bg-white border border-border rounded-[10px] p-3"
                  >
                    <div className="text-[10px] text-light mb-1">
                      {card.label}
                    </div>
                    <div className="text-xl font-bold text-dark font-serif">
                      {card.value}
                    </div>
                    <div className="text-[10px] text-green font-semibold mt-0.5">
                      {card.tag}
                    </div>
                  </div>
                ))}
              </div>

              {/* Engine List */}
              <div className="flex flex-col gap-2">
                {[
                  {
                    name: "Cold Outbound Engine",
                    status: "1,200 emails sent",
                    badge: "Running",
                    dotColor: "bg-green",
                    badgeColor: "bg-[#DCFCE7] text-[#166534]",
                  },
                  {
                    name: "Content Cycle",
                    status: "Next post: 2hrs",
                    badge: "Scheduled",
                    dotColor: "bg-blue",
                    badgeColor: "bg-blue-mid text-[#1E40AF]",
                  },
                  {
                    name: "Customer Re-engagement",
                    status: "14 triggered today",
                    badge: "Active",
                    dotColor: "bg-orange",
                    badgeColor: "bg-[#FEF3C7] text-[#92400E]",
                  },
                ].map((engine) => (
                  <div
                    key={engine.name}
                    className="bg-white border border-border rounded-lg px-3 py-2.5 flex items-center gap-2.5"
                  >
                    <div
                      className={`w-2 h-2 rounded-full shrink-0 ${engine.dotColor}`}
                    />
                    <div className="text-xs font-medium text-dark flex-1">
                      {engine.name}
                    </div>
                    <div className="text-[10px] text-light">
                      {engine.status}
                    </div>
                    <div
                      className={`text-[10px] font-semibold px-[7px] py-0.5 rounded ${engine.badgeColor}`}
                    >
                      {engine.badge}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel */}
            <div className="border-l border-border p-4 bg-white">
              <div className="text-xs font-semibold text-dark mb-3">
                Live Activity
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex gap-2 items-start">
                  <div className="w-[26px] h-[26px] rounded-full bg-blue flex items-center justify-center text-[10px] font-bold text-white shrink-0">
                    AI
                  </div>
                  <div>
                    <div className="text-[11px] text-mid leading-[1.4]">
                      Outbound engine sent 47 emails this morning
                    </div>
                    <div className="text-[10px] text-light mt-0.5">
                      2 min ago
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div className="flex gap-2 items-start">
                  <div className="w-[26px] h-[26px] rounded-full bg-green flex items-center justify-center text-[10px] font-bold text-white shrink-0">
                    VA
                  </div>
                  <div>
                    <div className="text-[11px] text-mid leading-[1.4]">
                      Weekly content drafted and scheduled for review
                    </div>
                    <div className="text-[10px] text-light mt-0.5">
                      1 hr ago
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div className="bg-bg rounded-[7px] p-2.5 text-[11px] text-mid leading-[1.5]">
                  <div className="text-[10px] font-semibold text-blue mb-1">
                    📊 Monday Report
                  </div>
                  Revenue up 22% · 3 hrs saved daily · 4 new leads replied
                </div>
              </div>
            </div>
          </div>

          {/* Mobile simplified mockup */}
          <div className="md:hidden p-6">
            <div className="text-sm font-semibold text-dark mb-3">
              Your AI Operations
            </div>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { label: "Hours Saved", value: "142" },
                { label: "Engines Live", value: "5" },
                { label: "Outputs", value: "38" },
              ].map((card) => (
                <div
                  key={card.label}
                  className="bg-bg border border-border rounded-lg p-3 text-center"
                >
                  <div className="text-[10px] text-light mb-1">
                    {card.label}
                  </div>
                  <div className="text-lg font-bold text-dark font-serif">
                    {card.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {[
                { name: "Cold Outbound Engine", badge: "Running" },
                { name: "Content Cycle", badge: "Scheduled" },
                { name: "Re-engagement", badge: "Active" },
              ].map((e) => (
                <div
                  key={e.name}
                  className="bg-bg border border-border rounded-lg px-3 py-2 flex items-center justify-between text-xs"
                >
                  <span className="text-dark font-medium">{e.name}</span>
                  <span className="text-green font-semibold">{e.badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
