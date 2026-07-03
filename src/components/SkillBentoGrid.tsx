"use client";

import { motion, Variants } from "framer-motion";

export default function SkillBentoGrid() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]"
    >
      {/* Hard Skills (Mendominasi 2 kolom) */}
      <motion.div 
        variants={itemVariants}
        className="md:col-span-2 bg-gradient-to-br from-pink-600 to-pink-500 rounded-[2.5rem] p-8 text-white shadow-lg shadow-pink-200 flex flex-col justify-end overflow-hidden relative group"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
        <h3 className="text-3xl font-bold mb-5 relative z-10">Hard Skills</h3>
        <div className="flex flex-wrap gap-2 relative z-10">
          {["Content Creation", "Copywriting", "Social Media Management", "Market Research"].map((skill) => (
            <span key={skill} className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20 hover:bg-white/30 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Fokus Tugas Utama */}
      <motion.div 
        variants={itemVariants}
        className="bg-white rounded-[2.5rem] p-8 border border-pink-100 shadow-sm flex flex-col justify-center hover:shadow-xl hover:shadow-pink-100/50 transition-shadow"
      >
        <h3 className="text-2xl font-bold text-dark mb-3">Fokus Utama</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Pemecahan masalah cepat dalam lingkungan kerja event yang dinamis & optimasi publikasi menggunakan media sosial.
        </p>
      </motion.div>

      {/* Soft Skills (Mendominasi baris penuh) */}
      <motion.div 
        variants={itemVariants}
        className="md:col-span-3 bg-pink-100/50 rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border border-pink-100"
      >
        <div className="md:w-1/3">
          <h3 className="text-3xl font-bold text-dark mb-2">Soft Skills</h3>
          <p className="text-pink-600 font-medium">Kunci utama keberhasilan operasional dan public relations.</p>
        </div>
        <div className="md:w-2/3 flex flex-wrap justify-end gap-3">
          {["Communication", "Adaptability", "Public Relations", "Problem Solving", "Kerja Tim"].map((skill) => (
            <div key={skill} className="bg-white px-6 py-3 rounded-2xl shadow-sm font-bold text-dark text-sm hover:-translate-y-1 hover:text-pink-600 hover:shadow-md transition-all cursor-default">
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
