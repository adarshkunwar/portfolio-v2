import React from "react";
import { cn } from "@/lib/utils";

interface TerminalProps {
  className?: string;
  hover?: boolean;
}

const Terminal: React.FC<TerminalProps> = ({
  className = "",
  hover = false,
}) => {
  return (
    <div
      className={cn(
        "flex h-full items-center justify-center transition-all duration-200",
        hover ? "scale-110" : "scale-100",
        className,
      )}
    >
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="hover-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="purple" />
            <stop offset="100%" stopColor="red" />
          </linearGradient>
        </defs>
        <style>
          {`
            .terminal-icon {
              fill: ${hover ? "url(#hover-gradient)" : "white"};
              stroke: black;
              stroke-width: 2;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              transition: all 0.3s ease-in-out;
            }
          `}
        </style>
        <path
          className="terminal-icon"
          d={`M3,6v15c0,1.1,0.9,2,2,2h22c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2H5C3.9,4,3,4.9,3,6z`}
        />
        <line className="terminal-icon" x1="3" y1="19" x2="29" y2="19" />
        <line className="terminal-icon" x1="9" y1="29" x2="23" y2="29" />
        <path className="terminal-icon" d="M13,23c0,2.1-0.7,4.6-1.8,6" />
        <path className="terminal-icon" d="M20.8,29c-1.1-1.4-1.8-3.9-1.8-6" />
        <polyline className="terminal-icon" points="7,9 10,12 7,15" />
        <line className="terminal-icon" x1="13" y1="15" x2="17" y2="15" />
      </svg>
    </div>
  );
};

export default Terminal;
