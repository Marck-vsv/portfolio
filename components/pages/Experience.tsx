import SectionBody from "@/components/ui/SectionBody";
import DefaultSection from "@/components/ui/Section";
import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import ExperienceCard from "@/components/ui/ExperienceCard";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Freelancer",
    period: "2023 - Present",
    description: "Desenvolvimento de aplicações web completas utilizando React, Next.js para o front-end e Node.js com NestJS para o back-end. Foco na criação de interfaces de usuário intuitivas e APIs robustas e escaláveis."
  },
  {
    title: "Software Developer",
    company: "PUC Minas",
    period: "2022 - 2022",
    description: "Participei do desenvolvimento de sistemas internos da universidade, utilizando Java e Spring Boot. Colaborei com equipes multidisciplinares para melhorar a eficiência dos processos acadêmicos."
  }
];

export default function Experience({
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
      className={"!bg-primary"}
    >
      <SectionBody>
        <SectionTitle 
          title="Experience"
          subtitle="My professional journey and the experiences that shaped my skills"
        />
        <div className="max-w-4xl mx-auto pb-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </SectionBody>
    </DefaultSection>
  )
}