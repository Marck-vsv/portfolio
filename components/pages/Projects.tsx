import SectionBody from "@/components/ui/SectionBody";
import DefaultSection from "@/components/ui/Section";
import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Desenvolvi uma plataforma de e-commerce completa com Next.js, integrando pagamentos seguros com Stripe e gerenciamento de estado avançado.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    github: "#",
    demo: "#"
  },
  {
    title: "Task Management App",
    description: "Criei um aplicativo de gerenciamento de tarefas colaborativo com atualizações em tempo real usando React e Firebase, focado em produtividade de equipes.",
    technologies: ["React", "Firebase", "Material UI", "Context API"],
    github: "#",
    demo: "#"
  },
  {
    title: "Portfolio Website",
    description: "Este portfólio! Um site responsivo construído com Next.js e Framer Motion para mostrar minhas habilidades e projetos de forma interativa.",
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