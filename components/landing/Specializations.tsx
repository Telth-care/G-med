'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const specializations = [
  {
    name: 'Primary Care',
    description: 'Comprehensive family healthcare services for all ages',
    image: '/images/spec-primary.jpg',
  },
  {
    name: 'Physical Therapy',
    description: 'Rehabilitation and recovery programs tailored to you',
    image: '/images/spec-therapy.jpg',
  },
  {
    name: 'Dental Surgery',
    description: 'Advanced dental care with modern technology',
    image: '/images/spec-dental.jpg',
  },
  {
    name: 'Pediatrics',
    description: 'Specialized care for infants, children, and adolescents',
    image: 'https://images.pexels.com/photos/8460361/pexels-photo-8460361.jpeg',
  },
  {
    name: 'Eye Care',
    description: 'Comprehensive vision and eye health services',
    image: '/images/spec-eyecare.jpg',
  },
  {
    name: 'Emergency Care',
    description: '24/7 critical care and emergency response',
    image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg',
  },
];

export default function Specializations() {
  return (
    <section className="py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-6"
          >
            <span className="text-purple-700 font-semibold">Medical Specializations</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="text-purple-700">Healthcare</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access specialized medical care across all disciplines, integrated seamlessly
            with your digital health profile.
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {specializations.map((specialization, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={specialization.image}
                    alt={specialization.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="text-2xl font-bold mb-2"
                  >
                    {specialization.name}
                  </motion.h3>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                    className="text-purple-100"
                  >
                    {specialization.description}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* <AnimatedSection className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(126, 34, 206, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-semibold rounded-full hover:shadow-2xl transition-all"
          >
            View All Specializations
          </motion.button>
        </AnimatedSection> */}
      </div>
    </section>
  );
}
