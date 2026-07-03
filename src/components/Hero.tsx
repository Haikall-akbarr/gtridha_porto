"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [-45, 45], [15, -15]);
  const rotateY = useTransform(smoothX, [-45, 45], [-15, 15]);

  useEffect(() => {
    // Gyroscope untuk HP
    const handleOrientation = (e: DeviceOrientationEvent) => {
      let beta = e.beta || 0; // x-axis
      let gamma = e.gamma || 0; // y-axis

      // Batasi sudut maksimal agar tidak terbalik/berputar terlalu ekstrem
      beta = Math.max(-45, Math.min(45, beta));
      gamma = Math.max(-45, Math.min(45, gamma));

      y.set(beta);
      x.set(gamma);
    };

    // Mouse movement untuk Desktop
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const offsetX = ((e.clientX - centerX) / centerX) * 45;
      const offsetY = ((e.clientY - centerY) / centerY) * 45;

      x.set(offsetX);
      y.set(-offsetY); // Invert axis untuk feel alami
    };

    if (typeof window !== "undefined") {
      if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", handleOrientation);
      }
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (typeof window !== "undefined") {
        if (window.DeviceOrientationEvent) {
          window.removeEventListener("deviceorientation", handleOrientation);
        }
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [x, y]);

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
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-dark tracking-tighter leading-[1.1]">
          Hi, I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700">
            Gusti Ridha
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 md:max-w-lg leading-relaxed">
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

      {/* Container Gambar dengan Efek Parallax (Gyro & Mouse) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex-1 w-full max-w-sm md:max-w-md"
        style={{ perspective: 1000 }} // Tambahkan perspective agar efek 3D terlihat
      >
        <motion.div 
          style={{ rotateX, rotateY }} // Aplikasikan orientasi rotasi X dan Y
          className="aspect-square bg-gradient-to-tr from-pink-200 to-pink-100 rounded-[3rem] p-4 shadow-xl hover:shadow-2xl transition-shadow duration-500 ease-out"
        >
          <div className="w-full h-full bg-white rounded-[2.5rem] flex items-center justify-center border border-pink-50 overflow-hidden relative">
            <Image 
              src="/assets/gtrd_foto.jpg"
              alt="Gusti Ridha"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
