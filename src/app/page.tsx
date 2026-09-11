import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { FinalCta } from "@/components/final-cta";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <SocialProof />
        <HowItWorks />
        <Features />
        <FinalCta />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
