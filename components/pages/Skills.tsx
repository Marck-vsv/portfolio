import SectionBody from "@/components/ui/SectionBody";
import DefaultSection from "@/components/ui/Section";
import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillCard from "@/components/ui/SkillCard";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "Vue / Nuxt", level: 85 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "React Native", level: 75 },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "NestJS", level: 80 },
      { name: "Go", level: 70 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 75 },
    ]
  },
  {
    category: "Tools & Methods",
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "Figma", level: 70 },
      { name: "Agile (Scrum/Kanban)", level: 85 },
    ]
  }
];

export default function Skills({
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
          title="Skills"
          subtitle="Here are some of the technologies and tools I work with"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <SkillCard key={skillCategory.category} skillCategory={skillCategory} index={index} />
          ))}
        </div>
      </SectionBody>
    </DefaultSection>
  )
}