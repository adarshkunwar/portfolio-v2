"use client";
import ComputerCard from "@/pageComponent/ComputerCard";
import TerminalCard from "@/pageComponent/terminalCard";
import { motion } from "framer-motion";

const Starter: React.FC = () => {
  return (
    <div className="min-h-screen overflow-clip bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-20">
          <motion.h1
            className="text-5xl font-bold text-gray-900 tracking-tight mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Welcome to my{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-500">
              Portfolio
            </span>
          </motion.h1>
          <motion.h2
            className="text-xl text-gray-600 max-w-2xl mx-auto"
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
            <div className="w-96 h-96 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
            <div className="w-96 h-96 bg-red-100 rounded-full opacity-50 blur-3xl -ml-20"></div>
          </motion.div>

          {/* Cards Container */}
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-8 py-12">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
              <TerminalCard />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
              <ComputerCard />
            </motion.div>
          </div>
        </div>

        {/* Footer Text */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          <p className="text-gray-600 text-sm">
            Click on either option to continue
          </p>
        </motion.div>
      </div>

      {/* Decorative dots */}
      <motion.div
        className="absolute top-0 right-0 -z-10"
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="w-40 h-40 bg-gradient-to-br from-purple-100 to-red-100 rounded-full opacity-20"></div>
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 -z-10"
        initial={{ opacity: 0, rotate: 90 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="w-40 h-40 bg-gradient-to-br from-red-100 to-purple-100 rounded-full opacity-20"></div>
      </motion.div>
    </div>
  );
};

export default Starter;
