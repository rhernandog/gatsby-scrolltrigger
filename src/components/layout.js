import React from "react";
import { Link } from "gatsby";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

import "../styles/global.css";

gsap.registerPlugin(ScrollTrigger);

export default function Layout ({ children }) {
  return (
    <div className="w-full min-h-screen">
      <header className="w-full px-4 flex bg-teal-700 text-white text-xl justify-between items-end h-[70px]">
        <div className="brand text-4xl font-semibold pb-1">EggPlant</div>
        <ul className="flex gap-4">
          <li>
            <Link className="text-cyan-200 px-4 pb-1 hover:text-white" to="/">Home</Link>
          </li>
          <li>
            <Link className="text-cyan-200 px-4 pb-1 hover:text-white" to="/about">About Us</Link>
          </li>
          <li>
            <Link className="text-cyan-200 px-4 pb-1 hover:text-white" to="/contact">Contact</Link>
          </li>
        </ul>
      </header>
      {children}
    </div>
  );
}
