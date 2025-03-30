import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { projects } from '../config/data';

const Projects = () => {
  const { isDarkMode } = useTheme();

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen py-20 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto">
        <h2 className={`text-4xl font-heading font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Featured Projects
        </h2>

        <div className="max-w-6xl mx-auto space-y-20">
          {projects?.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={`relative overflow-hidden rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 ${isDarkMode ? 'bg-gray-900/60' : 'bg-white/60'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6`}>
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-accent/90 text-white hover:bg-accent transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </a>
                  )}
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'md:order-1 md:text-left' : 'md:order-2 md:text-left'}`}>
                <h3 className={`text-2xl font-heading font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                <p className="text-accent mb-4">{project.period}</p>

                <ul className={`space-y-2 mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
