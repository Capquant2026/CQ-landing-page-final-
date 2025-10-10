"use client";
import { Copy, Share2, X } from "lucide-react";
import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const flags = [
  {
    name: "Eng",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg",
  },
  {
    name: "Zh",
    url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
  },
  {
    name: "Jp",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg",
  },
  {
    name: "Hi",
    url: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
  },
  {
    name: "Ko",
    url: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
  },
  {
    name: "Fr",
    url: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
  },
  {
    name: "De",
    url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Flag_of_Germany_%28RGB%29.svg",
  },
  {
    name: "Es",
    url: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
  },
  {
    name: "Pt",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Flag_of_Portugal_%28official%29.svg",
  },
  {
    name: "It",
    url: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
  },
];

export default function VideoPlayer() {
  const [selected, setSelected] = useState(flags[0]);
  const [open, setOpen] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const videoUrl = "https://delicate-bombolone-7a37e8.netlify.app/ma-video.mp4";
  const shareUrl = "https://delicate-bombolone-7a37e8.netlify.app/ma-video.mp4";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(videoUrl);
    alert("Link copied to clipboard!");
  };

  const socials = [
    {
      name: "Facebook",
      icon: <FaFacebook className="size-5" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        videoUrl
      )}`,
      color: "bg-blue-600",
    },
    {
      name: "Twitter",
      icon: <X className="size-5" />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        videoUrl
      )}`,
      color: "bg-sky-500",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn className="size-5" />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        videoUrl
      )}`,
      color: "bg-blue-700",
    },
    {
      name: "WhatsApp",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="whatsapp"
          className="size-5"
        />
      ),
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(videoUrl)}`,
      color: "bg-green-500",
    },
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-4xl relative">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-3 sm:mb-4">
          <div className="relative w-full sm:w-auto">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-between  sm:w-auto bg-[#1b1b1d] border border-white/10 rounded-lg px-3 py-2 hover:bg-[#2a2a2c] transition"
            >
              <div className="flex items-center gap-2 text-sm text-white">
                <img
                  src={selected.url}
                  alt={selected.name}
                  className="w-6 h-4 object-cover"
                />
                <span>{selected.name}</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 transition-transform text-white ${
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
              <ul className="absolute z-10 mt-2 w-full sm:w-auto sm:min-w-[150px] bg-[#1b1b1d] border text-sm border-white/10 rounded-lg shadow-lg">
                {flags.map((flag) => (
                  <li
                    key={flag.name}
                    onClick={() => {
                      setSelected(flag);
                      setOpen(false);
                    }}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-[#2a2a2c] cursor-pointer transition text-white"
                  >
                    <img
                      src={flag.url}
                      alt={flag.name}
                      className="w-6 h-4 object-cover"
                    />
                    <span>{flag.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Share Button */}
        </div>

        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-lg bg-gradient-to-b from-[#141516] to-[#08090A] flex items-center justify-center border border-white/10 overflow-hidden">
          <iframe
            src={videoUrl}
            className="w-full h-full rounded-lg"
            allowFullScreen
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>

          <button
            onClick={() => setShowShareMenu(!open)}
            className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition"
          >
            <Share2 className="size-5" />
          </button>

          {showShareMenu && (
            <div className="absolute top-14 right-4 bg-[#1A1A1C] border border-white/10 rounded-xl p-3 flex flex-col gap-2 shadow-lg z-10 w-48">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-white">
                  Share Video
                </span>
                <button
                  onClick={() => setShowShareMenu(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="size-4" />
                </button>
              </div>

              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-white px-3 py-2 rounded-lg ${s.color} hover:opacity-90 transition text-sm`}
                >
                  {s.icon}
                  {s.name}
                </a>
              ))}

              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white text-sm"
              >
                <Copy className="size-4" /> Copy Link
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
