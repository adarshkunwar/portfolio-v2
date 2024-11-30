import React from "react";
import Link from "next/link";

const SideBar = () => {
  return (
    <>
      {/* Logo - Top Left */}
      <div className="absolute left-8 top-8 z-50">
        <Link href={"/graphical"} className="text-white text-2xl">
          <span className="text-blue-500">{"<"}</span>
          Adarsh <span className="text-blue-500">{"/>"}</span>
        </Link>
      </div>

      {/* Works - Top Right */}
      <div className="absolute right-8 top-8 z-50">
        <Link href={"/graphical/works"} className="text-white">
          Works
        </Link>
      </div>

      {/* Everything else - Bottom Right */}
      <div className="absolute right-28 top-8 z-50">
        <Link href={"/graphical/about"} className="text-white">
          About
        </Link>
      </div>
    </>
  );
};

export default SideBar;
