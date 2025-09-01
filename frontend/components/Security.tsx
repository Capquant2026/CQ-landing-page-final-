import rightLock from "../public/right-Lock.svg";
import Image from "next/image";
import { MotionDiv, MotionH2, MotionP } from "./motion-wrapper";
export default function Insight() {
  return (
    <div
      className="text-[#f7f8f8] flex flex-col items-center justify-start w-full mt-40"
      style={{
        background: "linear-gradient(to bottom, #ffffff0d, transparent 20%)",
      }}
    >
      <div className="w-full max-w-[1200px]  px-4 sm:px-6 lg:px-8 py-20 sm:py-32 md:py-40">
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
                         max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl"
          >
            Security & Encryption
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
            className="font-[510] tracking-[-0.011em] text-[#8a8f98] md:w-[55%] text-xl mt-5"
          >
            Your models stay protected with full encryption on both ends, secure
            APIs, and complete IP safeguarding
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
          className="w-full flex items-center relative justify-center max-w-[1100px] mt-16 lg:mt-10"
        >
          <MotionDiv
            className={`w-full before:content-[""] before:absolute    before:w-full before:bg-gradient-to-t  md:flex-row before:inset-0 before:from-[#09090a] before:opacity-50 before:to-transparent before:z-50 before:h-full flex items-center justify-center p-4 bg-gradient-to-b from-[#141516] via-[#0f1011] to-[#08090A] rounded-2xl shadow-2xl border border-white/5 backdrop-blur-sm min-h-[300px] sm:min-h-[400px] relative overflow-hidden`}
            transition={{
              delay: 0.3,
              duration: 1.2,
              ease: [0.215, 0.61, 0.355, 1],
            }}
          >
            <svg
              className="z-10"
              xmlns="http://www.w3.org/2000/svg"
              width="141"
              height="141"
              viewBox="0 0 141 141"
              fill="none"
            >
              <path
                d="M90.3548 64.2H89.3871V55.4571C89.3871 50.562 87.4501 45.8674 84.0018 42.406C80.5535 38.9446 75.8766 37 71 37C66.1234 37 61.4466 38.9446 57.9983 42.406C54.5501 45.8674 52.6129 50.562 52.6129 55.4571V64.2H51.6452C48.8219 64.2 46.1142 65.3257 44.1179 67.3299C42.1215 69.3338 41 72.0519 41 74.8857V94.3143C41 97.1481 42.1215 99.8662 44.1179 101.87C46.1142 103.874 48.8219 105 51.6452 105H90.3548C93.1779 105 95.8857 103.874 97.8819 101.87C99.8786 99.8662 101 97.1481 101 94.3143V74.8857C101 72.0519 99.8786 69.3338 97.8819 67.3299C95.8857 65.3257 93.1779 64.2 90.3548 64.2ZM58.4194 55.4571C58.4194 52.1079 59.7448 48.8957 62.1041 46.5274C64.4635 44.1591 67.6632 42.8286 71 42.8286C74.3368 42.8286 77.5365 44.1591 79.8959 46.5274C82.2552 48.8957 83.5806 52.1079 83.5806 55.4571V64.2H58.4194V55.4571ZM95.1935 94.3143C95.1935 95.6024 94.6837 96.8381 93.7764 97.7489C92.869 98.6597 91.6381 99.1714 90.3548 99.1714H51.6452C50.3619 99.1714 49.1311 98.6597 48.2237 97.7489C47.3163 96.8381 46.8065 95.6024 46.8065 94.3143V74.8857C46.8065 73.5976 47.3163 72.3619 48.2237 71.4511C49.1311 70.5403 50.3619 70.0286 51.6452 70.0286H90.3548C91.6381 70.0286 92.869 70.5403 93.7764 71.4511C94.6837 72.3619 95.1935 73.5976 95.1935 74.8857V94.3143Z"
                fill="#373839"
              />
              <circle
                cx="70.5"
                cy="70.5"
                r="56.5"
                stroke="#373839"
                strokeWidth="4"
              />
              <circle
                cx="70.5"
                cy="70.5"
                r="68.5"
                stroke="#373839"
                strokeWidth="4"
              />
            </svg>

            <div className="relative">
              <MotionDiv
                className="absolute scale-50  top-1/2 left-0 h-0.5 bg-gradient-to-r from-transparent via-[#8B9BFF] to-transparent"
                style={{
                  transform: "translateY(-50%)",
                  filter: "blur(0.5px)",
                }}
                animate={{
                  width: ["0%", "100%", "0%", "0%", "0%"],
                  x: ["0px", "0px", "228px", "228px", "228px"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  times: [0, 0.125, 0.25, 0.75, 1],
                }}
              />

              <MotionDiv
                className="w-2.5  h-2.5 bg-[#8B9BFF] absolute top-1/2 -translate-y-1/2 rounded-full z-20"
                style={{
                  filter: "blur(0.5px)",
                  boxShadow:
                    "0 0 15px #8B9BFF, 0 0 25px #5E6AD2, 0 0 35px rgba(94, 106, 210, 0.3)",
                }}
                animate={{
                  x: ["0px", "228px", "228px", "228px", "0px"],
                  opacity: [1, 1, 0, 0, 1],
                  scale: [1, 1.2, 0.8, 0.8, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  times: [0, 0.125, 0.25, 0.75, 1],
                }}
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="228"
                height="2"
                viewBox="0 0 228 2"
                fill="none"
              >
                <path d="M0 1H228" stroke="#5E6AD2" strokeWidth="2" />
              </svg>
            </div>
            <svg
              className="z-10 w-32 md:w-auto "
              xmlns="http://www.w3.org/2000/svg"
              width="299"
              height="342"
              viewBox="0 0 299 342"
              fill="none"
            >
              <path
                d="M226.887 126.818V216.911L148.865 261.956L70.8438 216.911V126.818L148.865 81.7734L226.887 126.818Z"
                stroke="#464747"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M149.918 257.195V166.705L76.1758 128.673"
                stroke="#464747"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M149.919 168.002L220.852 128.673"
                stroke="#464747"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path d="M149 66V10" stroke="#373839" strokeWidth="2" />
              <circle cx="149" cy="5" r="5" fill="#373839" />
              <path d="M149 276V332" stroke="#373839" strokeWidth="2" />
              <circle
                cx="5"
                cy="5"
                r="5"
                transform="matrix(1 0 0 -1 144 342)"
                fill="#373839"
              />
              <circle cx="44" cy="69" r="5" fill="#373839" />
              <circle cx="5" cy="79" r="5" fill="#373839" />
              <path
                d="M44.5 125H32V114L25 108V82.5L18 79.5H8"
                stroke="#373839"
                strokeWidth="2"
              />
              <path d="M58.5 125H44.5V74" stroke="#373839" strokeWidth="2" />
              <circle cx="254" cy="69" r="5" fill="#373839" />
              <circle cx="294" cy="79" r="5" fill="#373839" />
              <path
                d="M254 125H266.5V114L273.5 108V82.5L280.5 79.5H290.5"
                stroke="#373839"
                strokeWidth="2"
              />
              <path d="M240 125H254V74" stroke="#373839" strokeWidth="2" />
              <circle
                cx="5"
                cy="5"
                r="5"
                transform="matrix(1 0 0 -1 249 276)"
                fill="#373839"
              />
              <circle
                cx="5"
                cy="5"
                r="5"
                transform="matrix(1 0 0 -1 289 266)"
                fill="#373839"
              />
              <path
                d="M254 215H266.5V226L273.5 232V257.5L280.5 260.5H290.5"
                stroke="#373839"
                strokeWidth="2"
              />
              <path d="M240 215H254V266" stroke="#373839" strokeWidth="2" />
              <circle
                cx="45"
                cy="271"
                r="5"
                transform="rotate(180 45 271)"
                fill="#373839"
              />
              <circle
                cx="5"
                cy="261"
                r="5"
                transform="rotate(180 5 261)"
                fill="#373839"
              />
              <path
                d="M45 215H32.5V226L25.5 232V257.5L18.5 260.5H8.5"
                stroke="#373839"
                strokeWidth="2"
              />
              <path d="M59 215H45V266" stroke="#373839" strokeWidth="2" />
            </svg>

            <div className="relative">
              <MotionDiv
                className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-transparent via-[#8B9BFF] to-transparent"
                style={{
                  transform: "translateY(-50%)",
                  filter: "blur(0.5px)",
                }}
                animate={{
                  width: ["0%", "0%", "100%", "100%", "0%"],
                  x: ["0px", "0px", "0px", "0px", "0px"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  times: [0, 0.25, 0.375, 0.625, 0.75],
                }}
              />

              <MotionDiv
                className="w-2.5 h-2.5 bg-[#8B9BFF] absolute top-1/2 -translate-y-1/2 rounded-full z-20"
                style={{
                  filter: "blur(0.5px)",
                  boxShadow:
                    "0 0 15px #8B9BFF, 0 0 25px #5E6AD2, 0 0 35px rgba(94, 106, 210, 0.3)",
                }}
                animate={{
                  x: ["0px", "0px", "228px", "0px", "0px"],
                  opacity: [0, 1, 1, 1, 0],
                  scale: [0.8, 1, 1.2, 1, 0.8],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  times: [0, 0.25, 0.375, 0.625, 0.75],
                }}
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="228"
                height="2"
                viewBox="0 0 228 2"
                fill="none"
              >
                <path d="M0 1H228" stroke="#5E6AD2" strokeWidth="2" />
              </svg>
            </div>

            <Image src={rightLock} alt="rightShape" className="z-10" priority />

            <MotionDiv
              className="absolute inset-0 rounded-2xl pointer-events-none"
              animate={{
                background: [
                  "radial-gradient(circle at 10% 50%, rgba(139, 155, 255, 0.03) 0%, transparent 50%)",
                  "radial-gradient(circle at 30% 50%, rgba(139, 155, 255, 0.05) 0%, transparent 50%)",
                  "radial-gradient(circle at 70% 50%, rgba(139, 155, 255, 0.05) 0%, transparent 50%)",
                  "radial-gradient(circle at 90% 50%, rgba(139, 155, 255, 0.03) 0%, transparent 50%)",
                  "radial-gradient(circle at 10% 50%, rgba(139, 155, 255, 0.03) 0%, transparent 50%)",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </MotionDiv>
        </MotionDiv>
      </div>
    </div>
  );
}
