import { Button } from "./ui/button";

export default function Hero() {
  const titleContent = "Your Models Verified Aplha".split(" ");
  return (
    <div className="flex justify-center mt-40">
      <div className="w-1/2 text-[#f7f8f8]    ">
        <h1 className=" text-4xl  leading-tighter  font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-6xl xl:tracking-tighter max-w-4xl  ">
          <span className=" flex items-center gap-2 ">
            {titleContent.map((item: string, index: number) => {
              return <span key={index}>{item}</span>;
            })}
          </span>
          <span className=" flex items-center gap-2 ">
            {"60 min Execution Loop".split(" ").map((item, idnex) => (
              <div  key={idnex}>{item}</div>
            ))}
          </span>
        </h1>
        <p className="opacity-50 my-3 w-1/2 leading-tighter tracking-tight ">
          CapQuant is where data-driven expertise generates market-beating
          performance submit your predictive models,scorethe real time
          effectiveness, and earn for even validated outperformance
        </p>
        <Button
          variant={"outline"}
         
          className="text-black  cursor-pointer"
        >
          Join Waitlist
        </Button>
      </div>
    </div>
  );
}
