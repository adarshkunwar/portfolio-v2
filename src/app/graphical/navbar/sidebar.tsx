import React from "react";

const SideBar = () => {
  return (
    <div className="fixed w-screen h-screen  z-50">
      <div className="relative w-full h-full p-8">
        {/* Logo - Top Left */}
        <div className="absolute left-8 top-8">
          <div className="text-white text-2xl">
            <span className="text-blue-500">{"<"}</span>
            Adarsh <span className="text-blue-500">{"/>"}</span>
          </div>
        </div>

        {/* Works - Top Right */}
        <div className="absolute right-8 top-8">
          <div className="text-white">Works</div>
        </div>

        {/* Everything else - Bottom Right */}
        <div className="absolute right-8 bottom-8">
          <div className="text-white">everything else</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
