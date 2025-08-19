import Dashboard from "./dashboard";
import { IoMdPlay } from "react-icons/io";
import { Button } from "./ui/button";

export default function Hero() {
  const titleContent = "Your Models Verified Alpha".split(" ");

  return (
    <div className="flex text-[#f7f8f8] flex-col items-center min-h-screen w-full px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1100px] mt-20 sm:mt-32 md:mt-40">
        <div className="text-[#f7f8f8] flex mx-auto flex-col gap-1 sm:gap-6 md:gap-1 items-center text-center md:items-start md:text-start">
          <h1
            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                         leading-tight sm:leading-tight md:leading-[1.1] lg:leading-[1.1] 
                         font-semibold tracking-tight text-balance 
                         max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl "
          >
            <span className="flex flex-wrap items-start  justify-start gap-1  sm:gap-3 ">
              {titleContent.map((item: string, index: number) => (
                <span key={index} className="whitespace-nowrap">
                  {item}
                </span>
              ))}
            </span>
            <span className="flex flex-wrap items-start justify-start gap-1 sm:gap-3">
              {"60 min Execution Loop".split(" ").map((item, index) => (
                <span key={index} className="whitespace-nowrap">
                  {item}
                </span>
              ))}
            </span>
          </h1>

          <p
            className="opacity-70 text-sm sm:text-base md:text-lg 
                        leading-relaxed sm:leading-relaxed md:leading-relaxed 
                        tracking-tight  md:text-left w-full md:w-1/2 
                        max-w-1/2  
                        px-2 sm:px-4 md:px-0"
          >
            CapQuant is where data-driven expertise generates market-beating
            performance. Submit your predictive models, score the real time
            effectiveness, and earn for even validated outperformance.
          </p>

          {/* CTA Button */}
          <div className="mt-4 sm:mt-6 md:mt-8">
            <Button
              variant="outline"
              className="text-black bg-white hover:bg-gray-100 cursor-pointer 
                         px-6 sm:px-8 py-2 sm:py-3 
                         text-sm sm:text-base font-medium
                         transition-all duration-200 
                         hover:scale-105 active:scale-95"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>

      <div className=" w-full max-w-[1400px]   mt-16 sm:mt-20 md:mt-24 lg:mt-32">
        <Dashboard />
      </div>

      <div className="w-full  flex items-center justify-center max-w-[1100px] mt-16 sm:mt-20 md:mt-24">
        <div className="w-full flex flex-col items-center justify-center p-8 sm:p-16 md:p-24 lg:p-32 xl:p-52 bg-gradient-to-b from-[#141516] to-[#08090A] rounded-2xl shadow-2xl min-h-[300px] sm:min-h-[400px]">
          <button
            className="group relative cursor-pointer w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center bg-[#f7f8f8] hover:bg-[#5E6AD2] text-black hover:text-white rounded-full overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#5E6AD2]/50"
            aria-label="Play demo video"
          >
            <IoMdPlay className="text-3xl sm:text-4xl md:text-5xl transition-transform duration-300 group-hover:text-black relative z-50" />
            <div className="absolute inset-0 bg-[#5E6AD2] scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out rounded-full"></div>
          </button>
          <p className="mt-4 text-sm font-light sm:text-base md:text-lg text-gray-400 tracking-tight">
            Video Integration Placeholder
          </p>
          <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl  text-white tracking-tight">
            Click to Play Demo Video
          </h2>
        </div>
      </div>
    </div>
  );
}
