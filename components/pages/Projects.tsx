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