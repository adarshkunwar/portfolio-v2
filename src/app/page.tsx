"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, Monitor } from "lucide-react";

const Starter: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 text-zinc-100 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-zinc-800/[0.04] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 py-16 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 via-zinc-100 to-blue-300 mb-4">
            Portfolio Playground
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-400">
            Explore my digital universe through your preferred interface
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group"
          >
            <Link href="/terminal" className="block">
              <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 text-center transition-all duration-300 group-hover:border-blue-500 group-hover:ring-4 group-hover:ring-blue-500/20">
                <Terminal className="mx-auto mb-4 text-blue-400 w-16 h-16" />
                <h2 className="text-2xl font-bold mb-2 text-zinc-100">
                  Terminal View
                </h2>
                <p className="text-zinc-400 text-sm">
                  A developer-centric, minimalist interface
                </p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group"
          >
            <Link href="/graphical" className="block">
              <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 text-center transition-all duration-300 group-hover:border-blue-500 group-hover:ring-4 group-hover:ring-blue-500/20">
                <Monitor className="mx-auto mb-4 text-blue-400 w-16 h-16" />
                <h2 className="text-2xl font-bold mb-2 text-zinc-100">
                  Graphical View
                </h2>
                <p className="text-zinc-400 text-sm">
                  A visual, design-focused exploration
                </p>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Footer Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-zinc-500 text-sm">
            Select your preferred portfolio experience
          </p>
        </motion.div>
      </div>

      {/* Accent Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-20 rotate-45"></div>
      </div>
    </div>
  );
};

export default Starter;
