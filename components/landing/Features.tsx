"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

/**
 * Feature data
 * Images MUST live inside /public/images/
 * Use string paths — DO NOT import from /public
 */
const features = [
  {
    title: "Successful Treatment",
    description:
      "Real-time access to patient history enables better outcomes and faster recovery through informed decisions.",
    image: "/images/feature-treatment.jpg",
    alt: "Patient recovery scene with doctor reviewing digital health records",
  },
  {
    title: "Advanced Sugar Patch Test",
    description:
      "Non-invasive glucose monitoring through cutting-edge wearable sensor technology for continuous health insights.",
    image: "/images/feature-sensor.jpg",
    alt: "Wearable medical sensor patch for glucose monitoring",
  },
  {
    title: "Telth Chips",
    description:
      "Embedded health microchips that store vital medical information, accessible in emergency situations worldwide.",
    image: "/images/feature-chip.jpg",
    alt: "Embedded health microchip with glowing circuits",
  },
  {
    title: "Advanced Research",
    description:
      "AI-powered medical research labs driving the next generation of healthcare innovations and treatments.",
    image: "/images/feature-research.jpg",
    alt: "Medical AI research laboratory with holographic screens",
  },
  {
    title: "Smart Integrated Technologies",
    description:
      "A connected healthcare ecosystem where devices, hospitals, and patients communicate seamlessly.",
    image: "/images/feature-smart.jpg",
    alt: "Connected healthcare ecosystem visualization",
  },
];

/**
 * Feature Card Component
 */
function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm hover:shadow-lg transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={feature.image}
          alt={feature.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div className="absolute inset-0 bg-purple-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
          {feature.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Top animated bar */}
      <div className="absolute top-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-purple-700 via-purple-500 to-purple-300 transition-transform duration-500 group-hover:scale-x-100" />
    </motion.div>
  );
}

/**
 * Features Section
 */
export default function FeaturesSection() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section className="bg-purple-50/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-purple-700/10 px-4 py-1.5 text-sm font-medium text-purple-700">
            Our Innovations
          </span>

          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Transforming Healthcare with{" "}
            <span className="bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent">
              Technology
            </span>
          </h2>

          <p className="text-lg text-gray-600">
            Discover how GMed ID™ is revolutionizing patient care with
            cutting-edge solutions designed for the future of medicine.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
