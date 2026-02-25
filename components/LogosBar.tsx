export function LogosBar() {
  const logos = [
    "Kev's Kitchen",
    "Zortcloud",
    "Bizal",
    "Bulletproof Mgmt",
    "GD&D Architects",
    "Bene Optics",
  ];

  return (
    <div className="bg-white border-t border-b border-border py-7 px-5 md:px-10 flex items-center justify-center gap-8 md:gap-16 overflow-x-auto">
      {logos.map((name) => (
        <div
          key={name}
          className="text-[13px] font-bold text-light tracking-[-0.3px] whitespace-nowrap flex items-center gap-1.5"
        >
          <span className="inline-block w-1.5 h-1.5 bg-[#CBD5E1] rounded-full" />
          {name}
        </div>
      ))}
    </div>
  );
}

