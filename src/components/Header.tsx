import React from "react";
import { Rufina, Inter, } from "next/font/google";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const rufina = Rufina({ subsets: ["latin"], weight: ["700", "400"] });
const inter = Inter({ subsets: ["latin"], weight: ["200", "300", "400"] });

const Header = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center px-16 text-primary-text">
      {/* <p className="text-lg mb-6">👋 Hey, I&apos;m,</p> */}
      <p className={`text-lg mb-3 ${inter.className}`}>Emmanuel Holonou</p>
      <p className={`text-9xl font-extralight mb-8 ${rufina.className}`}>
        Software Engineer
      </p>
      <p
        className={`max-w-[50%] text-lg font-extralight text-center leading-[1.8] mb-10 ${inter.className}`}
      >
        I&apos;m passionate about creating innovative web experiences and
        optimizing backend systems. With a strong foundation in software
        development and a deep desire to continuously learn and grow, I&apos;m
        proficient in a variety of web development technologies including
        JavaScript and Java.
      </p>

      <div className="flex gap-4 items-center">
        <button className="flex justify-center items-center gap-2 px-4 py-3 rounded-sm bg-primary-btn text-black">
          <span className={`font-light ${inter.className}`}>Download resume</span>
          <ArrowUpRight size={17} />
        </button>
        {/* <button className="flex justify-center items-center gap-2 px-4 py-3 rounded-sm border border-primary-btn">
          Download resume
        </button> */}
        {/* <Link href="#" className="flex justify-center items-center gap-4">
          <span className="p-2 rounded-full border border-border-color bg-background-lighter flex justify-center items-center">
          <ArrowDown size={15} />
          </span>
          <span className="text-xl">Services</span>
        </Link> */}
      </div>
    </div>
  );
};

export default Header;
