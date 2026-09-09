import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { SocialProof } from "@/components/social-proof";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <SocialProof />
        <Features />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
