'use client'

import dynamic from "next/dynamic";

const Timer = dynamic(()=>import("./timer"),{ssr : false})

export default function TimerWrapper() {
    return <Timer/>
}