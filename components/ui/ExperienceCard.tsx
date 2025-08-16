import React from "react";
import { motion } from "framer-motion";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="mb-10 relative pl-8 border-l-2 border-accent"
    >
      <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-0"></div>
      <div className="bg-secondary p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <h3 className="text-xl md:text-2xl font-bold text-tertiary">{experience.title}</h3>
          <span className="text-accent font-semibold">{experience.period}</span>
        </div>
        <h4 className="text-xl text-accent mb-3">{experience.company}</h4>
        <p className="text-tertiary">{experience.description}</p>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;