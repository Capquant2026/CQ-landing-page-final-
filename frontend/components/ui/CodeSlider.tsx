"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import PostCode from "./post-code";
import GetCode from "./get-code";

export function CodeSlider() {
  return (
    <Carousel className="w-full sm:hidden">
      <CarouselContent className="">
        <CarouselItem>
            <PostCode/>
        </CarouselItem>
        <CarouselItem>
            <GetCode/>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
