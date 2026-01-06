'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { User, Building2, Landmark } from 'lucide-react';

const audiences = [
  {
    // icon: User,
    title: 'Individuals',
    description: 'Take control of your health data with a secure, portable digital medical ID accessible from your smartphone.',
    features: ['Instant medical history access', 'Emergency information ready', 'Travel with confidence', 'Share with any provider'],
    image: '/images/audience-individual.jpg',
  },
  {
    // icon: Building2,
    title: 'Care Providers',
    description: 'Access comprehensive patient histories instantly, make informed decisions, and deliver better care outcomes.',
    features: ['Complete patient records', 'Real-time updates', 'Secure data sharing', 'Reduced paperwork'],
    image: '/images/spec-pediatrics.jpg',
  },
  {
    // icon: Landmark,
    title: 'Governments',
    description: 'Build a robust national healthcare infrastructure with secure, interoperable digital health identity systems.',
    features: ['National health database', 'Public health insights', 'Emergency preparedness', 'Cost reduction'],
    image: '/images/audience-government.jpg',
  },
];

export default function WhoItsFor() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-6"
          >
            <span className="text-purple-700 font-semibold">Who We Serve</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Healthcare for <span className="text-purple-700">Everyone</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            GMed ID™ serves individuals, healthcare providers, and governments with tailored
            solutions for every healthcare need.
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16"
        >
          {audiences.map((audience, index) => {
            // const Icon = audience.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
                  >
                    <Image
                      src={audience.image}
                      alt={audience.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0" />

                  </motion.div>
                </div>

                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {audience.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {audience.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      {audience.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-purple-600 rounded-full" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* <motion.button
                      whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(126, 34, 206, 0.3)' }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-semibold rounded-full hover:shadow-2xl transition-all"
                    >
                      Learn More
                    </motion.button> */}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
