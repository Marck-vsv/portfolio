import React from "react";

const SectionTitle = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">{title}</h2>
      <p className="text-tertiary max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;