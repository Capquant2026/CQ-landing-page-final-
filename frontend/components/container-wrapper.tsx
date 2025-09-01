"use client";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"), {
  ssr: false,
});

const AnalyticsSection = dynamic(
  () => import("@/components/Analytics-section"),
  {
    ssr: false,
    loading: () => (
      <div className="h-96 animate-pulse bg-gray-800/20 rounded-lg" />
    ),
  }
);

const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
});

const ApiSection = dynamic(() => import("@/components/CapquantApi"), {
  ssr: false,
  loading: () => (
    <div className="h-96 animate-pulse bg-gray-800/20 rounded-lg" />
  ),
});

const Contact = dynamic(() => import("@/components/Contact"), {
  ssr: false,
  loading: () => (
    <div className="h-96 animate-pulse bg-gray-800/20 rounded-lg" />
  ),
});

const Security = dynamic(() => import("@/components/Security"), {
  ssr: false,
  loading: () => (
    <div className="h-96 animate-pulse bg-gray-800/20 rounded-lg" />
  ),
});

const LowCode = dynamic(() => import("@/components/Low-code"), {
  ssr: false,
  loading: () => (
    <div className="h-96 animate-pulse bg-gray-800/20 rounded-lg" />
  ),
});

const NoCode = dynamic(() => import("@/components/No-code"), {
  ssr: false,
  loading: () => (
    <div className="h-96 animate-pulse bg-gray-800/20 rounded-lg" />
  ),
});

const ContainerWrapper = () => {
  return (
    <div className="font-sans flex flex-col items-center">
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
};

export default ContainerWrapper;
