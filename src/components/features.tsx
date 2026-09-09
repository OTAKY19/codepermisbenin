export function Features() {
  const features = [
    {
      icon: "📝",
      title: "Quiz interactifs",
      description:
        "Entraîne-toi avec des centaines de questions officielles du code de la route au Bénin. Chaque question inclut une explication détaillée pour comprendre tes erreurs.",
    },
    {
      icon: "⏱️",
      title: "Examens blancs",
      description:
        "Simule les conditions réelles de l'examen avec des quiz chronométrés. Le seuil de réussite de 65% te prépare exactement comme le vrai examen.",
    },
    {
      icon: "📊",
      title: "Suivi de progression",
      description:
        "Visualise tes scores, tes séries et tes statistiques détaillées. Identifie tes points faibles et concentre-toi sur les chapitres qui nécessitent le plus d'attention.",
    },
    {
      icon: "🎧",
      title: "Audio intégré",
      description:
        "Les questions et explications sont accompagnées d'audio pour un apprentissage complet. Idéal pour réviser en déplacement ou en écoutant.",
    },
    {
      icon: "📚",
      title: "Cours et séries",
      description:
        "Apprends par chapitre avec des cours structurés et des séries ciblées. L'approche progressive te permet de maîtriser chaque sujet avant de passer au suivant.",
    },
    {
      icon: "🔄",
      title: "Révision ciblée",
      description:
        "Revois automatiquement les questions que tu as mal répondues. La révision intelligente te fait répéter les points difficiles jusqu'à leur maîtrise complète.",
    },
  ];

  return (
    <section className="py-20 px-5" id="fonctionnalites">
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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:border-border-hover hover:shadow-[var(--shadow-md)]"
            >
              <div className="mb-3 text-2xl" aria-hidden="true">
                {f.icon}
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
