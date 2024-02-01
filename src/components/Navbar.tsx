"use client";
import React, { useEffect, useState } from "react";
import { PhoneCall } from "lucide-react";

const Navbar = () => {
  const [navbarShadow, setNavbarShadow] = useState(false);

  useEffect(() => {
    if (!window) return;

    window.addEventListener("scroll", () => {
      window.scrollY >= 50 ? setNavbarShadow(true) : setNavbarShadow(false);
    });
  }, []);

  return (
    <div
      className={`w-full flex justify-center items-center fixed py-4 px-16 text-primary-text transition-all duration-700 ${
        navbarShadow && "sticky top-0 z-20 shadow-lg"
      }`}
    >
      <div className="w-auto relative flex-none">
        <div className="flex justify-center items-center gap-6 backdrop-blur-[30px] border border-border-color p-4 bg-background-lighter">
        <div className="text-lg">_datgeek.manu</div>
        <ul className="flex justify-center items-center gap-2">
          {["services", "work", "about", "skills"].map(
            (e, i) => (
              <li key={`${e}-${i}`} className="uppercase text-sm font-light">
                {e}
              </li>
            )
          )}
        </ul>
        <div className="flex justify-center items-center">
          <button className="flex justify-center items-center gap-2 px-4 py-2 rounded-sm bg-primary-btn text-md text-black">
            {/* <PhoneCall /> */}
            <span className="uppercase">Let&apos;s talk</span>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
