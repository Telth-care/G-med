'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import { slideInLeft, slideInRight } from '@/lib/animations';
import { Lock, Database, Zap, Globe } from 'lucide-react';

const benefits = [
  {
    icon: Lock,
    title: 'Blockchain Security',
    description: 'Military-grade encryption protecting your medical data',
  },
  {
    icon: Database,
    title: 'Unified Records',
    description: 'All your health information in one secure location',
  },
  {
    icon: Zap,
    title: 'Instant Access',
    description: 'Emergency medical information available in seconds',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Access your health data anywhere in the world',
  },
];

export default function About() {
  return (
    <section id="gmed-id" className="py-2 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-6"
          >
            <span className="text-purple-700 font-semibold">About GMed ID™</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Digital Health <span className="text-purple-700">Identity</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A revolutionary blockchain-powered platform that securely stores and manages your complete medical history,
            accessible instantly by authorized healthcare providers worldwide.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/contact-bg.jpg"
                alt="Blockchain medical records dashboard"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/60 via-purple-700/30 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl"
            >
              <div className="text-center">
                <p className="text-4xl font-bold text-purple-700 mb-1">256-bit</p>
                <p className="text-gray-600">Encryption</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Secure, Accessible, Life-Saving
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              GMed ID™ revolutionizes healthcare by creating a universal digital medical identity.
              Using advanced blockchain technology, we ensure your health information is secure,
              private, and instantly accessible when it matters most.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're traveling abroad, facing an emergency, or consulting a new specialist,
              your complete medical history is always at your fingertips and readily available to
              authorized healthcare providers.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100 hover:border-purple-300 transition-all"
                  >
                    <Icon className="text-purple-700 mb-3" size={32} />
                    <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
