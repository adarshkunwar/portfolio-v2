"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor in Computer Application",
      institution: "Tribhuwan University",
      location: "Nepal",
      duration: "2020 - present",
      gpa: "-",
      highlights: [
        "Data Structures & Algorithms",
        "Web Development",
        "Computer Networking",
        "Database Management",
      ],
    },
    {
      degree: "Higher Secondary Education",
      institution: "Kalika Manavyan Secondary School",
      location: "Butwal, Nepal",
      duration: "2018-2020",
      gpa: "A+",
      highlights: ["Computer Science", "Mathematics", "Physics"],
    },
  ];

  return (
    <div className="bg-zinc-900 text-zinc-100 min-h-screen flex items-center justify-center py-16 px-4">
      <div className="max-w-4xl w-full space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <GraduationCap className="w-10 h-10 text-blue-400" />
            <h2 className="text-4xl font-bold text-white">Education</h2>
          </div>
          <div className="h-1 w-24 bg-blue-500 mx-auto rounded"></div>
        </motion.div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-zinc-800 rounded-xl shadow-2xl p-6 border border-zinc-700 hover:border-blue-500 transition-all"
            >
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-1 flex flex-col justify-center text-zinc-400">
                  <div className="flex items-center mb-2">
                    <Calendar className="mr-2 w-5 h-5 text-blue-400" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 w-5 h-5 text-blue-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <h4 className="text-xl text-zinc-300 mb-4">
                    {edu.institution}
                  </h4>
                  <div className="mb-4 text-zinc-400">GPA: {edu.gpa}</div>

                  <div>
                    <h5 className="text-white mb-3 font-medium">Key Courses</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, hIndex) => (
                        <span
                          key={hIndex}
                          className="bg-zinc-700 text-blue-300 px-3 py-1 rounded-full text-sm hover:bg-blue-900 transition-colors"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
