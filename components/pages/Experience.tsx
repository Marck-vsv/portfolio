import SectionBody from "@/components/ui/SectionBody";
import DefaultSection from "@/components/ui/Section";
import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import ExperienceCard from "@/components/ui/ExperienceCard";

const experiences = [
  {
    title: "Front-end Developer",
    company: "Metaggov (Freelance)",
    period: "Apr 2025 - Present",
    description: "Developed and maintained an internal client management system for public agencies. Created reusable components using Vue.js, NuxtJS, and Bulma, optimized performance, and improved accessibility within a Kanban methodology."
  },
  {
    title: "Intern",
    company: "SIA - Piauí State",
    period: "Oct 2024 - Present",
    description: "Developed scalable web applications using Next.js, Nest.js, Go, and Python. Analyzed administrative processes, drafted technical documents, and supported data analysis and project initiatives for the state."
  },
  {
    title: "Developer",
    company: "CEUT",
    period: "Jun 2022 - Jun 2024",
    description: "Led front-end development for a project integrating technology into psychology services, creating an electronic patient record system and an online service platform to improve care for students and the community."
  },
  {
    title: "Fullstack Developer",
    company: "Balcão Legal (Freelance)",
    period: "Apr 2022 - Jun 2024",
    description: "Maintained microservices using Spring Framework and PostgreSQL. Developed the front-end with Next.js, TypeScript, and Tailwind CSS, implementing features based on requirement documents."
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