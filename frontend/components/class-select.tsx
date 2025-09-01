import { MotionDiv } from "./motion-wrapper";
import { Button } from "./ui/button";

export function ClassSelect() {
  return (
    <MotionDiv
      layout
      initial={{
        y: -10,
        scale: 0.8,
        opacity: 0,
      }}
      animate={{
        y: 0,
        scale: 1,
        opacity: 1,
      }}
      exit={{
        y: -10,
        scale: 0.8,
        opacity: 0,
      }}
      transition={{
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="bg-[#3A3B3C] ml-20 w-[80%] flex flex-col relative z-50 items-start justify-center py-2 rounded-lg border border-[#ffffff1a]"
    >
      <Button className="bg-transparent text-[#8a8f98] hover:bg-transparent">
        Indices
      </Button>
      <Button className="bg-transparent text-[#8a8f98] hover:bg-transparent">
        Cryptocurrency
      </Button>
      <Button className="bg-transparent text-[#8a8f98] hover:bg-transparent">
        Foreign Exchange
      </Button>
      <Button className="bg-transparent text-[#8a8f98] hover:bg-transparent">
        Equities
      </Button>
      <Button className="bg-transparent text-[#8a8f98] hover:bg-transparent">
        Commodities
      </Button>
      <Button className="bg-transparent text-[#8a8f98] hover:bg-transparent">
        Fixed Income
      </Button>
    </MotionDiv>
  );
}
