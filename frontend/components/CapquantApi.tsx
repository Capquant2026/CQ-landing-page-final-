

import GetCode from "./ui/get-code";
import PostCode from "./ui/post-code";
import { State } from "./state";
import { MotionDiv, MotionH2, MotionP } from "./motion-wrapper";

export default function ApiSection() {
  return (
    <div
      className="text-[#f7f8f8] flex flex-col 
               px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 
               py-8 sm:py-16 md:py-24 lg:py-32 xl:py-40
               w-full 
               mt-10 sm:mt-20 md:mt-32 lg:mt-40 
               bg-gradient-to-b from-[#141516] to-[#08090A]"
      style={{
        background: "linear-gradient(to bottom, #ffffff0d, transparent 20%)",
      }}
    >
      <MotionDiv
        initial={{
          y: 30,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          
        }}
        className="flex self-center items-start w-full max-w-6xl flex-col"
      >
        <MotionH2
          initial={{
            y: 30,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                   leading-tight sm:leading-tight md:leading-[1.1] lg:leading-[1.1] 
                   font-[538] tracking-[-.0325em] text-balance text-center sm:text-left
                   max-w-full  px-4 sm:px-0"
        >
          Pro-Code: the CapQuant API
        </MotionH2>

        <MotionP
          initial={{
            y: 30,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            
          }}
          className="font-[510] tracking-[-0.011em] text-[#8a8f98] 
                   w-full sm:w-3/4 lg:w-[80%]
                   px-4 sm:px-0 text-center sm:text-left
                  md:w-full mt-5 text-xl"
        >
          <span className="">
            Full access to our <strong>SDK</strong> and advanced coding
            environment, with complete <strong>API</strong> control
          </span>
          <span className="text-nowrap">
            {" "}
            Built for quant researchers and data scientists who demand
            institutional-grade precision.
          </span>
        </MotionP>
      </MotionDiv>

      <div className="flex flex-col lg:flex-row w-full gap-5 items-center justify-center lg:mt-10">
        <PostCode />
        <GetCode />
      </div>
      <State />
    </div>
  );
}
