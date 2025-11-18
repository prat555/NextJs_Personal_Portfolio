'use client'

import { motion } from "framer-motion";

interface Certification {
  title: string;
  provider: string;
  icon: string;
  link?: string;
}

export default function Education() {
  const certifications: Certification[] = [
    {
      title: "Full Stack Web Development Bootcamp",
      provider: "Udemy",
      icon: "fas fa-code",
      link: "https://www.udemy.com/certificate/UC-963f2e49-9e5c-4a62-9c7c-eeb1c08f4ed1/"
    },
    {
      title: "Programming Language Badges",
      provider: "HackerRank (Python, C, C++, Java, SQL)",
      icon: "fas fa-trophy",
      link: "https://www.hackerrank.com/profile/pratg5935"
    },
    {
      title: "Big Data Computing",
      provider: "NPTEL",
      icon: "fas fa-database",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS130S35250991604193537"
    },
    {
      title: "AWS ML Foundations & Cisco Networking",
      provider: "Credly",
      icon: "fas fa-cloud",
      link: "https://www.credly.com/users/pratyush_goutam"
    },
  ];

  return (
    <section id="education" className="pt-8 pb-16 md:py-20 md:pb-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Academic background and professional certifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <i className="fas fa-graduation-cap text-accent"></i>
              Education
            </h3>
            <div className="space-y-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-full"></div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  B.Tech in Computer Science with Business Systems
                </h4>
                <p className="text-accent font-medium">SRM Institute of Science and Technology, KTR</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">June 2022 – May 2026</p>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">CGPA: 8.43/10</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Relevant Coursework: Object Oriented Programming, Databases, Discrete Mathematics,
                  Advanced Data Structures and Algorithms, Operating Systems, Computer Networks,
                  Machine Learning, Information Retrieval
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative pl-8"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-full"></div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  High School Diploma (CBSE)
                </h4>
                <p className="text-accent font-medium">Delhi Public School, Indirapuram</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Completed June 2021</p>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Grade: XII-86% , X-95%</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Coursework: Physics, Chemistry, Mathematics, Computer Science, English
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <i className="fas fa-certificate text-accent"></i>
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      onTouchStart={(e) => e.stopPropagation()}
                      className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-accent/10 dark:hover:bg-accent/20 transition-colors duration-300 group cursor-pointer touch-manipulation"
                    >
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                        <i className={`${cert.icon} text-accent`}></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{cert.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{cert.provider}</p>
                      </div>
                      <i className="fas fa-external-link-alt text-accent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 shrink-0"></i>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                        <i className={`${cert.icon} text-accent`}></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{cert.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{cert.provider}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}