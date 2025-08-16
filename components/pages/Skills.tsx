import SectionBody from "@/components/ui/SectionBody";
import DefaultSection from "@/components/ui/Section";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 80 },
      { name: "NestJS", level: 75 },
      { name: "MongoDB", level: 70 },
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "Figma", level: 70 },
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
      className={"!bg-secondary w-full h-screen"}
    >
      <SectionBody className={"pt-12"}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-accent mb-4">Skills</h2>
          <p className="text-tertiary max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary border border-accent rounded-lg p-6"
            >
              <h3 className="text-2xl font-bold text-accent mb-4">
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
          ))}
        </div>
      </SectionBody>
    </DefaultSection>
  )
}