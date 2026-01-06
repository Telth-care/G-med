"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { Server, Network, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Distributed Nodes",
    description: "Global network of secure servers ensuring 99.99% uptime",
    step: "01",
  },
  {
    icon: Network,
    title: "Healthcare Zones",
    description: "Regional data centers optimized for local healthcare systems",
    step: "02",
  },
  {
    icon: Shield,
    title: "Root Security",
    description:
      "Multi-layered blockchain protection with zero-knowledge proof",
    step: "03",
  },
  {
    icon: Zap,
    title: "Instant Sync",
    description: "Real-time data synchronization across all network nodes",
    step: "04",
  },
];

export default function TelthRootCloud() {
  return (
    <section
      id="telth-root"
      className="py-24 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-6"
          >
            <span className="text-purple-700 font-semibold">
              Cloud Infrastructure
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Telth Root Cloud™ <span className="text-purple-700">Network</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A globally distributed, blockchain-secured cloud infrastructure
            designed specifically for healthcare data management and real-time
            access.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-blockchain.jpg"
                alt="Global healthcare network infrastructure"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0" />

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-400 rounded-full blur-3xl"
              />

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500 rounded-full blur-3xl"
              />

              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <Network size={80} className="mx-auto mb-4" />
                    <p className="text-2xl font-bold">Global Network</p>
                    <p className="text-purple-200">Connected Healthcare</p>
                  </motion.div>
                </div>
              </div> */}
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-purple-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center shadow-lg">
                        <Icon className="text-white" size={28} />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {feature.title}
                        </h3>
                        <span className="text-3xl font-bold text-purple-200">
                          {feature.step}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-purple-400 origin-left"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        <AnimatedSection>
          <div className="bg-gradient-to-r from-purple-700 to-purple-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <motion.p
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="text-5xl font-bold mb-2"
                >
                  99.99%
                </motion.p>
                <p className="text-purple-200">Uptime Guarantee</p>
              </div>
              <div>
                <motion.p
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl font-bold mb-2"
                >
                  150+
                </motion.p>
                <p className="text-purple-200">Global Data Centers</p>
              </div>
              <div>
                <motion.p
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl font-bold mb-2"
                >
                  &lt;50ms
                </motion.p>
                <p className="text-purple-200">Average Response Time</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
