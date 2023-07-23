import React from "react";
import Demo from "../demo";
import Intro from "../../../components/ui/intro";

function Hero() {
  return (
    <div className="mt-5  max-w-6xl   mx-auto px-4 grow  ">
      <h1 className="text-4xl  sm:text-5xl md:text-6xl  font-bold  text-white  text-left  md:text-center">
        Instantly Create TypeScript Interfaces from JSON Data
      </h1>
      <Demo />
      <Intro />
    </div>
  );
}

export default Hero;
