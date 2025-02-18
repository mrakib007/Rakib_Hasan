import { motion } from 'framer-motion';
import { 
  Code2, 
  Blocks, 
  Server, 
  FileCode, 
  Layers, 
  Database, 
  FileJson, 
  Palette, 
  PaintBucket, 
  LayoutGrid, 
  Square, 
  Frame, 
  Component, 
  GitBranch 
} from 'lucide-react';

const skillsData = [
  { name: 'JavaScript', icon: <Code2 className="w-5 h-5" /> },
  { name: 'ReactJs', icon: <Blocks className="w-5 h-5" /> },
  { name: 'NodeJs', icon: <Server className="w-5 h-5" /> },
  { name: 'TypeScript', icon: <FileCode className="w-5 h-5" /> },
  { name: 'Redux', icon: <Layers className="w-5 h-5" /> },
  { name: 'Tanstack Query', icon: <Database className="w-5 h-5" /> },
  { name: 'HTML5', icon: <FileJson className="w-5 h-5" /> },
  { name: 'CSS3', icon: <Palette className="w-5 h-5" /> },
  { name: 'Tailwind CSS', icon: <PaintBucket className="w-5 h-5" /> },
  { name: 'Bootstrap 5', icon: <LayoutGrid className="w-5 h-5" /> },
  { name: 'Material UI', icon: <Square className="w-5 h-5" /> },
  { name: 'Framer Motion', icon: <Frame className="w-5 h-5" /> },
  { name: 'Shadcn', icon: <Component className="w-5 h-5" /> },
  { name: 'Git', icon: <GitBranch className="w-5 h-5" /> }
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-heading font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg"
          >
            A comprehensive collection of technologies and tools I specialize in
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            whileInView="show"
          >
            {skillsData.map((skill) => (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="group relative"
              >
                <div className="relative overflow-hidden bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg 
                             hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1
                             border border-gray-100 dark:border-gray-700">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 
                                transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  
                  <div className="flex items-center gap-3">
                    <span className="text-blue-600 dark:text-blue-400">{skill.icon}</span>
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 
                                 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;