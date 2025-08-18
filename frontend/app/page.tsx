import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#09090a] overflow-hidden font-sans flex flex-col items-center  min-h-screen ">
      <Header />
        <Hero />
      
    </div>
  );
}
