"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  return (
    <section className="space-y-8">
      <div className="text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-dark tracking-tight">Beauty & Lifestyle</h2>
        <p className="text-pink-600 mt-3 font-medium text-lg">Cuplikan dari Instagram @gtridhaln</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {/* Video Player */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 rounded-[2.5rem] overflow-hidden shadow-sm border border-pink-100 relative group"
        >
          <video 
            src="/assets/ig_video.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 to-transparent flex items-end p-8">
            <p className="text-white font-semibold text-lg drop-shadow-md">Beauty Highlights</p>
          </div>
        </motion.div>

        {/* Photo 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-[2.5rem] overflow-hidden shadow-sm border border-pink-100 relative group"
        >
          <div className="w-full h-full bg-pink-100 flex items-center justify-center relative">
            <Image 
              src="/assets/ig_photo1.jpg" 
              alt="Instagram Post 1" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </motion.div>
        
        {/* Photo 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-[2.5rem] overflow-hidden shadow-sm border border-pink-100 relative group"
        >
          <div className="w-full h-full bg-pink-100 flex items-center justify-center relative">
            <Image 
              src="/assets/ig_photo2.jpg" 
              alt="Instagram Post 2" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </motion.div>

        {/* Photo 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2 rounded-[2.5rem] overflow-hidden shadow-sm border border-pink-100 relative group"
        >
          <div className="w-full h-full bg-pink-100 flex items-center justify-center relative">
            <Image 
              src="/assets/ig_photo3.jpg" 
              alt="Instagram Post 3" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
