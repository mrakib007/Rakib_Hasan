import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaGlobe, FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDarkMode } = useTheme();

  const experience = {
    company: 'BacBon Limited',
    role: 'Frontend Engineer',
    period: 'September 2023 - Present',
    responsibilities: [
      'Developed and maintained responsive web applications using React Js',
      'Collaborated with designers and backend engineers',
      'Optimized web performance and user experience',
      'Implemented modern frontend technologies and best practices'
    ]
  };

  const education = [
    {
      institution: 'Bangladesh University of Business & Technology',
      degree: "Bachelor's Degree",
      period: 'February 2018 - January 2023',
      achievement: 'CGPA: 3.45'
    },
    {
      institution: 'BCIC College',
      degree: 'Higher Secondary Certificate (HSC)',
      period: 'July 2015 - August 2017',
      achievement: 'GPA: 5.00'
    }
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen py-20 px-4 ${
        isDarkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-gray-50 to-white'
      }`}
    >
      <div className="container mx-auto">
        <h2 className={`text-4xl font-heading font-bold text-center mb-12 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>About Me</h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Professional Experience */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`p-6 rounded-xl shadow-xl ${
              isDarkMode 
                ? 'bg-gray-800/50 backdrop-blur-sm' 
                : 'bg-white shadow-gray-200/50'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaBriefcase className="text-2xl text-accent" />
              <h3 className={`text-2xl font-heading font-semibold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Professional Experience</h3>
            </div>
            
            <div className="space-y-4">
              <div className={`p-4 rounded-lg ${
                isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}>
                <h4 className={`text-xl font-semibold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{experience.company}</h4>
                <p className="text-accent font-medium">{experience.role}</p>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{experience.period}</p>
                <ul className="mt-3 space-y-2">
                  {experience.responsibilities.map((resp, index) => (
                    <li key={index} className={`flex items-start gap-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <span className="text-accent mt-1">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`p-6 rounded-xl shadow-xl ${
              isDarkMode 
                ? 'bg-gray-800/50 backdrop-blur-sm' 
                : 'bg-white shadow-gray-200/50'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaGraduationCap className="text-2xl text-accent" />
              <h3 className={`text-2xl font-heading font-semibold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Education</h3>
            </div>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                }`}>
                  <h4 className={`text-xl font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{edu.institution}</h4>
                  <p className="text-accent font-medium">{edu.degree}</p>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{edu.period}</p>
                  <p className={`mt-2 font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>{edu.achievement}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`md:col-span-2 p-6 rounded-xl shadow-xl ${
              isDarkMode 
                ? 'bg-gray-800/50 backdrop-blur-sm' 
                : 'bg-white shadow-gray-200/50'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaCode className="text-2xl text-accent" />
              <h3 className={`text-2xl font-heading font-semibold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Connect With Me</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="mailto:mrakibhasan199744@gmail.com"
                className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-700/50 hover:bg-gray-600/50' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="bg-accent/20 p-3 rounded-full">
                  <FaGlobe className="text-xl text-accent" />
                </div>
                <div>
                  <p className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Email</p>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>mrakibhasan199744@gmail.com</p>
                </div>
              </a>
              
              <a
                href="#"
                className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-700/50 hover:bg-gray-600/50' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="bg-accent/20 p-3 rounded-full">
                  <FaGithub className="text-xl text-accent" />
                </div>
                <div>
                  <p className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>GitHub</p>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>View Profile</p>
                </div>
              </a>
              
              <a
                href="#"
                className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-700/50 hover:bg-gray-600/50' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="bg-accent/20 p-3 rounded-full">
                  <FaLinkedin className="text-xl text-accent" />
                </div>
                <div>
                  <p className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>LinkedIn</p>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Connect with me</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;