import { ScrollUp } from "@/components/scroll-up";
import { MoveUp } from "lucide-react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"), {
  ssr: true,
});

const AnalyticsSection = dynamic(
  () => import("@/components/Analytics-section"),
  {
    ssr: true,
    loading: () => (
      <div className="h-96 animate-pulse bg-gray-800/20 rounded-lg" />
    ),
  }
);

const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: true,
});

const ApiSection = dynamic(() => import("@/components/CapquantApi"), {
  ssr: true,
  loading: () => (
    <div className="h-96 animate-pulse bg-gray-800/20 rounded-lg" />
  ),
});

const Contact = dynamic(() => import("@/components/Contact"), {
  ssr: true,
  loading: () => (
    <div className="h-96 animate-pulse bg-gray-800/20 rounded-lg" />
  ),
});

const Security = dynamic(() => import("@/components/Security"), {
  ssr: true,
  loading: () => (
    <div className="h-96 animate-pulse bg-gray-800/20 rounded-lg" />
  ),
});

const LowCode = dynamic(() => import("@/components/Low-code"), {
  ssr: true,
  loading: () => (
    <div className="h-96 animate-pulse bg-gray-800/20 rounded-lg" />
  ),
});

const NoCode = dynamic(() => import("@/components/No-code"), {
  ssr: true,
  loading: () => (
    <div className="h-96 animate-pulse bg-gray-800/20 rounded-lg" />
  ),
});

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center">
      <ScrollUp />
      <Header />
      <Hero />
      <AnalyticsSection />
      <Security />
      <NoCode />
      <LowCode />
      <ApiSection />
      <Contact />
    </div>
  );
}
