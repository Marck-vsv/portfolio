import React from "react";
import { motion } from "framer-motion";

interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  items: SkillItem[];
}

const SkillCard = ({ skillCategory, index }: { skillCategory: SkillCategory; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-primary border border-accent rounded-lg p-6"
    >
      <h3 className="text-xl md:text-2xl font-bold text-accent mb-4">
        {skillCategory.category}
      </h3>
      <div className="space-y-4">
        {skillCategory.items.map((skill, skillIndex) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-tertiary">{skill.name}</span>
              <span className="text-accent">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                className="bg-accent h-2 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: (index * 0.1) + (skillIndex * 0.1) }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;