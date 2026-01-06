'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Quote } from 'lucide-react';

export default function FounderMessage() {
  return (
    <section className="py-2 bg-white relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-6"
          >
            <span className="text-purple-700 font-semibold">Message from Our Founder</span>
          </motion.div>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-100"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-purple-700 to-purple-900 rounded-2xl flex items-center justify-center shadow-xl"
          >
            <Quote className="text-white" size={32} />
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-6"
          >
            <p className="text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed mb-8 italic">
              "Healthcare is a fundamental human right. Our mission is to ensure that
              every person, regardless of location or circumstance, has instant access
              to their medical information when it matters most. GMed ID™ represents
              our commitment to saving lives through technology."
            </p>

            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="text-xl font-bold text-gray-900"
              >
                Dr. Sarah Johnson
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="text-purple-700 font-semibold"
              >
                Founder & CEO, GMed ID™
              </motion.p>
            </div>
          </motion.blockquote>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mt-8 rounded-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-12 grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
            <p className="text-4xl font-bold text-purple-700 mb-2">15+</p>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
            <p className="text-4xl font-bold text-purple-700 mb-2">50M+</p>
            <p className="text-gray-600">Lives Impacted</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
            <p className="text-4xl font-bold text-purple-700 mb-2">120+</p>
            <p className="text-gray-600">Countries Served</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
