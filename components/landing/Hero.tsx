"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Shield, Globe, HeartPulse } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800">
        <Image
          src="/images/contact-bg.jpg"
          alt="Healthcare Technology"
          fill
          priority
          className="object-cover opacity-30 mix-blend-overlay"
        />
      </div>

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-white"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
          >
            Your Health.
            <br />
            <span className="text-purple-300">Your Identity.</span>
            <br />
            Anywhere.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-purple-100 mb-8 max-w-xl"
          >
            A secure global digital medical ID that gives doctors instant access
            to life-saving information — anytime, anywhere.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-900 font-semibold rounded-full hover:bg-purple-100 transition"
            >
              Get Started <ArrowRight size={18} />
            </a>

            <a
              href="#gmed-id"
              className="inline-flex items-center px-8 py-4 rounded-full border border-purple-300/50 bg-purple-800/40 backdrop-blur text-white hover:bg-purple-700/40 transition"
            >
              Learn More
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-6 pt-8 border-t border-purple-700/50"
          >
            <div className="flex items-center gap-2 text-purple-200 text-sm">
              <Globe size={18} /> Global Coverage
            </div>
            <div className="flex items-center gap-2 text-purple-200 text-sm">
              <Shield size={18} /> Blockchain Secured
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative w-80 md:w-96 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center">
                <HeartPulse className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">GMed ID™</p>
                <p className="text-purple-200 text-sm">
                  Universal Medical Identity
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-purple-100">
              {/* <div className="flex justify-between">
                <span>Blood Group</span>
                <span className="font-medium">O+</span>
              </div>
              <div className="flex justify-between">
                <span>Allergies</span>
                <span className="font-medium">Penicillin</span>
              </div> */}
              <div className="flex justify-between">
                <span>Emergency Contact</span>
                <span className="font-medium">Available</span>
              </div>
            </div>

            <div className="mt-6 h-2 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
