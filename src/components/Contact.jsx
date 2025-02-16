import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

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

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-20 px-4"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-heading font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-secondary/50 backdrop-blur-sm p-8 rounded-xl shadow-xl"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-primary/50 border border-gray-700 rounded-lg 
                         focus:ring-2 focus:ring-accent focus:border-transparent outline-none
                         transition-all duration-300"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-primary/50 border border-gray-700 rounded-lg 
                         focus:ring-2 focus:ring-accent focus:border-transparent outline-none
                         transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-primary/50 border border-gray-700 rounded-lg 
                         focus:ring-2 focus:ring-accent focus:border-transparent outline-none
                         transition-all duration-300 resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent/80 text-white font-medium py-3 px-6 
                       rounded-lg transition-all duration-300 transform hover:scale-105"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className={`text-center mt-4 ${success.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
                {success}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
