import { MotionDiv, MotionH2, MotionP } from "./motion-wrapper";
import Notification from "./notifications";
import { DeploymentVisual } from "./Deployment-visual";

export default function AnalyticsSection() {
  return (
    <div
      className="text-[#f7f8f8] flex flex-col items-center justify-start w-full mt-40"
      style={{
        background: "linear-gradient(to bottom, #ffffff0d, transparent 20%)",
      }}
    >
      <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-20 sm:py-32 md:py-40">
        <div className="flex flex-col items-center text-center md:items-start md:text-start">
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
              staggerChildren: 0.1,
            }}
            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                         leading-tight sm:leading-tight md:leading-[1.1] lg:leading-[1.1] 
                         font-[555] tracking-[-.0325em] text-balance 
                         max-w-full sm:max-w-3xl md:max-w-4xl  lg:max-w-5xl"
          >
            Submit multi-asset predictions. test live. collect rewards
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
            className="font-[510] px-4 tracking-[-0.011em]   text-[#8a8f98] w-full md:w-4/6 text-xl mt-5"
          >
            Deploy your predictions across any asset and timeframe. Our
            forward-testing engine runs live
          </MotionP>
        </div>

        <MotionDiv
          initial={{
            y: 60,
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1.2,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="lg:mt-10  flex flex-col md:flex-row h-72 items-center mt-40 justify-center "
        >
          <DeploymentVisual />
          <div className="md:w-1/2 w-full h-full p-4 border-t border-b border-zinc-800/60 border-b-zinc-800/80 border-l border-l-zinc-800/80">
            <div
              className="p-4 rounded-lg h-full relative border-t border-l border-t-[#ffffff1a] border-l-[#ffffff1a] flex items-center justify-center flex-col transition-all duration-150 ease-in-out"
              style={{
                background:
                  "linear-gradient(to bottom right,hsla(0,0%,100%,.07),transparent)",
              }}
            >
              <div className="w-full h-full bg-gradient-to-l from-[#0d0e0f] inset-0 absolute z-10 opacity-70" />
              <Notification />
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}
