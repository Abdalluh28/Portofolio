'use client'

import Background from "./components/BackGround/BackGround";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/Home";
import About from "./components/About";
import SideBar from "./components/SideBar";
import { useState } from "react";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies";

export default function Home() {

  let [isBlured, setIsBlured] = useState(false);

  let handleToggle = (isCollapsed: boolean) => {
    setIsBlured(isCollapsed);
  }

  return (
    <>
      <Background />
      <div className="relative">
        <div className="sticky top-0 z-10">
          <NavBar onToggle={handleToggle} />
        </div>
        <div className={`flex flex-row relative ${isBlured? 'blur-sm' : ''} `}>
          <div className="w-[58px] pt-2 pb-4 pr-5 translate-y-24 sticky top-24 h-screen hidden lg:flex z-50">
            <SideBar />
          </div>
          <div className="flex justify-center lg:basis-5/6 basis-[100%]">
            <div className="flex-col w-full">
              <HomePage />
              <About />
              <Projects />
              <Technologies />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
