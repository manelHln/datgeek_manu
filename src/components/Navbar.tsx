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
      className={`flex justify-between items-center py-4 px-16 bg-white transition-all duration-700 ${
        navbarShadow && "sticky top-0 z-20 shadow-lg"
      }`}
    >
      <div>_datgeek.manu</div>
      <ul className="flex justify-center items-center gap-4">
        {["home", "about", "skills", "portfolio", "testimonials"].map(
          (e, i) => (
            <li key={`${e}-${i}`} className="text-md font-semibold capitalize">
              {e}
            </li>
          )
        )}
      </ul>
      <div className="flex justify-center items-center">
        <button className="flex justify-center items-center gap-2 px-4 py-3 rounded-md bg-red-400 text-md text-white font-semibold">
          <PhoneCall />
          <span>Get in touch</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
