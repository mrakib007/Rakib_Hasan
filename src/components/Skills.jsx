import { motion } from 'framer-motion';

const skills = [
  'JavaScript',
  'ReactJs',
  'NodeJs',
  'TypeScript',
  'Redux',
  'Tanstack Query',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Bootstrap 5',
  'Material UI',
  'Framer Motion',
  'Shadcn',
  'Git'
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-20 px-4"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-heading font-bold text-center mb-12">Skills</h2>
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
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
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="group relative"
              >
                <div className="bg-secondary/50 backdrop-blur-sm p-4 rounded-xl shadow-lg 
                             hover:bg-accent/20 transition-all duration-300 transform 
                             hover:scale-105 cursor-pointer">
                  <p className="text-center font-medium">{skill}</p>
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