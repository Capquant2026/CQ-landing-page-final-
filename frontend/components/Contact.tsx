"use client";

import { FaInstagram } from "react-icons/fa";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Button } from "./ui/button";
import { LuLoaderCircle } from "react-icons/lu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { motion } from "framer-motion";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Toaster, toast } from "sonner";
import {
  MotionDiv,
  MotionH2,
  MotionInput,
  MotionP,
  MotionSelect,
} from "./motion-wrapper";

export default function Contact() {
  const currentYear = new Date();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [count, setCount] = useState(655);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const roleRef = useRef<HTMLSelectElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);
  useEffect(() => {
    // Add 7 every 3 seconds (adjust timing as needed)
    const timer = setInterval(() => {
      setCount((prev) => prev + 7);
    }, 3000);

    return () => clearInterval(timer);
  }, []);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await fetch(
      "http://localhost:3000/api/contact",

      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          role: roleRef.current?.value,
          country: countryRef.current?.value,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
        } else {
          toast.error(data.message || "Something went wrong");
        }
      })
      .catch((e) => {
        toast.error("Something went Wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div
      className="text-[#f7f8f8] flex flex-col items-center justify-start pt-20 sm:pt-40 w-full mt-20 sm:mt-40"
      style={{
        background:
          "linear-gradient(to bottom, hsla(0,0%,100%,.05), transparent 20%), linear-gradient(180deg, rgba(97, 106, 115, 0) 0, rgba(97, 106, 115, .05) 40%, rgba(97, 106, 115, .05) 80%, rgba(97, 106, 115, 0) 100%)",
      }}
      id="contact"
    >
      <Toaster richColors position="top-right" />
      <MotionDiv
        className="flex items-center flex-col w-full px-4 sm:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <MotionDiv
          initial={{
            y: 60,
            opacity: 0,
          }}
          whileInView={{
            y: 0,

            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        >
          <MotionH2
            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                         leading-tight sm:leading-tight md:leading-[1.1] lg:leading-[1.1] 
                         font-[538] tracking-[-.0325em] text-balance 
                         max-w-full sm:max-w-3xl  md:max-w-4xl lg:max-w-6xl text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.215, 0.61, 0.355, 1],
            }}
          >
            Ready to outsmart the market ?
          </MotionH2>

          <MotionP
            className="font-[510] tracking-[-0.011em] text-[#8a8f98] text-center  text-xl mt-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 0.75, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Get early access to CapQuant's Institutional grade platform
          </MotionP>
        </MotionDiv>
        <motion.form
          className="w-full md:w-1/2 my-10 md:my-30"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onSubmit={handleSubmit}
        >
          <MotionDiv
            className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
            }}
          >
            <MotionDiv
              className="w-full md:w-1/2"
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            >
              <MotionInput
                required
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Full name"
                className="bg-[#141516] mt-3 py-3 px-4 outline-none rounded-md w-full border border-zinc-800 transition-all duration-300 focus:shadow-lg "
              />
            </MotionDiv>
            <MotionDiv className="w-full md:w-1/2" whileHover={{ scale: 1.02 }}>
              <MotionInput
                required
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
                className="bg-[#141516] mt-3 py-3 px-4 outline-none rounded-md w-full border border-zinc-800 transition-all duration-300 focus:shadow-lg "
              />
            </MotionDiv>
          </MotionDiv>

          <MotionDiv
            className="flex flex-col md:flex-row mt-3 justify-center items-center gap-5 md:gap-10"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
            }}
          >
            <MotionDiv
              className="w-full md:w-1/2 "
              whileHover={{ scale: 1.02 }}
            >
              <MotionSelect
                required
                ref={roleRef}
                className="bg-[#141516] text-[#9b9b9c] mt-3 py-3 px-4 outline-none rounded-md w-full border  border-zinc-800 transition-all duration-300  focus:shadow-lg focus:shadow-[#68cc58]/10"
              >
                <option value="">Role</option>
                {roles.map((item) => {
                  return (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  );
                })}
              </MotionSelect>
            </MotionDiv>
            <MotionDiv className="w-full md:w-1/2" whileHover={{ scale: 1.02 }}>
              <MotionSelect
                required
                ref={countryRef}
                className="bg-[#141516] text-[#9b9b9c] mt-3 py-3 px-4 outline-none rounded-md w-full border  border-zinc-800 transition-all duration-300  focus:shadow-lg "
              >
                <option value="">Select a Country</option>
                {countries.map((item) => {
                  return (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  );
                })}
              </MotionSelect>
            </MotionDiv>
          </MotionDiv>

          <MotionDiv
            className="w-full mt-5"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
            }}
          >
            <MotionDiv whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                disabled={isLoading}
                style={{
                  cursor: isLoading ? "not-allowed" : "pointer",
                }}
                className="bg-white   hover:bg-white w-full text-black font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-white/20"
                size={"lg"}
              >
                {isLoading ? (
                  <LuLoaderCircle className="animate-spin" />
                ) : (
                  "Join The Waitlist"
                )}
              </Button>
            </MotionDiv>
            <div className="w-full mt-5 text-center">
              <p className="py-2 px-5 bg-[#121909] inline-block tracking-tight  rounded-full border border-[#5ea500] text-[#5ea500] text-sm">
                {Math.floor(count)} people have already joinded the waitlist
              </p>
            </div>
          </MotionDiv>
        </motion.form>

        <MotionDiv
          className="scroll-m-20 font-[510] tracking-[-0.011em]  text-center mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
              },
            },
          }}
        >
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
            }}
          >
            <h2 className="font-semibold">Early Access</h2>
            <p className="opacity-50">
              Be among the first to experience CapQuant
            </p>
          </MotionDiv>
          <MotionDiv
            className="my-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
            }}
          >
            <h2 className="font-semibold">Founder Circle</h2>
            <p className="opacity-50">
              Join the exclusive group of early adopters
            </p>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
            }}
          >
            <h2 className="font-semibold">Exclusive Updates</h2>
            <p className="opacity-50">
              Get insider Updates on platform development
            </p>
          </MotionDiv>
        </MotionDiv>

        <MotionDiv
          className="flex mt-10 text-2xl gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {[
            {
              icon: FaDiscord,
              label: "Discord",
              url: "https://discord.gg/AW2H3ckuPw",
            },
            {
              icon: FaLinkedin,
              label: "Linkedin",
              url: "https://www.linkedin.com/company/capquant-internatonal/",
            },
            {
              icon: FaInstagram,
              label: "Instagram",
              url: "https://www.instagram.com/capquant",
            },
            {
              icon: FaTiktok,
              label: "Tik Tok",
              url: "https://www.tiktok.com/@capquant",
            },
            {
              icon: FaXTwitter,
              label: "X",
              url: "https://x.com/capquant_",
            },
          ].map(({ icon: Icon, label, url }) => (
            <MotionDiv
              key={label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={url}>
                    <Icon />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{label}</p>
                </TooltipContent>
              </Tooltip>
            </MotionDiv>
          ))}
        </MotionDiv>
      </MotionDiv>

      <MotionDiv
        className="w-full border-t border-t-zinc-800/80 p-4 text-[10px] md:text-base  text-[#8a8f98] flex items-center justify-between text-center mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span>
          &copy; {currentYear.getFullYear()} CapQuant. All rights reserved
        </span>
        <p className="font-[510] tracking-[-0.011em] ">
          Powered by Lotus Capital
        </p>
      </MotionDiv>
    </div>
  );
}

const roles: string[] = ["Student", "Professional"];
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo (Democratic Republic)",
  "Costa Rica",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Other",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const formVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
