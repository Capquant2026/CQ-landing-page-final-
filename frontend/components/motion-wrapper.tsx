"use client";

import { HTMLMotionProps, motion } from "motion/react";

export function MotionDiv(props: HTMLMotionProps<"div">) {
  return <motion.div {...props}>{props.children}</motion.div>;
}


export function MotionBtn(props: HTMLMotionProps<"button">) {
  return <motion.button {...props}>{props.children}</motion.button>;
}

export function MotionH2(props: HTMLMotionProps<"h2">) {
  return <motion.h2 {...props}>{props.children}</motion.h2>;
}

export function MotionH1(props: HTMLMotionProps<"h1">) {
  return <motion.p {...props}>{props.children}</motion.p>;
}

export function MotionP(props: HTMLMotionProps<"p">) {
  return <motion.p {...props}>{props.children}</motion.p>;
}
