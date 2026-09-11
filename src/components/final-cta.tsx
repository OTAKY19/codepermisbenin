export function FinalCta() {
  return (
    <section className="px-5 pb-24 pt-6 md:pb-28">
      <div className="finalCta mx-auto max-w-[880px] overflow-hidden rounded-[2.2rem] px-8 py-16 text-center md:py-20">
        <h2 className="text-[clamp(1.9rem,4.5vw,3rem)] font-[580] leading-[1.05] tracking-[-.03em] text-white">
          Ton permis commence ici.
        </h2>
        <p className="mx-auto mt-4 max-w-[46ch] leading-relaxed text-white/80">
          Prépare ton examen, entraîne-toi régulièrement et arrive le jour J
          avec confiance.
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.codepermisbenin.app"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-2xl bg-[#d9ff48] px-7 text-[.95rem] font-bold text-[#1a3308] transition-transform duration-200 hover:-translate-y-0.5"
        >
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
          </svg>
          Télécharger sur Google Play
        </a>
      </div>
    </section>
  );
}
