import SectionBody from "@/components/ui/SectionBody";
import DefaultSection from "@/components/ui/Section";
import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import ExperienceCard from "@/components/ui/ExperienceCard";

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