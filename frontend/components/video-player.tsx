"use client";
import Image from "next/image";
import { useState } from "react";

export default function VideoPlayer() {
  const flags = [
    {
      name: "United Kingdom",
      url: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg",
    },
    {
      name: "China",
      url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
    },
    {
      name: "Japan",
      url: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg",
    },
    {
      name: "India",
      url: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    },
    {
      name: "Korean",
      url: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
    },
    {
      name: "France",
      url: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    },
    {
      name: "Germany",
      url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Flag_of_Germany_%28RGB%29.svg",
    },
    {
      name: "Spain",
      url: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
    },
    {
      name: "Portugal",
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Flag_of_Portugal_%28official%29.svg",
    },
    {
      name: "Italy",
      url: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    },
  ];

  const [selected, setSelected] = useState(flags[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-40 w-[80%] relative lg:w-5xl h-[500px] rounded-lg bg-gradient-to-b from-[#141516] to-[#08090A] flex items-center justify-center flex-col border border-white/10 gap-6 text-white">
      {/* Custom dropdown */}
      <div className=" absolute left-0 -top-10">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full bg-[#1b1b1d] border border-white/10 rounded-lg px-3 py-2 hover:bg-[#2a2a2c] transition "
        >
          <div className="flex items-center gap-2">
            <Image
              src={selected.url}
              alt={selected.name}
              width={24}
              height={18}
            />
            <span>{selected.name}</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 h-4 transition-transform ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {open && (
          <ul className="absolute z-10 mt-2 w-full bg-[#1b1b1d] border border-white/10 rounded-lg shadow-lg">
            {flags.map((flag) => (
              <li
                key={flag.name}
                onClick={() => {
                  setSelected(flag);
                  setOpen(false);
                }}
                className="flex items-center gap-2 px-3 py-2 hover:bg-[#2a2a2c] cursor-pointer transition"
              >
                <Image src={flag.url} alt={flag.name} width={24} height={18} />
                <span>{flag.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Play Button */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-20 p-4 hover:opacity-90 cursor-pointer bg-white rounded-full"
        viewBox="0 0 640 640"
      >
        <path
          fill="black"
          d="M147.6 101.6C135.5 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6zM176 490.5L176 149.5L487.3 320L176 490.5z"
        />
      </svg>

      {/* Info */}
      <div className="text-center">
        <h2 className="tracking-tight text-lg font-semibold">
          Video Integration placeholder
        </h2>
        <p className="font-light tracking-tight">Click to play demo video</p>
      </div>
    </div>
  );
}
