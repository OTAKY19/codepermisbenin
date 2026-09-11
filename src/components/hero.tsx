export function Hero() {
  return (
    <section className="relative pt-[80px] pb-[80px] md:pt-[100px] md:pb-[100px]">
      <div className="relative z-10 mx-auto max-w-[960px] px-5">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_2fr] md:gap-10">
          {/* Colonne démo */}
          <figure
            className="fadeUp order-2 mx-auto w-[260px] md:order-1 md:mx-0 md:w-full md:max-w-[460px]"
            style={{ animationDelay: "0ms" }}
            aria-label="Aperçu de l'application sur iPhone"
          >
            <div
              className="relative aspect-[540/1170] rounded-[2.8rem] bg-[#1a1a1a] p-[8px] shadow-[0_28px_48px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.06)_inset]"
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
                  width={1080}
                  height={2340}
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
          <div className="order-1 flex flex-col items-center text-center md:order-2 md:items-start md:text-left">
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
              <span className="text-brand">du premier coup.</span>
            </h1>

            <p
              className="fadeUp mt-4 max-w-[42ch] font-light leading-relaxed text-fg-secondary tracking-[-.005em] md:text-lg"
              style={{ animationDelay: "160ms" }}
            >
              Prépare-toi à l&apos;examen avec des quiz, des examens blancs et
              un suivi de progression.
            </p>

            {/* Preuve vérifiable */}
            <p
              className="fadeUp mt-5 text-sm text-muted"
              style={{ animationDelay: "220ms" }}
            >
              Questions officielles du code de la route béninoise, avec audio.
            </p>

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
