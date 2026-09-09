import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-5 py-20">
        <div className="text-center">
          <div className="mb-4 text-6xl">🔍</div>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-[580] text-fg mb-3">
            Page introuvable
          </h1>
          <p className="text-fg-secondary mb-8 max-w-[40ch] mx-auto">
            La page que tu cherches n&apos;existe pas ou a été déplacée.
          </p>
          <Link href="/" className="btn btnPrimary">
            Retour à l&apos;accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
