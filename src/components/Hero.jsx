import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section 
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[100px]" />
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-purple-500/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-[100px]" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-accent to-purple-500 rounded-full p-1">
            <div className="w-full h-full bg-primary rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold font-heading">RH</span>
            </div>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-white via-accent to-purple-500 text-transparent bg-clip-text"
        >
          Hi there, I'm Rakib Hasan
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Frontend Engineer • Software Developer • React Enthusiast
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a 
            href="#projects" 
            className="px-8 py-3 bg-accent hover:bg-accent/80 text-white font-medium rounded-lg 
                     transition-all duration-300 transform hover:scale-105 hover:shadow-lg 
                     hover:shadow-accent/20"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg 
                     transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;