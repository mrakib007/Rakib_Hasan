import { motion } from 'framer-motion';
import { Code2, Sparkles, Rocket, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import bgImage from '../assets/3 bg.jpg';

function Hero() {
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
      transition: { duration: 0.5 }
    }
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/MD.Rakibul Hasan.pdf";
    link.download = "MD.Rakibul_Hasan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[40%] -right-[25%] w-[80%] h-[80%] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[40%] -left-[25%] w-[80%] h-[80%] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 max-w-7xl mx-auto gap-8 lg:gap-12 py-8 lg:py-0"
      >
        <motion.div
          variants={itemVariants}
          className="relative z-10 text-center lg:text-left lg:max-w-2xl w-full"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm mb-6"
          >
            <motion.span
              animate={floatingAnimation}
              className="text-accent"
            >
              <Sparkles className="w-5 h-5" />
            </motion.span>
            <span className="text-sm text-muted">Available for new opportunities</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-accent to-purple-500 text-transparent bg-clip-text">
              Hey, I'm Rakib Hasan
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary/30 rounded-full">
              <Code2 className="w-5 h-5 text-accent" />
              <span className="text-muted">Frontend Engineer</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary/30 rounded-full">
              <Rocket className="w-5 h-5 text-purple-500" />
              <span className="text-muted">2+ Years Experience</span>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base lg:text-xl text-muted mb-8 max-w-2xl mx-auto lg:mx-0"
          >
            Passionate about crafting exceptional digital experiences through clean code and intuitive design. Specializing in modern frontend technologies and interactive user interfaces.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6"
          >
            <button
              onClick={handleDownload}
              className="group px-6 py-3 bg-accent text-white font-medium rounded-lg 
             transition-all duration-300 transform hover:scale-105 hover:shadow-md 
             hover:shadow-accent/30 relative overflow-hidden"
            >
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <a
              href="#contact"
              className="px-6 py-3 bg-secondary/50 text-white font-medium rounded-lg 
             transition-all duration-300 transform hover:scale-105 hover:bg-secondary/60"
            >
              Let's Connect
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/mrakib007", color: "hover:text-[#2ea44f]" },
              { icon: Twitter, href: "https://x.com/m_rakib007", color: "hover:text-[#1DA1F2]" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/rakib1997/", color: "hover:text-[#0A66C2]" },
              { icon: Mail, href: "mailto:mrakibhasan199744@gmail.com", color: "hover:text-[#EA4335]" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                className={`p-3 bg-secondary/30 rounded-xl hover:bg-secondary/50 
                          transition-colors duration-300 ${social.color}`}
              >
                <social.icon className="w-5 h-5 lg:w-6 lg:h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] flex items-center justify-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-full h-full bg-gradient-to-br from-accent/20 via-purple-500/20 to-accent/20 rounded-full blur-[100px] opacity-50"
          />
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative z-10 w-full h-full mt-[120px] lg:mt-0 lg:w-[400px] lg:h-[400px] flex items-center justify-center rounded-3xl overflow-hidden shadow-xl shadow-accent/20 border border-secondary"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-full h-full bg-gradient-to-br from-accent/20 via-purple-500/20 to-accent/20 rounded-full blur-[80px] opacity-50"
            />
            <img
              src="https://res.cloudinary.com/dtbt0x5pm/image/upload/v1743326234/rakib_hu6rat.jpg"
              alt="Rakib Hasan"
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Hero;
