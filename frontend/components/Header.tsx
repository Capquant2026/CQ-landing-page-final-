"use client";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { menu } from "motion/react-client";
export default function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className="text-white flex   items-center md:justify-center justify-between z-50 w-full sticky left-0 top-0 lg:gap-40 p-4 border-b border-[#1c1d1d]">
      <h1 className="text-[#e6e6e6]  text-xl md:text-2xl font-bold">CapQuand</h1>
      <nav className="md:flex items-center hidden">
        <Link href={"href"}>
          <Button className="bg-transparent cursor-pointer text-[#8a8f98] hover:text-white">
            Product
          </Button>
        </Link>
        <Link href={"h/"}>
          <Button className="bg-transparent cursor-pointer text-[#8a8f98] hover:text-white">
            Resources
          </Button>
        </Link>
        <Link href={"href"}>
          <Button className="bg-transparent cursor-pointer text-[#8a8f98] hover:text-white">
            Pricing
          </Button>
        </Link>
        <Link href={"href"}>
          <Button className="bg-transparent cursor-pointer text-[#8a8f98] hover:text-white">
            Customers
          </Button>
        </Link>
        <Link href={"href"}>
          <Button className="bg-transparent cursor-pointer text-[#8a8f98] hover:text-white">
            Now
          </Button>
        </Link>
        <Link href={"href"}>
          <Button className="bg-transparent cursor-pointer text-[#8a8f98] hover:text-white">
            Contact
          </Button>
        </Link>
      </nav>
      <div className="flex gap-5">
        <Button
          variant={"outline"}
          size="sm"
          className="text-black  cursor-pointer"
        >
          Join Waitlist
        </Button>
        <button
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
          className="md:hidden cursor-pointer"
        >
          <AnimatePresence mode="wait">
            {openMenu ? (
              <motion.div
                key={"close"}
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: openMenu ? 1 : 0,
                }}
              >
                <CgClose className="text-xl" />
              </motion.div>
            ) : (
              <motion.div
                key={"open"}
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: !openMenu ? 1 : 0,
                }}
                className="flex flex-col justify-center gap-2"
              >
                <span className="inline-block w-5 h-[2px]   top-0 left-0 bg-white" />
                <span className="inline-block w-5  bottom-0 left-0 h-[2px] bg-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
      {openMenu && (
        <nav className="flex absolute flex-col h-screen w-full mt-20 bg-white/[0.06] backdrop:blur-3xl gap-5  left-0 top-0 items-start justify-center  ">
          <Link href={"href"}>
            <Button className="bg-transparent cursor-pointer text-[#8a8f98] hover:text-white  text-5xl">
              Product
            </Button>
          </Link>
          <Link href={"h/"}>
            <Button className="bg-transparent cursor-pointer text-[#8a8f98] hover:text-white text-5xl">
              Resources
            </Button>
          </Link>
          <Link href={"href"}>
            <Button className="bg-transparent cursor-pointer text-[#8a8f98] hover:text-white text-5xl">
              Pricing
            </Button>
          </Link>
          <Link href={"href"}>
            <Button className="bg-transparent cursor-pointer text-[#8a8f98] hover:text-white text-5xl">
              Customers
            </Button>
          </Link>
          <Link href={"href"}>
            <Button className="bg-transparent cursor-pointer text-[#8a8f98] hover:text-white text-5xl">
              Now
            </Button>
          </Link>
          <Link href={"href"}>
            <Button className="bg-transparent cursor-pointer text-[#8a8f98] hover:text-white text-5xl">
              Contact
            </Button>
          </Link>
        </nav>
      )}
    </div>
  );
}
