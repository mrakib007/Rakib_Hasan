import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaBriefcase, 
  FaGraduationCap, 
  FaCode,
  FaRegLightbulb
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { education, experience } from '../config/data';

const About = () => {
  const { isDarkMode } = useTheme();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120 }
    }
  };

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={`min-h-screen py-28 px-4 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
      }`}
    >
      <div className="container mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        <motion.h2 
          variants={itemVariants}
          className={`text-5xl font-heading font-bold text-center mb-16 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          About Me
          <div className="inline-block ml-4 text-accent">
            <FaRegLightbulb className="inline-block animate-pulse" />
          </div>
        </motion.h2>
        
        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_1fr] gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Professional Experience */}
            <motion.div 
              variants={itemVariants}
              className={`p-8 rounded-2xl shadow-2xl ${
                isDarkMode 
                  ? 'bg-gray-800/70 backdrop-blur-lg border border-gray-700' 
                  : 'bg-white border border-gray-100'
              }`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl ${
                  isDarkMode ? 'bg-accent/20' : 'bg-accent/10'
                }`}>
                  <FaBriefcase className="text-3xl text-accent" />
                </div>
                <h3 className={`text-3xl font-heading font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Experience
                </h3>
              </div>
              
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
              >
                <div className={`p-6 rounded-xl ${
                  isDarkMode ? 'bg-gray-700/40' : 'bg-gray-50'
                }`}>
                  <motion.div variants={itemVariants}>
                    <h4 className={`text-xl font-bold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{experience.company}</h4>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-accent font-semibold">{experience.role}</span>
                      <span className={`text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>{experience.period}</span>
                    </div>
                    <ul className="mt-4 space-y-3">
                      {experience.responsibilities.map((resp, index) => (
                        <motion.li 
                          key={index}
                          variants={itemVariants}
                          className={`flex items-start gap-3 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}
                          whileHover={{ x: 5 }}
                        >
                          <span className="shrink-0 mt-1.5 w-2 h-2 bg-accent rounded-full" />
                          {resp}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Education */}
            <motion.div 
              variants={itemVariants}
              className={`p-8 rounded-2xl shadow-2xl ${
                isDarkMode 
                  ? 'bg-gray-800/70 backdrop-blur-lg border border-gray-700' 
                  : 'bg-white border border-gray-100'
              }`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl ${
                  isDarkMode ? 'bg-accent/20' : 'bg-accent/10'
                }`}>
                  <FaGraduationCap className="text-3xl text-accent" />
                </div>
                <h3 className={`text-3xl font-heading font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Education
                </h3>
              </div>
              
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
              >
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className={`p-6 rounded-xl ${
                      isDarkMode ? 'bg-gray-700/40' : 'bg-gray-50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className={`text-xl font-bold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{edu.institution}</h4>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-accent font-semibold">{edu.degree}</span>
                      <span className={`text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>{edu.period}</span>
                    </div>
                    <p className={`mt-3 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>{edu.achievement}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Contact */}
          <motion.div 
            variants={itemVariants}
            className={`p-8 rounded-2xl shadow-2xl h-fit sticky top-28 ${
              isDarkMode 
                ? 'bg-gray-800/70 backdrop-blur-lg border border-gray-700' 
                : 'bg-white border border-gray-100'
            }`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className={`p-3 rounded-xl ${
                isDarkMode ? 'bg-accent/20' : 'bg-accent/10'
              }`}>
                <FaCode className="text-3xl text-accent" />
              </div>
              <h3 className={`text-3xl font-heading font-bold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Let's Connect
              </h3>
            </div>
            
            <motion.div 
              className="grid gap-4"
              variants={containerVariants}
            >
              {[
                {
                  icon: FaEnvelope,
                  title: "Email",
                  text: "mrakibhasan199744@gmail.com",
                  href: "mailto:mrakibhasan199744@gmail.com"
                },
                {
                  icon: FaGithub,
                  title: "GitHub",
                  text: "@yourusername",
                  href: "https://github.com"
                },
                {
                  icon: FaLinkedin,
                  title: "LinkedIn",
                  text: "in/yourprofile",
                  href: "https://linkedin.com"
                }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-5 p-5 rounded-xl transition-all ${
                    isDarkMode 
                      ? 'hover:bg-gray-700/50' 
                      : 'hover:bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`p-4 rounded-lg ${
                    isDarkMode 
                      ? 'bg-accent/20 group-hover:bg-accent/30' 
                      : 'bg-accent/10 group-hover:bg-accent/20'
                  }`}>
                    <item.icon className="text-2xl text-accent" />
                  </div>
                  <div>
                    <p className={`text-lg font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{item.title}</p>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>{item.text}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;