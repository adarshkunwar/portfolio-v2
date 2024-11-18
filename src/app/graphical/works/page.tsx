"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectItem {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  technologies?: string[];
}

// Moved projects data outside component to avoid recreation on renders
const PROJECTS_DATA = {
  work: [
    {
      title: "Work Project 1",
      description:
        "Professional project description showcasing enterprise solutions.",
      imageUrl: "/placeholder1.jpg",
      link: "#",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Work Project 2",
      description: "Enterprise-level application with scalable architecture.",
      imageUrl: "/placeholder2.jpg",
      link: "#",
      technologies: ["Next.js", "TypeScript", "AWS"],
    },
    {
      title: "Work Project 3",
      description: "Client-facing dashboard with real-time analytics.",
      imageUrl: "/placeholder1.jpg",
      link: "#",
      technologies: ["Vue.js", "Python", "PostgreSQL"],
    },
  ],
  personal: [
    {
      title: "Personal Project 1",
      description: "Innovative side project exploring new technologies.",
      imageUrl: "/placeholder3.jpg",
      link: "#",
      technologies: ["React Native", "Firebase"],
    },
    {
      title: "Personal Project 2",
      description: "Open-source contribution to the developer community.",
      imageUrl: "/placeholder4.jpg",
      link: "#",
      technologies: ["Svelte", "GraphQL"],
    },
  ],
};

const ProjectCard = ({ project }: { project: ProjectItem }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    whileHover={{ y: -5 }}
    className="bg-gray-800/50 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-gray-700/50"
  >
    <a
      href={project.link}
      className="block"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative h-[30rem] overflow-hidden group">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
        {project.technologies && (
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  </motion.div>
);

const TabButton = ({
  isActive,
  onClick,
  children,
}: {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <motion.button
    onClick={onClick}
    className={`px-6 py-2 rounded-md transition-all duration-300 ${
      isActive
        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
        : "text-gray-400 hover:text-white"
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.button>
);

const Works = () => {
  const [activeTab, setActiveTab] =
    useState<keyof typeof PROJECTS_DATA>("work");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-16 text-center"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient">
            My Projects
          </span>
        </motion.h1>

        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-gray-800/30 p-1 rounded-lg backdrop-blur-sm">
            <TabButton
              isActive={activeTab === "work"}
              onClick={() => setActiveTab("work")}
            >
              Work Projects
            </TabButton>
            <TabButton
              isActive={activeTab === "personal"}
              onClick={() => setActiveTab("personal")}
            >
              Personal Projects
            </TabButton>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {PROJECTS_DATA[activeTab].map((project, index) => (
              <ProjectCard key={project.title + index} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Works;
