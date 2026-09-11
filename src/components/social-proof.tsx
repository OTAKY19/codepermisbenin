export function SocialProof() {
  const stats = [
    { value: "900+", label: "Questions audio" },
    { value: "30", label: "Questions par examen" },
    { value: "65%", label: "Seuil officiel de réussite" },
    { value: "7", label: "Quiz gratuits à l'inscription" },
  ];

  return (
    <section className="py-16 px-5 border-t border-border">
      <div className="border-y border-border">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex min-h-[110px] flex-col items-center justify-center px-4 py-8 text-center ${
                i > 0 ? "border-l border-border" : ""
              } ${i > 1 ? "max-md:border-t max-md:border-border max-md:[&:nth-child(odd)]:border-l-0" : ""}`}
            >
              <div className="text-[clamp(1.6rem,3vw,2.2rem)] font-[640] tracking-[-.03em] text-brand">
                {stat.value}
              </div>
              <div className="mt-1 text-[.82rem] font-medium text-muted uppercase tracking-[.08em]">
                {stat.label}
              </div>
            </div>
          ))}
          </div>
      </div>
    </section>
  );
}
