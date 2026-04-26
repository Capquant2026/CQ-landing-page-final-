import { MotionDiv, MotionH1, MotionP } from "./motion-wrapper";

import Dashboard from "./dashboard";
import VideoPlayer from "./video-player";

export default function Hero() {
  return (
    <div className="flex text-[#f7f8f8] overflow-hidden flex-col   items-center w-full">
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
  className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl
             leading-tight sm:leading-tight md:leading-[1.1] lg:leading-[1.1]
             font-[555] tracking-[-.0325em] text-balance
             max-w-full sm:max-w-3xl md:max-w-4xl md:text-nowrap lg:max-w-7xl
             text-center"
>
From idea to markets{" "}
<span style={{ backgroundColor: "#555555", padding: 0, borderRadius: 0 }}>
  in 60 minutes.
</span>
<br />
  Co-build the algorithm. compete. earn.
</MotionH1>
          
{/*
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
            From idea to markets in 60 minutes. Co-build the algorithm.
            compete. earn.
          </MotionP>
*/}
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
        className=" 
    relative 
    flex
    lg:scale-[1.1] 
    scale-[1.35]
    md:scale-[1.175]
    max-w-full  
    overflow-hidden
    sm:max-w-[1000px]  
    sm:min-w-full
    md:max-w-[1000px]
    lg:max-w-[1000px]
    xl:max-w-[1300px] 
    2xl:max-w-[1600px]
    mt-35
    md:mt-27
    lg:mt-20
    px-0 sm:px-2 md:px-6 lg:px-8
    h-auto
    ml-30
    md:ml-15
    lg:ml-[40%]
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
    before:z-50
     "
      >
        {/* Premium gradient mask — radial reveal + edge darkening */}
        <div
          className="absolute -inset-x-[50vw] -top-[3rem] sm:-top-17 -bottom-4 z-80 pointer-events-none opacity-100"
          style={{
            background: `
              radial-gradient(ellipse 45% 75% at 15% 30%, transparent 0%, rgba(9,9,10,0.20) 60%, rgba(9,9,10,0.95) 100%),
              linear-gradient(to left, rgba(9,9,10,0.5) 0%, rgba(9,9,10,0.5) 10%, transparent 30%),
              linear-gradient(to top, rgba(9,9,10,0.5) 0%, rgba(9,9,10,0.3) 5%, transparent 30%)
            `,
          }}
        />
        <Dashboard />
      </MotionDiv>
    </div>
  );
}