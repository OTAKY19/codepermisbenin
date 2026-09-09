export function SocialProof() {
  const stats = [
    { value: "10 000+", label: "Élèves formés" },
    { value: "4.9/5", label: "Note Google Play" },
    { value: "900+", label: "Questions audio" },
    { value: "65%", label: "Taux de réussite visé" },
  ];

  return (
    <section className="py-16 px-5 border-t border-border">
      <div className="mx-auto max-w-[960px]">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-[clamp(1.5rem,3vw,2.2rem)] font-[600] tracking-[-.02em] text-fg">
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
