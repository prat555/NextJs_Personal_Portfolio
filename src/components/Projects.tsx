'use client'

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import ecommerceBg from "@/assets/shizuka.png";
import aiBg from "@/assets/ecovision.png";
import neuroBg from "@/assets/nuerorisk.png";
import movieAppBg from "@/assets/movieapp.png";
import foodDeliveryBg from "@/assets/food-delivery-app.png";
import opbg from "@/assets/old-portfolio.png";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  links: {
    github?: string;
    live?: string;
  };
  gradient: string;
  icon: string;
  backgroundImage: StaticImageData;
  category: string;
}

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "Shizuka - Sustainable Ecommerce Platform",
      description:
        "A sustainable shopping platform built with MERN stack, featuring product catalog, cart/wishlist functionality, and JWT-secured checkout process.",
      technologies: ["React", "TailwindCSS", "Node.js", "MongoDB", "Firebase"],
      links: {
        github: "https://github.com/prat555/Shizuka",
        live: "https://shizuka-san.vercel.app/",
      },
      gradient: "from-green-400 to-blue-600",
      icon: "fas fa-shopping-cart",
      backgroundImage: ecommerceBg,
      category: "Web Development",
    },
    {
      title: "Food Delivery App - React Native Expo",
      description:
        "A modern React Native food delivery app with Expo featuring clean UI, seamless payment integration, real-time order tracking, and Appwrite backend.",
      technologies: ["React Native", "Expo", "Appwrite", "Stripe", "Zustand", "Sentry"],
      links: {
        github: "https://github.com/prat555/Food-Delivery-App",
      },
      gradient: "from-orange-400 to-yellow-500",
      icon: "fas fa-utensils",
      backgroundImage: foodDeliveryBg,
      category: "Mobile Development",
    },
    {
      title: "EcoVision - AI Waste Classification and Management",
      description:
        "An AI-powered web application that classifies waste through image recognition, helping users make eco-friendly disposal decisions with a chatbot integrated.",
      technologies: ["React", "Vite", "TypeScript", "DeepSeek R1 API", "PostgreSQL"],
      links: {
        github: "https://github.com/prat555/EcoVision",
        live: "https://ecovisionscan.onrender.com/",
      },
      gradient: "from-blue-400 to-cyan-500",
      icon: "fas fa-camera",
      backgroundImage: aiBg,
      category: "AI/ML",
    },
    {
      title: "Xylo - React Native Movie App made with Expo",
      description:
        "A modern React Native movie app with Expo featuring movie browsing, detailed views, interactive elements like likes and downloads, and a sleek dark theme UI design.",
      technologies: ["React Native", "Expo", "TypeScript", "Redux", "NativeWind"],
      links: {
        github: "https://github.com/prat555/Movie-App",
      },
      gradient: "from-blue-400 to-indigo-500",
      icon: "fas fa-film",
      backgroundImage: movieAppBg,
      category: "Mobile Development",
    },
    {
      title: "NeuroRisk - Drug Risk Prediction Platform",
      description:
        "A machine learning platform that predicts substance use risk based on psychological profiles with interactive data visualizations and persistent PostgreSQL risk tracking.",
      technologies: ["Python", "Numpy", "Streamlit", "Scikit-learn", "PostgreSQL"],
      links: {
        github: "https://github.com/prat555/NueroRisk",
      },
      gradient: "from-orange-400 to-red-500",
      icon: "fas fa-brain",
      backgroundImage: neuroBg,
      category: "AI/ML",
    },
    {
      title: "Personal Portfolio V1 - Classic Web Technologies",
      description:
        "My first portfolio website built with classic web technologies, featuring a clean and responsive design, project showcase, and contact form. Demonstrates proficiency in fundamental web development.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap","Netlify"],
      links: {
        github: "https://github.com/prat555/Old-Portfolio",
        live: "https://pratyushg.netlify.app/",
      },
      gradient: "from-purple-400 to-pink-500",
      icon: "fas fa-code",
      backgroundImage: opbg, 
      category: "Web Development",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4 sm:mb-6"
          >
            Featured <span className="text-gradient bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Showcasing my latest work in web development, mobile apps, and AI integration
          </motion.p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Project Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={project.backgroundImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-xs font-semibold text-gray-800 dark:text-gray-200 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Project Icon */}
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <i className={`${project.icon} text-white text-xl`}></i>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {project.links.github && (
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 bg-gray-500/50 backdrop-blur-sm hover:bg-gray-600/55 text-white rounded-full flex items-center justify-center transition-all duration-300"
                          title="View Code"
                        >
                          <i className="fab fa-github text-sm"></i>
                        </motion.a>
                      )}
                      {project.links.live && (
                        <motion.a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 bg-gray-500/50 backdrop-blur-sm hover:bg-gray-600/55 text-white rounded-full flex items-center justify-center transition-all duration-300"
                          title="Live Demo"
                        >
                          <i className="fas fa-external-link-alt text-sm"></i>
                        </motion.a>
                      )}
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary dark:text-white mb-3 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  {hoveredProject === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-blue-600/5 to-indigo-500/5 rounded-2xl pointer-events-none"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile/Tablet Carousel View */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Carousel 
              className="w-full" 
              opts={{ 
                loop: true,
                align: "center",
              }} 
              plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {projects.map((project, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] sm:basis-[70%] md:basis-1/2">
                    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                      {/* Project Image */}
                      <div className="relative h-44 sm:h-48 overflow-hidden">
                        <Image
                          src={project.backgroundImage}
                          alt={project.title}
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <span className="px-2 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-xs font-semibold text-gray-800 dark:text-gray-200 rounded-full">
                            {project.category}
                          </span>
                        </div>
                        
                        {/* Project Icon */}
                        <div className="absolute bottom-3 left-3">
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <i className={`${project.icon} text-white text-lg`}></i>
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="absolute top-3 right-3 flex gap-2">
                          {project.links.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-300"
                              title="View Code"
                            >
                              <i className="fab fa-github text-xs"></i>
                            </a>
                          )}
                          {project.links.live && (
                            <a
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-300"
                              title="Live Demo"
                            >
                              <i className="fas fa-external-link-alt text-xs"></i>
                            </a>
                          )}
                        </div>
                      </div>
                      
                      {/* Project Content */}
                      <div className="p-4 sm:p-5">
                        <h3 className="text-lg sm:text-xl font-bold text-primary dark:text-white mb-2 line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 3).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700" />
              <CarouselNext className="hidden sm:flex -right-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700" />
            </Carousel>
          </motion.div>
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.a
            href="https://github.com/prat555?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-accent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
          >
            <i className="fab fa-github"></i>
            <span>View All Projects</span>
            <i className="fas fa-arrow-right text-sm"></i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
