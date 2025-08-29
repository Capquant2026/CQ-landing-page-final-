import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Dynamic imports for components that are not immediately visible
// These will be loaded as separate chunks and only when needed
const AnalyticsSection = dynamic(() => import("@/components/Analytics-section"), {
  loading: () => <div className="h-32 animate-pulse bg-gray-800/20 rounded-lg" />,
});

const ApiSection = dynamic(() => import("@/components/CapquantApi"), {
  loading: () => <div className="h-32 animate-pulse bg-gray-800/20 rounded-lg" />,
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="h-32 animate-pulse bg-gray-800/20 rounded-lg" />,
});

const Security = dynamic(() => import("@/components/Security"), {
  loading: () => <div className="h-32 animate-pulse bg-gray-800/20 rounded-lg" />,
});

const LowCode = dynamic(() => import("@/components/Low-code"), {
  loading: () => <div className="h-32 animate-pulse bg-gray-800/20 rounded-lg" />,
});

const NoCode = dynamic(() => import("@/components/No-code"), {
  loading: () => <div className="h-32 animate-pulse bg-gray-800/20 rounded-lg" />,
});

export default function Home() {
  return (
    <div className="bg-[#09090a] font-sans flex flex-col items-center min-h-screen">
      {/* Critical above-the-fold components loaded immediately */}
      <Header />
      <Hero />
      
      {/* Below-the-fold components loaded dynamically */}
      <AnalyticsSection />
      <Security />
      <NoCode />
      <LowCode />
      <ApiSection />
      <Contact />
    </div>
  );
}