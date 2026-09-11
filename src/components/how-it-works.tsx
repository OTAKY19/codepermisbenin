const steps = [
  {
    number: "01",
    title: "Active ton accès",
    description:
      "Entre le code d'activation fourni par ton auto-école pour accéder à tout le contenu.",
  },
  {
    number: "02",
    title: "Entraîne-toi",
    description:
      "Révise par chapitres avec les quiz, les séries et les examens blancs chronométrés.",
  },
  {
    number: "03",
    title: "Suis tes progrès",
    description:
      "Identifie tes points faibles grâce aux statistiques et concentre tes efforts là où il faut.",
  },
];

export function HowItWorks() {
  return (
    <section className="px-5 py-20 md:py-24" id="etapes">
      <div className="mx-auto max-w-[960px]">
        <div className="mb-14 max-w-[560px]">
          <div className="mb-3 flex items-center gap-2 font-mono text-[.72rem] font-medium uppercase tracking-[.2em] text-brand">
            <span aria-hidden="true" className="opacity-85">
              {"//"}
            </span>
            <span>Comment ça marche</span>
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-[580] leading-[1.1] tracking-[-.03em] text-fg">
            Prépare ton permis simplement.
          </h2>
          <p className="mt-3 text-fg-secondary leading-relaxed">
            Tout ce dont tu as besoin pour progresser régulièrement jusqu&apos;à
            l&apos;examen.
          </p>
        </div>

        <ol className="grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.number}
              className="flex flex-col rounded-2xl border border-border bg-surface p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-tint text-sm font-bold text-brand">
                {step.number}
              </div>
              <h3 className="mb-2 mt-9 text-[1.15rem] font-semibold tracking-[-.01em] text-fg">
                {step.title}
              </h3>
              <p className="text-[.92rem] leading-relaxed text-fg-secondary">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
