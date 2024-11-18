"use client";
import ComputerCard from "@/pageComponent/ComputerCard";
import TerminalCard from "@/pageComponent/terminalCard";
import Link from "next/link";

const Starter: React.FC = () => {
  return (
    <div className="min-h-screen overflow-clip bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-20 space-y-4 text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900">
            Welcome to my{" "}
            <span className="bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <h2 className="mx-auto max-w-2xl text-xl text-gray-600">
            Choose your desired viewing experience to explore my work and
            projects
          </h2>
        </div>

        {/* Cards Section */}
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-96 w-96 rounded-full bg-purple-100 opacity-50 blur-3xl"></div>
            <div className="-ml-20 h-96 w-96 rounded-full bg-red-100 opacity-50 blur-3xl"></div>
          </div>

          {/* Cards Container */}
          <div className="relative flex flex-col items-center justify-center gap-8 py-12 sm:flex-row">
            <Link href="/terminal">
              <div>
                <TerminalCard />
              </div>
            </Link>

            <Link href="/graphical">
              <div>
                <ComputerCard />
              </div>
            </Link>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-600">
            Click on either option to continue
          </p>
        </div>
      </div>

      {/* Decorative dots */}
      <div className="absolute right-0 top-0 -z-10">
        <div className="h-40 w-40 rounded-full bg-gradient-to-br from-purple-100 to-red-100 opacity-20"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10">
        <div className="h-40 w-40 rounded-full bg-gradient-to-br from-red-100 to-purple-100 opacity-20"></div>
      </div>
    </div>
  );
};

export default Starter;
