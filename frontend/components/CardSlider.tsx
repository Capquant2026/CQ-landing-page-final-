"use client";

import * as React from "react";
import automationIMG from "../public/automationIMG.svg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Prompt from "./prompt";

export function CardSlider() {
  return (
    <Carousel className="w-full sm:hidden">
      <CarouselContent className="">
        <CarouselItem>
          <div
            className="w-full 
                    h-64 sm:h-72 lg:h-full 
                    border-t flex items-center justify-center border-b
                    border-zinc-800/60 relative 
                    border-b-zinc-800/80 
                    "
          >
            <Prompt />
            <div
              className="w-full h-full 
                        bg-gradient-to-l from-[#0d0e0f] to-transparent 
                        pointer-events-none 
                        top-0 right-0 absolute z-10 opacity-75"
            />
          </div>
        </CarouselItem>{" "}
        <CarouselItem className="bg-red-00">
          <div
            className="w-full 
                    h-64 sm:h-72 lg:h-full 
                    relative 
                    p-4 sm:p-6 md:p-8 lg:p-10 
                    border-t border-b
                    border-zinc-800/60 
                    border-b-zinc-800/80 
                    lg:border-l lg:border-l-zinc-800/80
                  "
          >
            <div
              className="w-full h-full 
                      bg-gradient-to-t from-[#0d0e0f] to-transparent 
                      pointer-events-none inset-0 absolute z-10 opacity-0"
            />

            <Image
              src={automationIMG}
              alt="automationImage"
              className="p-1 w-full h-full object-contain"
              priority
            />
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
