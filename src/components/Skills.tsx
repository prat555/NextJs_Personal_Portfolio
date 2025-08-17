  'use client'

  import { motion } from "framer-motion";

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
          { name: "React.js", icon: "fab fa-react" },
          { name: "React Native", icon: "fab fa-react" },
          { name: "Next.js", icon: "fas fa-server" },
          { name: "Node.js", icon: "fab fa-node-js" },
          { name: "Vite", icon: "fas fa-bolt" },
          { name: "Tailwind CSS", icon: "fas fa-palette" },
          { name: "Git", icon: "fab fa-git-alt" },
          { name: "MongoDB", icon: "fas fa-leaf" },
          { name: "MySQL", icon: "fas fa-database" },
          { name: "PostgreSQL", icon: "fas fa-database" },
          { name: "Redis", icon: "fas fa-memory" },
        ],
      },
    ];

    return (
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Proficient in modern web and app development technologies, along with core programming languages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-primary dark:text-white mb-6 flex items-center gap-3">
                  <i className={`${category.icon} text-accent text-xl`}></i>
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
  key={skillIndex}
  initial={{ scale: 0, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.05 }}
  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center hover:bg-accent/10 dark:hover:bg-accent/20 transition-all duration-300"
>
  <i className={`${skill.icon} text-2xl text-accent mb-2 block`}></i>
  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
</motion.div>

                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }