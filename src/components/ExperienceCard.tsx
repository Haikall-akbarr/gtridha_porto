"use client";

import { motion } from "framer-motion";

interface Experience {
  role: string;
  event: string;
  period: string;
  tasks: string[];
}

export default function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-pink-100 hover:shadow-2xl hover:shadow-pink-100/50 transition-all duration-300 group"
    >
      <div className="flex flex-col h-full justify-between space-y-6">
        <div>
          <span className="inline-block px-3 py-1 bg-pink-50 text-xs font-bold tracking-wider text-pink-600 rounded-full mb-4">
            {experience.period}
          </span>
          <h3 className="text-2xl font-bold text-dark group-hover:text-pink-600 transition-colors leading-tight">
            {experience.role}
          </h3>
          <p className="text-gray-500 font-medium mt-1 mb-6">{experience.event}</p>
          <ul className="space-y-4">
            {experience.tasks.map((task, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="text-pink-500 mt-1">✦</span>
                <span className="leading-relaxed">{task}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
