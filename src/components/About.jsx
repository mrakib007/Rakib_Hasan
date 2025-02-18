import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Mail, Github, Linkedin, ExternalLink } from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const experience = {
    company: "BacBon Limited",
    role: "Frontend Engineer",
    period: "September 2023 - Present",
    responsibilities: [
      "Developed and maintained responsive web applications using React.js.",
      "Collaborated with designers and backend engineers.",
      "Optimized web performance and user experience.",
      "Implemented modern frontend technologies and best practices.",
    ],
  };

  const education = [
    {
      institution: "Bangladesh University of Business & Technology",
      degree: "Bachelor's Degree in Computer Science",
      period: "February 2018 - January 2023",
      achievement: "CGPA: 3.45",
    },
    {
      institution: "BCIC College",
      degree: "Higher Secondary Certificate (HSC)",
      period: "July 2015 - August 2017",
      achievement: "GPA: 5.00",
    },
  ];

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      link: "mailto:mrakibhasan199744@gmail.com",
      username: "mrakibhasan199744@gmail.com",
    },
    {
      name: "GitHub",
      icon: Github,
      link: "https://github.com",
      username: "View Profile",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://linkedin.com",
      username: "Connect with me",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              About Me
            </motion.h1>
            <motion.p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              Passionate frontend engineer with a keen eye for detail and a drive for creating exceptional user experiences.
            </motion.p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
              {["experience", "education"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-lg"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {tab === "experience" ? <Briefcase className="w-5 h-5 mr-2" /> : <GraduationCap className="w-5 h-5 mr-2" />}
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <AnimatePresence mode="wait">
            {activeTab === "experience" ? (
              <motion.div key="experience" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{experience.company}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{experience.role}</p>
                <p className="text-sm text-gray-500">{experience.period}</p>
                <ul className="mt-4 space-y-3">
                  {experience.responsibilities.map((resp, index) => (
                    <motion.li key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400">•</span>
                      <p className="text-gray-700 dark:text-gray-300">{resp}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ) : (
              <motion.div key="education" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }} className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{edu.institution}</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">{edu.degree}</p>
                    <p className="text-sm text-gray-500">{edu.period}</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">{edu.achievement}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Social Links Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <motion.a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors duration-300">
                  <social.icon className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">{social.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{social.username}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
