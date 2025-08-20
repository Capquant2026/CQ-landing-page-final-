import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function Contact() {
  const countries = [
    "Select your Country",
    "United States",
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "Spain",
    "Italy",
    "Netherlands",
    "Australia",
    "Japan",
    "South Korea",
    "Brazil",
    "Mexico",
    "India",
    "China",
    "Other",
  ];
  return (
    <div className="text-[#f7f8f8] flex flex-col items-center justify-start pt-40 w-full mt-40 bg-gradient-to-b from-[#141516] to-[#08090A]">
      <div className="flex items-center flex-col   w-full ">
        <div>
          <span className="leading-7 [&:not(:first-child)]:mt-6 text-sm opacity-50 border p-1 border-[#68cc58] rounded-full px-2">
            Limited Spots.Register Now
          </span>
          <h2
            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                         leading-tight sm:leading-tight md:leading-[1.1] lg:leading-[1.1] 
                         font-semibold tracking-tight text-balance 
                         max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl "
          >
            Ready to Predict The market ?
          </h2>
          <p className="opacity-75">
            Get early access to CapQuant’s Institute grade platform
          </p>
        </div>
        <form className="w-1/2 my-30">
          <div className="flex  justify-center items-center gap-10 ">
            <div className="w-1/2">
              <input
                type="text"
                placeholder="First name"
                className="bg-[#141516] mt-3 py-3 px-4 outline-none rounded-md w-full border border-zinc-800"
              />
            </div>
            <div className="w-1/2">
              <input
                type="text"
                placeholder="Last name"
                className="bg-[#141516] mt-3 py-3 px-4 outline-none rounded-md w-full border border-zinc-800"
              />
            </div>
          </div>
          <div className="flex mt-3  justify-center items-center gap-10 ">
            <div className="w-1/2">
              <input
                type="text"
                placeholder="Email"
                className="bg-[#141516] mt-3 py-3 px-4 outline-none rounded-md w-full border border-zinc-800"
              />
            </div>
            <div className="w-1/2">
              <select className="bg-[#141516] mt-3 py-3 px-4 outline-none rounded-md w-full border border-zinc-800">
                {countries.map((item) => {
                  return (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="w-full  mt-5 ">
            <Button
              className="bg-white hover:bg-white w-full text-black font-semibold "
              size={"lg"}
            >
              Join The Waitlist
            </Button>
          </div>
        </form>
        <div className="scroll-m-20  text-center  tracking-tight">
          <div>
            <h2 className="font-semibold">Early Access</h2>
            <p className="opacity-50">
              Be among the first to experience CapQuant
            </p>
          </div>
          <div className="my-4">
            <h2 className="font-semibold">No Commitment</h2>
            <p className="opacity-50">Join the waitlist With no obligations</p>
          </div>
          <div>
            <h2 className="font-semibold">Exclusive Updates</h2>
            <p className="opacity-50">
              Get insider Updates on platform development
            </p>
          </div>
        </div>
        <div className="flex  mt-10 text-2xl gap-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={""}>
                <FaDiscord />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Discord</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={""}>
                <FaLinkedin />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Linkedin</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={""}>
                <FaInstagram />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Instagram</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={""}>
                <FaTiktok />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Tik Tok</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      <div className="w-full border-t border-t-zinc-800/80 p-4 text-center mt-20" >
        <p className="opacity-50 font-medium">Powered by Lotus Capital</p>
      </div>
    </div>
  );
}
