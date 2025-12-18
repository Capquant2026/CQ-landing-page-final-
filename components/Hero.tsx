import { MotionDiv, MotionH1, MotionP } from "./motion-wrapper";

import Dashboard from "./dashboard";
import VideoPlayer from "./video-player";

export default function Hero() {
  return (
    <div className="flex text-[#f7f8f8] overflow-hidden flex-col   items-center  w-full">
      <div className="w-full max-w-[1100px]  mt-20 sm:mt-32 md:mt-40 px-4 sm:px-6 lg:px-8">
        <div className="text-[#f7f8f8] flex mx-auto flex-col gap-1 sm:gap-6 md:gap-1 items-center text-center md:items-center  md:text-start">
          <MotionH1
            initial={{
              y: 10,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl  2xl:text-7xl 
                         leading-tight sm:leading-tight md:leading-[1.1] lg:leading-[1.1] 
                         font-[555] tracking-[-.0325em] text-balance 
                         max-w-full  sm:max-w-3xl md:max-w-4xl md:text-nowrap  lg:max-w-7xl "
          >
            This isn’t software. It’s a collective brain
          </MotionH1>

          <MotionP
            initial={{
              y: 10,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="text-[#8A8F98] text-sm sm:text-base xl:text-2xl 2xl:text-[28px] font-[555]
                        leading-relaxed sm:leading-relaxed md:leading-relaxed mt-2
                        tracking-tight  text-center md:text-center w-full  "
          >
            From idea to live trading in 60 minutes. Co-build the algorithm,
            compete, earn
          </MotionP>
        </div>
      </div>

      <MotionDiv
        initial={{
          y: 10,
          opacity: 0,
          filter: "blur(10px)",
        }}
        animate={{
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          ease: "easeInOut",
        }}
        className="  relative
    lg:scale-100 
    max-w-[500px]  
    sm:max-w-[1000px]  
    
    lg:max-w-[1000px]
    xl:max-w-[1300px] 
    2xl:max-w-[1600px]
    mt-16 px-4 sm:px-6 lg:px-8
     h-[50vh] sm:h-auto
    before:content-[''] 
    before:absolute 
    before:w-[200%] 
    before:h-[80%] 
    before:left-0 
    before:-bottom-[14%] 
    before:bg-gradient-to-t 
    before:from-[#09090a] 
    before:to-transparent 
    before:pointer-events-none 
    before:z-50  "
      >
        <Dashboard />
      </MotionDiv>
      <VideoPlayer />
    </div>
  );
}
