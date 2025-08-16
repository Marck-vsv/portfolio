import SectionBody from "@/components/ui/SectionBody";
import DefaultSection from "@/components/ui/Section";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce solution built with Next.js, TypeScript, and Stripe integration.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    github: "#",
    demo: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity application for managing tasks and projects with real-time updates.",
    technologies: ["React", "Firebase", "Material UI", "Context API"],
    github: "#",
    demo: "#"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with smooth animations.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "#",
    demo: "#"
  }
];

export default function Projects({
  ref,
  id
}: {
  ref?: React.Ref<any>
  id?: string
}) {
  return (
    <DefaultSection
      ref={ref}
      id={`${id}`}
      className={"!bg-secondary justify-center"}
    >
      <SectionBody>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">Projects</h2>
          <p className="text-tertiary max-w-2xl mx-auto">
            Some of my recent projects. Each one is a unique challenge and learning experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
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
                      <span 
                        key={techIndex} 
                        className="text-xs bg-accent text-primary px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 mt-auto pt-4">
                  <Link 
                    href={project.github} 
                    className="flex items-center gap-2 text-tertiary hover:text-accent transition-colors"
                  >
                    <FiGithub size={20} />
                    <span>Code</span>
                  </Link>
                  <Link 
                    href={project.demo} 
                    className="flex items-center gap-2 text-tertiary hover:text-accent transition-colors"
                  >
                    <FiExternalLink size={20} />
                    <span>Demo</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionBody>
    </DefaultSection>
  )
}