import SectionBody from "@/components/ui/SectionBody";
import DefaultSection from "@/components/ui/Section";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const socialLinks = [
  {
    name: "Email",
    icon: <FiMail size={24} />,
    link: "mailto:marcos@example.com"
  },
  {
    name: "GitHub",
    icon: <FiGithub size={24} />,
    link: "https://github.com/Marck-vsv"
  },
  {
    name: "LinkedIn",
    icon: <FiLinkedin size={24} />,
    link: "#"
  },
  {
    name: "Twitter",
    icon: <FiTwitter size={24} />,
    link: "#"
  }
];

export default function Contact({
  ref,
  id
}: {
  ref?: React.Ref<any>
  id?: string
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    
    // Simulação de envio do formulário
    try {
      // Aqui você colocaria a lógica real de envio
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Resetar o estado de sucesso após 5 segundos
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <DefaultSection
      ref={ref}
      id={`${id}`}
      className={"!bg-primary w-full h-screen"}
    >
      <SectionBody className={"pt-12"}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-accent mb-4">Contact</h2>
          <p className="text-tertiary max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-tertiary mb-6">Get in touch</h3>
            <p className="text-tertiary mb-8">
              I'm currently available for freelance work and open to new opportunities. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-secondary border border-accent rounded-lg px-4 py-2 text-tertiary hover:text-accent hover:border-accent transition-colors"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-tertiary mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary border border-accent rounded-lg px-4 py-2 text-tertiary focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-tertiary mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary border border-accent rounded-lg px-4 py-2 text-tertiary focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-tertiary mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-secondary border border-accent rounded-lg px-4 py-2 text-tertiary focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-accent text-primary font-bold py-3 rounded-lg transition-all ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-[#00e187]"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              
              {submitSuccess && (
                <div className="p-3 bg-green-900 text-green-200 rounded-lg">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitError && (
                <div className="p-3 bg-red-900 text-red-200 rounded-lg">
                  {submitError}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </SectionBody>
    </DefaultSection>
  )
}