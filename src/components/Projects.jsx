import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const projects = [
  {
    title: 'YourEpub',
    period: 'August 2024 - Present',
    description: [
      'Interactive & Multimedia Integration: Developed MCQs, hyperlinks, and forms. Integrated audio, video, and high-quality images for immersive reading.',
      'Multi-Page Navigation & Content Structuring: Built multi-page architecture and refined content tools for smooth EPUB creation.',
      'PWA & Offline Capabilities: Added offline functionality and optimized caching strategies.',
      'Text-to-Speech (TTS) Enhancements: Customized TTS voice options for better accessibility.',
      'Accessibility & Compliance: Ensured ARIA roles and screen-reader compatibility.',
      'User Experience & Design Improvements: Enhanced real-time layout preview for intuitive EPUB creation.'
    ],
    technologies: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion', 'IndexedDB'],
    links: {
      github: '#',
      live: '#'
    },
    image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=YourEpub'
  },
  {
    title: 'Check Me',
    period: 'July 2024 - September 2024',
    description: [
      'Three Panels: Includes School, Teacher, and Student panels for comprehensive management.',
      'Textbook Provision: Schools supply textbooks; Teachers create assessments based on these textbooks and skills.',
      'Student Engagement: Students participate in assessments and track their progress, supported by the system used across 40,000 schools in Japan.'
    ],
    technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI', 'Redux Toolkit'],
    links: {
      github: '#',
      live: '#'
    },
    image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Check+Me'
  },
  {
    title: 'Customer Relationship Management (CRM)',
    period: 'August 2024 - Present',
    description: [
      'CRM Development: Designing and developing a CRM system to optimize client interactions and streamline sales processes',
      'Enhanced Strategies: Implementing features to improve sales and marketing strategies and boost customer support.',
      'Data Integration: Centralizing data to facilitate better decision-making and effective relationship management.'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'TanStack Query', 'Chakra UI'],
    links: {
      github: '#',
      live: '#'
    },
    image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=CRM+System'
  }
];

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
          {projects.map((project, index) => (
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
                  <a
                    href={project.links.github}
                    className="p-3 rounded-full bg-accent/90 text-white hover:bg-accent transition-colors"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a
                    href={project.links.live}
                    className="p-3 rounded-full bg-accent/90 text-white hover:bg-accent transition-colors"
                  >
                    <FaExternalLinkAlt className="text-xl" />
                  </a>
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
