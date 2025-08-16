import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-primary border border-accent rounded-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
    >
      <div className="p-6 flex flex-col flex-grow">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-tertiary mb-2">{project.title}</h3>
          <p className="text-tertiary mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="text-xs bg-accent text-primary px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mt-auto pt-4">
          <Link href={project.github} className="flex items-center gap-2 text-tertiary hover:text-accent transition-colors">
            <FiGithub size={20} />
            <span>Code</span>
          </Link>
          <Link href={project.demo} className="flex items-center gap-2 text-tertiary hover:text-accent transition-colors">
            <FiExternalLink size={20} />
            <span>Demo</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;