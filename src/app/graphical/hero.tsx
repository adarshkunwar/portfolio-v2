"use client";
import React, { useMemo } from "react";

const Hero = () => {
  // Use useMemo to generate consistent dot positions
  const dots = useMemo(() => {
    return [...Array(200)].map((_, i) => ({
      left: `${(i * 17) % 100}%`, // Use index-based calculation instead of Math.random()
      top: `${(i * 13) % 100}%`, // Use different multiplier to create variation
      delay: `${(i * 0.01) % 2}s`, // Deterministic animation delay
    }));
  }, []);

  return (
    <section className="relative h-screen w-screen bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden font-serif">
      {/* Dots background */}
      <div className="absolute inset-0 opacity-20">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 bg-blue-500 rounded-full animate-pulse"
            style={{
              left: dot.left,
              top: dot.top,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-6">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-5 animate-fade-in">
            <h1 className="text-4xl text-white font-light">
              Hi, I am <span className="text-blue-500 font-medium">Adarsh</span>
            </h1>
            <p className="text-4xl md:text-5xl lg:text-7xl text-white uppercase font-bold tracking-wider">
              A Full Stack Developer
            </p>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-4">
              A developer based in Nepal
            </p>
            <div className="flex gap-4 mt-8 justify-center">
              <button
                onClick={() => console.log("hi")}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-blue-600 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Contact Me
              </button>
              <button className="border-2 border-white/20 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-white/10 hover:scale-105">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
};

export default Hero;
