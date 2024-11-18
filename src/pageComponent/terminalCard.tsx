"use client";
import * as React from "react";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";

const TerminalCard = () => {
  const [hover, setHover] = useState(false);
  return (
    <Card
      className={cn(
        "w-[350px] cursor-pointer transition-all duration-300",
        hover ? "-translate-y-1 transform shadow-lg" : "shadow-md",
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <CardHeader className="space-y-4">
        <div
          className={cn(
            "flex flex-col items-center justify-center space-y-6 transition-all duration-200",
            hover ? "scale-105" : "scale-100",
          )}
        >
          <div className="relative h-48 w-48">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <defs>
                <linearGradient
                  id="terminal-hover-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#EF4444" />
                </linearGradient>
              </defs>
              <style>
                {`
                  .terminal-icon {
                    fill: ${hover ? "url(#terminal-hover-gradient)" : "white"};
                    stroke: ${hover ? "#1F2937" : "#374151"};
                    stroke-width: 1.5;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 10;
                    transition: all 0.3s ease-in-out;
                  }
                `}
              </style>
              <path
                className="terminal-icon"
                d="M3,6v15c0,1.1,0.9,2,2,2h22c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2H5C3.9,4,3,4.9,3,6z"
              />
              <polyline className="terminal-icon" points="7,9 10,12 7,15" />
              <line className="terminal-icon" x1="13" y1="15" x2="17" y2="15" />
            </svg>
          </div>

          {/* Text content */}
          <div className="space-y-2 text-center">
            <h2
              className={cn(
                "text-2xl font-bold tracking-tight transition-colors duration-200",
                hover ? "text-purple-600" : "text-gray-900",
              )}
            >
              With Commands
            </h2>
          </div>
        </div>
      </CardHeader>

      {/* Bottom accent line */}
      <div
        className={cn(
          "h-1 w-full rounded-b-lg transition-all duration-300",
          hover ? "bg-gradient-to-r from-purple-600 to-red-500" : "bg-gray-200",
        )}
      />
    </Card>
  );
};

export default TerminalCard;
