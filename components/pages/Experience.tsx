import SectionBody from "@/components/ui/SectionBody";
import DefaultSection from "@/components/ui/Section";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Developing modern web applications using React and Next.js. Collaborating with design teams to implement responsive UI components."
  },
  {
    title: "Junior Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description: "Built and maintained client websites using HTML, CSS, and JavaScript. Participated in agile development processes."
  },
  {
    title: "Intern Developer",
    company: "StartupXYZ",
    period: "2019 - 2020",
    description: "Assisted in developing web applications with React. Learned best practices in version control and testing."
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
      className={"!bg-primary w-full h-screen flex flex-col"}
    >
      <SectionBody className={"pt-12 flex-grow overflow-y-auto"}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-accent mb-4">Experience</h2>
          <p className="text-tertiary max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my skills
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto pb-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-10 relative pl-8 border-l-2 border-accent"
            >
              <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-0"></div>
              <div className="bg-secondary p-6 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-2xl font-bold text-tertiary">{exp.title}</h3>
                  <span className="text-accent font-semibold">{exp.period}</span>
                </div>
                <h4 className="text-xl text-accent mb-3">{exp.company}</h4>
                <p className="text-tertiary">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionBody>
    </DefaultSection>
  )
}