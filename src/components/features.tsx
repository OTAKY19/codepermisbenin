const features = [
  {
    title: "Quiz interactifs",
    description:
      "Entraîne-toi avec des centaines de questions officielles du code de la route au Bénin. Chaque question inclut une explication détaillée pour comprendre tes erreurs.",
    span: "sm:col-span-2 lg:col-span-4",
    icon: (
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8" />
    ),
  },
  {
    title: "Examens blancs",
    description:
      "Simule les conditions réelles de l'examen avec des quiz chronométrés. Le seuil de réussite de 65% te prépare exactement comme le vrai examen.",
    span: "sm:col-span-1 lg:col-span-2",
    icon: <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 6v6l4 2" />,
  },
  {
    title: "Suivi de progression",
    description:
      "Visualise tes scores, tes séries et tes statistiques détaillées. Identifie tes points faibles et concentre-toi sur les chapitres qui nécessitent le plus d'attention.",
    span: "sm:col-span-1 lg:col-span-2",
    icon: <path d="M18 20V10 M12 20V4 M6 20v-6" />,
  },
  {
    title: "Audio intégré",
    description:
      "Les questions et explications sont accompagnées d'audio pour un apprentissage complet. Idéal pour réviser en déplacement ou en écoutant.",
    span: "sm:col-span-1 lg:col-span-2",
    icon: (
      <path d="M3 18v-6a9 9 0 0 1 18 0v6 M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    ),
  },
  {
    title: "Cours et séries",
    description:
      "Apprends par chapitre avec des cours structurés et des séries ciblées. L'approche progressive te permet de maîtriser chaque sujet avant de passer au suivant.",
    span: "sm:col-span-1 lg:col-span-2",
    icon: (
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    ),
  },
  {
    title: "Révision ciblée",
    description:
      "Revois automatiquement les questions que tu as mal répondues. La révision intelligente te fait répéter les points difficiles jusqu'à leur maîtrise complète.",
    span: "sm:col-span-2 lg:col-span-4",
    icon: (
      <path d="M23 4v6h-6 M1 20v-6h6 M3.51 9a9 9 0 0 1 14.85-3.36L23 10 M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    ),
  },
];

export function Features() {
  return (
    <section className="bg-surface-2 px-5 py-20 md:py-24" id="fonctionnalites">
      <div className="mx-auto max-w-[960px]">
        <div className="text-center mb-14">
          <div className="mb-3 flex items-center justify-center gap-2 font-mono text-[.72rem] font-medium uppercase tracking-[.2em] text-muted">
            <span aria-hidden="true" className="opacity-85">
              {"//"}
            </span>
            <span>Fonctionnalités</span>
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-[580] leading-[1.1] tracking-[-.03em] text-fg">
            Tout ce qu&apos;il faut pour réussir
          </h2>
          <p className="mt-3 max-w-[50ch] mx-auto text-fg-secondary leading-relaxed">
            Une application complète pensée pour les candidats au permis de
            conduire au Bénin.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {features.map((f) => (
            <article
              key={f.title}
              className={`rounded-2xl border border-border bg-surface p-6 ${f.span}`}
            >
              <div
                className="mb-8 flex h-11 w-11 items-center justify-center rounded-[13px] bg-brand-tint text-brand"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  {f.icon}
                </svg>
              </div>
              <h3 className="text-[1.05rem] font-semibold text-fg mb-2">
                {f.title}
              </h3>
              <p className="text-[.92rem] leading-relaxed text-fg-secondary">
                {f.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
