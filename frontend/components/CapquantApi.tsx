import { Button } from "./ui/button";
import GetCode from "./ui/get-code";
import PostCode from "./ui/post-code";

export default function ApiSection() {
  return (
    <div className="h-screen   text-[#f7f8f8] flex flex-col items-center justify-start p-40 gap-10 w-full mt-40 ">
      <div className="flex items-center justify-evenly gap-40 w-full ">
        <h2
          className="text-4xl  sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                           leading-tight sm:leading-tight md:leading-[1.1] lg:leading-[1.1] 
                           font-semibold tracking-tight text-balance 
                           max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl "
        >
          The CapQuant <span className="opacity-50">API</span>
        </h2>

        <Button
          className="bg-[#f7f8f8] hover:bg-[#f7f8f8] text-black "
          size={"lg"}
        >
          Join Waitlist
        </Button>
      </div>
      <div className="flex w-full gap-5 items-center justify-center">
        <div className="border w-1/2 p-4 border-[#1d1d1d] rounded-xl">
          <div className="flex items-center justify-between font-semibold">
            <div className="flex items-center justify-start gap-4">
              <Button className="text-[#2dd4bf] font-semibold bg-[#032827] hover:bg-[#032827] hover:text-[#2dd4bf]">
                POST
              </Button>
              <h3>Alpha Submission Pipeline</h3>
            </div>
            <Button>Round 14/24</Button>
          </div>
          <div className="bg-[#171717] py-2 px-5 rounded-md my-5">
            https://api.capquant.com/v3/research/rounds/14/submit
          </div>
          <PostCode />
        </div>
        <div className="border mt-52 w-1/2 p-4 border-[#1d1d1d] rounded-xl">
          <div className="flex items-center justify-between font-semibold">
            <div className="flex items-center justify-start gap-4">
              <Button className="text-[#2dd4bf] font-semibold bg-[#032827] hover:bg-[#032827] hover:text-[#2dd4bf]">
                Get
              </Button>
              <h3>Validation & Deployment</h3>
            </div>
            <Button>Round 14 Response</Button>
          </div>
          <div className="bg-green-500 font-semibold inline-block py-1 px-5 rounded-md my-5">
            202 ACCEPTED
          </div>
          <GetCode />
        </div>
      </div>
    </div>
  );
}
