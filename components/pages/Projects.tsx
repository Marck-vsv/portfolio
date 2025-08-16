import SectionBody from "@/components/ui/SectionBody";
import DefaultSection from "@/components/ui/Section";
import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "Marckcord",
    description: "A project aimed at replicating all of Discord's features in a learning context, focusing on real-time communication and server management.",
    technologies: ["Next.js", "NestJS", "TypeScript", "Socket.io", "PostgreSQL"],
    github: "https://github.com/Marck-vsv/marckcord-api",
    demo: "#"
  },
  {
    title: "Reclame-ali",
    description: "A full-stack application for managing complaints, allowing users to submit issues and track their resolution status.",
    technologies: ["Next.js", "NestJS", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/Marck-vsv/reclame-ali",
    demo: "#"
  },
  {
    title: "E-commerce Platform",
    description: "Developed a complete e-commerce platform with Next.js, integrating secure payments with Stripe and advanced state management.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    github: "#",
    demo: "#"
  },
  {
    title: "Task Management App",
    description: "Created a collaborative task management application with real-time updates using React and Firebase, focused on team productivity.",
    technologies: ["React", "Firebase", "Material UI", "Context API"],
    github: "#",
    demo: "#"
  },
  {
    title: "Portfolio Website",
    description: "This portfolio! A responsive website built with Next.js and Framer Motion to showcase my skills and projects interactively.",
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