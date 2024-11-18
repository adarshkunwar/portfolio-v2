"use client";
import ComputerCard from "@/pageComponent/ComputerCard";
import TerminalCard from "@/pageComponent/terminalCard";
import { motion } from "framer-motion";
import Link from "next/link";

const Starter: React.FC = () => {
  return (
    <div className="min-h-screen overflow-clip bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-20 space-y-4 text-center">
          <motion.h1
            className="mb-4 text-5xl font-bold tracking-tight text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Welcome to my{" "}
            <span className="bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.h1>
          <motion.h2
            className="mx-auto max-w-2xl text-xl text-gray-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Choose your desired viewing experience to explore my work and
            projects
          </motion.h2>
        </div>

        {/* Cards Section */}
        <div className="relative">
          {/* Decorative elements */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="h-96 w-96 rounded-full bg-purple-100 opacity-50 blur-3xl"></div>
            <div className="-ml-20 h-96 w-96 rounded-full bg-red-100 opacity-50 blur-3xl"></div>
          </motion.div>

          {/* Cards Container */}
          <div className="relative flex flex-col items-center justify-center gap-8 py-12 sm:flex-row">
            <Link href="/terminal">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
              >
                <TerminalCard />
              </motion.div>
            </Link>

            <Link href="/graphical">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
              >
                <ComputerCard />
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Footer Text */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm text-gray-600">
            Click on either option to continue
          </p>
        </motion.div>
      </div>

      {/* Decorative dots */}
      <motion.div
        className="absolute right-0 top-0 -z-10"
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="h-40 w-40 rounded-full bg-gradient-to-br from-purple-100 to-red-100 opacity-20"></div>
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 -z-10"
        initial={{ opacity: 0, rotate: 90 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="h-40 w-40 rounded-full bg-gradient-to-br from-red-100 to-purple-100 opacity-20"></div>
      </motion.div>
    </div>
  );
};

export default Starter;
