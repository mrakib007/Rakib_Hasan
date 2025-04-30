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
      className={`min-h-screen py-20 sm:py-28 px-2 sm:px-4 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
      }`}
    >
      <div className="container mx-auto max-w-[1280px] px-3 sm:px-6 md:px-12 lg:px-20">
        <motion.h2
          variants={itemVariants}
          className="text-center mb-12 sm:mb-16"
        >
          <span className={`text-4xl sm:text-5xl font-heading font-bold relative z-10
            ${isDarkMode
              ? 'bg-gradient-to-r from-accent via-purple-400 to-blue-400 text-transparent bg-clip-text'
              : 'bg-gradient-to-r from-accent via-blue-500 to-purple-600 text-transparent bg-clip-text'
            }`}
          >
            About Me
          </span>
          <div className="inline-block ml-3 sm:ml-4 text-accent">
            <FaRegLightbulb className="text-2xl sm:text-3xl inline-block animate-pulse" />
          </div>
          <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </motion.h2>

        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_1fr] gap-8 sm:gap-12">
          <div className="space-y-12">
            <motion.div
              variants={itemVariants}
              className={`p-4 sm:p-8 rounded-2xl shadow-2xl ${
                isDarkMode
                  ? 'bg-gray-800/70 backdrop-blur-lg border border-gray-700'
                  : 'bg-white border border-gray-100'
              }`}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className={`p-2 sm:p-3 rounded-xl ${
                  isDarkMode ? 'bg-accent/20' : 'bg-accent/10'
                }`}>
                  <FaBriefcase className="text-xl sm:text-3xl text-accent" />
                </div>
                <h3 className={`text-2xl sm:text-3xl font-heading font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Experience
                </h3>
              </div>

              <motion.div
                className="space-y-3 sm:space-y-6"
                variants={containerVariants}
              >
                <div className={`px-3 py-4 sm:p-6 rounded-xl ${
                  isDarkMode ? 'bg-gray-700/40' : 'bg-gray-50'
                }`}>
                  <motion.div variants={itemVariants}>
                    <h4 className={`text-base sm:text-xl font-bold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{experience.company}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mt-2">
                      <span className="text-accent text-sm sm:text-base font-semibold">{experience.role}</span>
                      <span className={`text-xs sm:text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>{experience.period}</span>
                    </div>
                    <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                      {experience.responsibilities.map((resp, index) => (
                        <motion.li
                          key={index}
                          variants={itemVariants}
                          className={`flex items-start gap-2 sm:gap-3 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          } text-sm sm:text-base`}
                          whileHover={{ x: 5 }}
                        >
                          <span className="shrink-0 mt-1.5 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-accent rounded-full" />
                          {resp}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className={`p-4 sm:p-8 rounded-2xl shadow-2xl ${
                isDarkMode
                  ? 'bg-gray-800/70 backdrop-blur-lg border border-gray-700'
                  : 'bg-white border border-gray-100'
              }`}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className={`p-2 sm:p-3 rounded-xl ${
                  isDarkMode ? 'bg-accent/20' : 'bg-accent/10'
                }`}>
                  <FaGraduationCap className="text-xl sm:text-3xl text-accent" />
                </div>
                <h3 className={`text-2xl sm:text-3xl font-heading font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Education
                </h3>
              </div>

              <motion.div
                className="space-y-3 sm:space-y-6"
                variants={containerVariants}
              >
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`px-3 py-4 sm:p-6 rounded-xl ${
                      isDarkMode ? 'bg-gray-700/40' : 'bg-gray-50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className={`text-base sm:text-xl font-bold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{edu.institution}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mt-2">
                      <span className="text-accent text-sm sm:text-base font-semibold">{edu.degree}</span>
                      <span className={`text-xs sm:text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>{edu.period}</span>
                    </div>
                    <p className={`mt-2 sm:mt-3 text-sm sm:text-base ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>{edu.achievement}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className={`p-4 sm:p-8 rounded-2xl shadow-2xl h-fit sticky top-28 ${
              isDarkMode
                ? 'bg-gray-800/70 backdrop-blur-lg border border-gray-700'
                : 'bg-white border border-gray-100'
            }`}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className={`p-2 sm:p-3 rounded-xl ${
                isDarkMode ? 'bg-accent/20' : 'bg-accent/10'
              }`}>
                <FaCode className="text-xl sm:text-3xl text-accent" />
              </div>
              <h3 className={`text-2xl sm:text-3xl font-heading font-bold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Let's Connect
              </h3>
            </div>

            <motion.div
              className="grid gap-2 sm:gap-4"
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
                  text: "@mrakib007",
                  href: "https://github.com/mrakib007"
                },
                {
                  icon: FaLinkedin,
                  title: "LinkedIn",
                  text: "in/rakib1997",
                  href: "https://www.linkedin.com/in/rakib1997/"
                }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 sm:gap-5 px-3 py-3 sm:p-5 rounded-xl transition-all ${
                    isDarkMode
                      ? 'hover:bg-gray-700/50'
                      : 'hover:bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`p-2 sm:p-4 rounded-lg ${
                    isDarkMode
                      ? 'bg-accent/20 group-hover:bg-accent/30'
                      : 'bg-accent/10 group-hover:bg-accent/20'
                  }`}>
                    <item.icon className="text-lg sm:text-2xl text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className={`text-base sm:text-lg font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{item.title}</p>
                    <p className={`text-xs sm:text-sm truncate ${
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
