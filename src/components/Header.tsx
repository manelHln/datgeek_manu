import React from "react";
import { Rufina } from "next/font/google";

const rufina = Rufina({ subsets: ["latin"], weight: "700" });

const Header = () => {
  return (
    <div className="min-h-screen bg-slate-200 flex flex-col pt-24 px-16">
      <p className="text-lg text-red-500 mb-6">👋 Hey, I&apos;m,</p>
      <p
        className={`text-custom-dark-blue text-6xl font-bold mb-3 ${rufina.className}`}
      >
        Emmanuel Holonou
      </p>
      <p
        className={`text-custom-dark-blue text-6xl font-bold mb-6 ${rufina.className}`}
      >
        Software Engineer
      </p>
      <p className="text-md max-w-[50%] text-slate-700 leading-[1.8] mb-6">
        I&apos;m passionate about creating innovative web experiences and
        optimizing backend systems. With a strong foundation in software
        development and a deep desire to continuously learn and grow, I&apos;m
        proficient in a variety of web development technologies including
        JavaScript and Java.
      </p>

      <div className="flex gap-4 items-center">
        <button className="flex justify-center items-center gap-2 px-4 py-3 rounded-md bg-red-400 text-md text-white font-semibold">
          Download resume
        </button>
        <button className="flex justify-center items-center gap-2 px-4 py-3 rounded-md border border-red-300 text-md text-slate-700 font-semibold">
          Contact / Hire me
        </button>
      </div>
    </div>
  );
};

export default Header;
