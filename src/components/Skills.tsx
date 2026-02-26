'use client'

import { motion, Variants } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "fas fa-code",
    skills: [
      { name: "Python", icon: "fab fa-python" },
      { name: "JavaScript", icon: "fab fa-js-square" },
      { name: "TypeScript", icon: "fab fa-js-square" },
      { name: "Java", icon: "fab fa-java" },
      { name: "C", icon: "fas fa-code" },
      { name: "C++", icon: "fas fa-code" },
      { name: "Go", icon: "fas fa-code" },
      { name: "SQL", icon: "fas fa-database" },
    ],
  },
  {
    title: "Technologies & Frameworks",
    icon: "fas fa-cogs",
    skills: [
      { name: "Node.js", icon: "fab fa-node-js" },
      { name: "Next.js", icon: "fas fa-server" },
      { name: "React Native", icon: "fab fa-react" },
      { name: "PostgreSQL", icon: "fas fa-database" },
      { name: "Git", icon: "fab fa-git-alt" },
      { name: "MongoDB", icon: "fas fa-leaf" },
      { name: "MySQL", icon: "fas fa-database" },
      { name: "Redis", icon: "fas fa-memory" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "fas fa-tools",
    skills: [
      { name: "Docker", icon: "fab fa-docker" },
      { name: "AWS", icon: "fab fa-aws" },
      { name: "Figma", icon: "fab fa-figma" },
      { name: "Jira", icon: "fas fa-tasks" },
      { name: "Linux", icon: "fab fa-linux" },
      { name: "VS Code", icon: "fas fa-laptop-code" },
    ],
  },
  {
    title: "Soft Skills & Other Competencies",
    icon: "fas fa-brain",
    skills: [
      { name: "Problem Solving", icon: "fas fa-lightbulb" },
      { name: "Time Management", icon: "fas fa-clock" },
      { name: "Agile Methodology", icon: "fas fa-project-diagram" },
      { name: "Teamwork", icon: "fas fa-users" },
      { name: "Leadership", icon: "fas fa-user-tie" },
    ],
  },
];


  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { 
        type: "spring" as const, 
        stiffness: 300, 
        damping: 20 
      } 
    },
    hover: { 
      scale: 1.1, 
      rotate: 5, 
      transition: { 
        type: "spring" as const, 
        stiffness: 300 
      } 
    },
  };

  return (
    <section id="skills" aria-label="Skills and Technologies" className="pt-8 pb-16 md:py-20 md:pb-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Proficient in modern web and app development technologies, along with core programming languages
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                category.title === "Soft Skills & Other Competencies" ? "hidden lg:block" : ""
              }`}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <i className={`${category.icon} text-accent text-xl`}></i>
                {category.title}
              </h3>
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                    whileHover="hover"
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center hover:bg-accent/10 dark:hover:bg-accent/20 transition-all duration-300 cursor-pointer"
                  >
                    <i className={`${skill.icon} text-2xl text-accent mb-2 block`}></i>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
