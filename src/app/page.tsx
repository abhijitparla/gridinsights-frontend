import ExtendedFeatures from "@/components/ExtendedFeatures";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Features />
      {/* <ExtendedFeatures /> */}
      <Testimonials />
      <GetStarted />
      <FAQ />
      <Footer />
    </main>
  );
}
