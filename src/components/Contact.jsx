import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Send, User, Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        formData,
        import.meta.env.VITE_EMAIL_USER
      )
      .then(
        () => {
          setLoading(false);
          setSuccess("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          setSuccess("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-16 sm:py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-white via-accent to-purple-500 text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 bg-secondary/30 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-800/50"
          >
            <motion.div variants={itemVariants} className="relative">
              <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <User className="w-4 h-4 text-accent" />
                <span>Name</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary/30 border border-gray-700 rounded-lg
                         focus:ring-2 focus:ring-accent focus:border-transparent outline-none
                         transition-all duration-300 placeholder:text-gray-500"
                placeholder="Your Name"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>Email</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary/30 border border-gray-700 rounded-lg
                         focus:ring-2 focus:ring-accent focus:border-transparent outline-none
                         transition-all duration-300 placeholder:text-gray-500"
                placeholder="your@email.com"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <MessageSquare className="w-4 h-4 text-accent" />
                <span>Message</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary/30 border border-gray-700 rounded-lg
                         focus:ring-2 focus:ring-accent focus:border-transparent outline-none
                         transition-all duration-300 resize-none placeholder:text-gray-500"
                placeholder="Your message..."
              ></textarea>
            </motion.div>

            <motion.button
              variants={itemVariants}
              type="submit"
              className="w-full group flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-purple-600
                       hover:from-accent/90 hover:to-purple-600/90 text-white font-medium py-3 px-6
                       rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>

            {success && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg ${
                  success.includes("successfully")
                    ? "bg-green-500/20 border border-green-500/30"
                    : "bg-red-500/20 border border-red-500/30"
                }`}
              >
                <p className={`text-center ${
                  success.includes("successfully") ? "text-green-400" : "text-red-400"
                }`}>
                  {success}
                </p>
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
