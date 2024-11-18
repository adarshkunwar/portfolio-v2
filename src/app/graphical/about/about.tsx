"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "TypeScript", icon: "📘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Docker", icon: "🐳" },
    { name: "Next.js", icon: "▲" },
    { name: "AWS", icon: "☁️" },
    { name: "Git", icon: "📦" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      },
    },
  };

  return (
    <div
      data-testid="about"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black px-4 py-24 sm:px-6 lg:px-8"
    >
      <motion.div
        className="mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-20 text-center">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 rounded bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="space-y-6 text-gray-300">
              <motion.p
                variants={itemVariants}
                data-testid="bio-intro"
                className="text-lg leading-relaxed"
              >
                Hi! I&apos;m a passionate developer with 3+ years of experience
                in creating modern web applications. I specialize in React,
                Node.js, and cloud technologies.
              </motion.p>

              <motion.p
                variants={itemVariants}
                data-testid="bio-detail"
                className="text-lg leading-relaxed"
              >
                My journey in tech started with a curiosity about how things
                work on the web. Today, I&apos;m dedicated to building
                user-centric applications that solve real-world problems while
                maintaining clean, efficient code.
              </motion.p>

              <motion.p
                variants={itemVariants}
                data-testid="bio-interests"
                className="text-lg leading-relaxed"
              >
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to open-source projects, or sharing
                my knowledge through technical writing.
              </motion.p>
            </div>

            {/* Skills Section */}
            <motion.div variants={itemVariants} className="mt-12">
              <h4 className="mb-6 text-xl font-semibold text-white">
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-4" data-testid="skills-list">
                {skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="rounded-xl bg-gray-800/50 px-5 py-2.5 text-sm text-gray-300 border border-gray-700/50 backdrop-blur-sm flex items-center gap-2 hover:border-blue-500/50 transition-colors duration-300"
                  >
                    <span>{skill.icon}</span>
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20 transform rotate-6"></div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50"
              >
                <Image
                  src="/adarsh.png"
                  alt="Profile"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  width={600}
                  height={750}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-40"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
