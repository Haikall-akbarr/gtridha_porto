"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-16 mt-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 space-y-8"
      >
        <div className="inline-block px-5 py-2 bg-pink-100 rounded-full text-pink-600 text-sm font-bold tracking-widest uppercase">
          Digital Marketer & Beauty Enthusiast
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-dark tracking-tighter leading-[1.1]">
          Hi, I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700">
            Gusti Ridha
          </span>
        </h1>
        <p className="text-xl text-gray-600 md:max-w-lg leading-relaxed">
          Mahasiswa Bisnis Digital dengan pengalaman praktis dalam manajemen event dan koordinasi sponsorship.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#experience" 
            className="px-8 py-4 bg-pink-600 text-white rounded-full font-semibold shadow-lg shadow-pink-300 hover:bg-pink-700 transition-colors"
          >
            Lihat Portofolio
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:hellogtridha@example.com" 
            className="px-8 py-4 bg-white text-pink-600 rounded-full font-semibold shadow-sm border border-pink-200 hover:bg-pink-50 transition-colors"
          >
            Hubungi Saya
          </motion.a>
        </div>
      </motion.div>

      {/* Decorative Image Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex-1 w-full max-w-sm md:max-w-md"
      >
        <div className="aspect-square bg-gradient-to-tr from-pink-200 to-pink-100 rounded-[3rem] p-4 rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
          <div className="w-full h-full bg-white rounded-[2.5rem] shadow-sm flex items-center justify-center border border-pink-50 overflow-hidden relative">
            <Image 
              src="/assets/gtrd_foto.jpg"
              alt="Gusti Ridha"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
