import { Button } from "./ui/button";

export default function Insight() {
  return (
    <div className="h-screen   text-[#f7f8f8] flex flex-col items-center justify-start p-40 w-full mt-40 bg-gradient-to-b from-[#141516] to-[#08090A]">
      <div>
        <span className="leading-7 [&:not(:first-child)]:mt-6 text-sm opacity-50 border p-1 border-[#68cc58] rounded-full px-2">
          Advanced Analytics
        </span>
        <h2
          className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                           leading-tight sm:leading-tight md:leading-[1.1] lg:leading-[1.1] 
                           font-semibold tracking-tight text-balance 
                           max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl "
        >
          Deep insights into performance
        </h2>
        <p className="opacity-75">
          An institutional-grade analytics engine delevering granular metrics ,
          real-time backtesting,and end-of-end live reportings
        </p>
        <ul className="my-3 list-disc mx-5  ">
          <li>Validate against our CapQuant Meta-Model</li>
          <li>Real-time Backlesting Suite</li>
          <li>End-of-Day Live Reportsh</li>
        </ul>
        <Button
          className="bg-[#f7f8f8] hover:bg-[#f7f8f8] text-black "
          size={"lg"}
        >
          Join Waitlist
        </Button>
      </div>
    </div>
  );
}
