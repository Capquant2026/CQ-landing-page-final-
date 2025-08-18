import Dashboard from "./dashboard";
import { Button } from "./ui/button";

export default function Hero() {
  const titleContent = "Your Models Verified Alpha".split(" ");
  return (
    <div className="flex flex-col items-center min-h-screen  max-w-[1100px]">
      <div className="mt-40">
        <div className="text-[#f7f8f8] flex flex-col gap-4 items-center md:items-start     ">
          <h1 className="text-4xl sm:text-5xl md:text-center  leading-tighter   font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-6xl xl:tracking-tighter max-w-4xl  ">
            <span className=" flex items-center justify-center md:justify-start gap-2 ">
              {titleContent.map((item: string, index: number) => {
                return <span key={index}>{item}</span>;
              })}
            </span>
            <span className=" flex items-center justify-center md:justify-start gap-2 ">
              {"60 min Execution Loop".split(" ").map((item, idnex) => (
                <div key={idnex}>{item}</div>
              ))}
            </span>
          </h1>
          <p className="opacity-50  md:w-1/2 text-center md:text-left leading-tighter tracking-tight ">
            CapQuant is where data-driven expertise generates market-beating
            performance submit your predictive models,scorethe real time
            effectiveness, and earn for even validated outperformance
          </p>
          <div>
            <Button variant={"outline"} className="text-black   cursor-pointer">
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
      <Dashboard />
      <div>
        
      </div>
    </div>
  );
}
