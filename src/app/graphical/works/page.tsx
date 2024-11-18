"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

interface ProjectItem {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const workProjects: ProjectItem[] = [
  {
    title: "Work Project 1",
    description: "Professional project description",
    imageUrl: "/placeholder1.jpg",
    link: "#",
  },
  {
    title: "Work Project 2",
    description: "Professional project description",
    imageUrl: "/placeholder2.jpg",
    link: "#",
  },
];

const personalProjects: ProjectItem[] = [
  {
    title: "Personal Project 1",
    description: "Personal project description",
    imageUrl: "/placeholder3.jpg",
    link: "#",
  },
  {
    title: "Personal Project 2",
    description: "Personal project description",
    imageUrl: "/placeholder4.jpg",
    link: "#",
  },
];

const Works = () => {
  const [activeTab, setActiveTab] = useState<"work" | "personal">("work");

  const ProjectGrid = ({ projects }: { projects: ProjectItem[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <a href={project.link} className="block">
            <div className="relative h-48">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          My Projects
        </h1>

        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-gray-800 p-1 rounded-lg">
            <button
              onClick={() => {
                setActiveTab("work");
              }}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                activeTab === "work"
                  ? "bg-blue-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Work Projects
            </button>
            <Button
              onClick={() => setActiveTab("personal")}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                activeTab === "personal"
                  ? "bg-blue-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Personal Projects
            </Button>
          </div>
        </div>

        <div className="mt-8">
          {activeTab === "work" ? (
            <ProjectGrid projects={workProjects} />
          ) : (
            <ProjectGrid projects={personalProjects} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Works;
