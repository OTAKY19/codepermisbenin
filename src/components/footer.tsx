export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center font-mono text-[.72rem] font-medium uppercase tracking-[.14em] text-muted">
        <nav className="flex flex-wrap items-center justify-center gap-5" aria-label="Liens légaux">
          <a href="/privacy" className="transition-colors hover:text-fg">Confidentialité</a>
          <a href="/eula" className="transition-colors hover:text-fg">Conditions</a>
          <a href="mailto:privacy@btcbenin.com" className="transition-colors hover:text-fg">Contact</a>
        </nav>
        <p className="flex items-center gap-1.5">
          <span
            aria-hidden="true"
            className="text-muted"
          >
            ♥
          </span>
          <span className="sr-only">Amour</span>
          © 2026 BÉNIN TECHNOLOGIE CONSULTING · Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
