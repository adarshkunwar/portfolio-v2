"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const dots = useMemo(() => {
    return [...Array(200)].map((_, i) => ({
      left: `${(i * 17) % 100}%`,
      top: `${(i * 13) % 100}%`,
      delay: `${(i * 0.01) % 2}s`,
    }));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const dotVariants = {
    animate: (i: number) => ({
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: (i * 0.01) % 2,
      },
    }),
  };

  return (
    <section className="relative h-screen w-screen bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden font-serif">
      {/* Animated dots background */}
      <div className="absolute inset-0 opacity-20">
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={dotVariants}
            animate="animate"
            className="absolute h-2 w-2 bg-blue-500 rounded-full"
            style={{
              left: dot.left,
              top: dot.top,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col items-center text-center">
          <div className="space-y-5">
            <motion.h1
              variants={itemVariants}
              className="text-4xl text-white font-light"
            >
              Hi, I am{" "}
              <motion.span
                className="text-blue-500 font-medium inline-block"
                animate={{
                  color: ["#3B82F6", "#60A5FA", "#3B82F6"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Adarsh
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl text-white uppercase font-bold tracking-wider"
            >
              A Full Stack Developer
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-4"
            >
              A developer based in Nepal
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 mt-8 justify-center"
            >
              <Link href={"/graphical/contact"}>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-blue-500/25"
                >
                  Contact Me
                </motion.button>
              </Link>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="border-2 border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10"
              >
                Download CV
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
};

export default Hero;
