export function Hero() {
  return (
    <section className="relative pt-[80px] pb-[80px] md:pt-[100px] md:pb-[100px]">
      {/* Lueur derrière le téléphone */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-[22%] z-0 hidden h-[420px] w-[420px] rounded-full opacity-50 blur-[100px] md:block"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[960px] px-5">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_2fr] md:gap-10">
          {/* Colonne démo */}
          <figure
            className="fadeUp mx-auto w-[260px] md:order-1 md:mx-0 md:w-full md:max-w-[460px]"
            style={{ animationDelay: "0ms" }}
            aria-label="Aperçu de l'application sur iPhone"
          >
            <div
              className="relative aspect-[540/1100] rounded-[2.8rem] bg-[#1a1a1a] p-[8px] shadow-[0_28px_48px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.06)_inset]"
              style={{
                animation: "demoFloat 10s var(--ease-ios) infinite",
              }}
            >
              {/* Dynamic Island */}
              <div className="absolute left-1/2 top-[18px] z-30 flex -translate-x-1/2 items-center gap-2">
                <div className="h-[26px] w-[90px] rounded-full bg-black" />
              </div>

              {/* Screenshot — padded top to avoid dynamic island overlap */}
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-[#ECEFF4] pt-[32px]" style={{ transform: "translateZ(0)" }}>
                <img
                  src="/screenshot-app.jpg"
                  alt="Aperçu de l'application Code Permis Bénin"
                  width={540}
                  height={1100}
                  className="h-full w-full object-cover object-top"
                  loading="eager"
                />
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-[10px] left-1/2 z-30 -translate-x-1/2">
                <div className="h-[5px] w-[120px] rounded-full bg-white/40" />
              </div>
            </div>
          </figure>

          {/* Colonne contenu */}
          <div className="flex flex-col items-center text-center md:order-2 md:items-start md:text-left">
            <div
              className="fadeUp mb-3 flex items-center gap-2 font-mono text-[.72rem] font-medium uppercase tracking-[.2em] text-muted"
              style={{ animationDelay: "0ms" }}
            >
              <span aria-hidden="true" className="opacity-85">
                {"//"}
              </span>
              <span>Application de code</span>
            </div>

            <h1
              className="fadeUp text-[clamp(2.9rem,6.2vw,4.75rem)] font-[580] leading-[1.02] tracking-[-.04em] text-fg"
              style={{ animationDelay: "80ms" }}
            >
              Réussis ton code
              <br />
              du premier coup.
            </h1>

            <p
              className="fadeUp mt-4 max-w-[42ch] font-light leading-relaxed text-fg-secondary tracking-[-.005em] md:text-lg"
              style={{ animationDelay: "160ms" }}
            >
              Prépare-toi à l&apos;examen avec des quiz, des examens blancs et
              un suivi de progression.
            </p>

            {/* Stars */}
            <div
              className="fadeUp mt-5 flex items-center gap-2.5 text-sm"
              style={{ animationDelay: "220ms" }}
            >
              <div
                className="relative flex"
                role="img"
                aria-label="Noté 4.9 sur 5"
                style={{ animation: "starsBreathing 4s ease-in-out infinite" }}
              >
                {/* Stars base (gris) */}
                <div className="flex" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={`base-${i}`}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-[18px] w-[18px] text-muted"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.77.56l-4.619-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                  ))}
                </div>
                {/* Stars fill (amber) with clip animation */}
                <div
                  className="absolute inset-0 flex"
                  aria-hidden="true"
                  style={{
                    animation: "starsReveal 1.2s var(--ease-out-soft) 600ms both",
                    clipPath: "inset(0 100% 0 0)",
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={`fill-${i}`}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-[18px] w-[18px] text-amber-400"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.77.56l-4.619-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                  ))}
                </div>
              </div>
              <span className="font-mono text-xs font-semibold text-fg">
                4.9
              </span>
              <span aria-hidden="true" className="text-muted">
                ·
              </span>
              <span className="text-muted">Google Play</span>
            </div>

            {/* Boutons */}
            <div
              className="fadeUp mt-7 flex flex-col items-center gap-3 sm:flex-row"
              style={{ animationDelay: "280ms" }}
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.codepermisbenin.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btnPrimary"
              >
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                Google Play
              </a>
              <a href="/eula" className="btn btnSubtle text-sm">
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
