import SectionBody from "@/components/ui/SectionBody";
import DefaultSection from "@/components/ui/Section";
import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";

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
      className={"!bg-secondary"}
    >
      <SectionBody>
        <SectionTitle 
          title="Projects"
          subtitle="Some of my recent projects. Each one is a unique challenge and learning experience."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </SectionBody>
    </DefaultSection>
  )
}