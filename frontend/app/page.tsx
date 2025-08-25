import AnalyticsSection from "@/components/Analytics-section";
import ApiSection from "@/components/CapquantApi";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Insight from "@/components/insight-section";
import LowCode from "@/components/Low-code";
import NoCode from "@/components/No-code";
import Security from "@/components/Security";

export default function Home() {
  return (
    <div className="bg-[#09090a]  font-sans flex flex-col items-center  min-h-screen ">
      <Header />
      <Hero />
      <AnalyticsSection />
      <Security />
      {/* <Insight /> */}
      <NoCode />
      <LowCode />
      <ApiSection />
      <Contact />
    </div>
  );
}
