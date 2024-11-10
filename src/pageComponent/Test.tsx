"use client";

import { useState } from "react";

// dont use this..
const Test = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="bg-red-300 w-96 h-96"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? "is hovered" : "not hovered"}

      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full bg-red-100"
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
                  stroke-width: 1;
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
  );
};

export default Test;
