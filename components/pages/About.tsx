import DefaultSection from "@/components/ui/Section";
import SectionBody from "@/components/ui/SectionBody";
import React from "react";

const About = ({
    ref,
    id
}: {
    ref?: React.Ref<any>
    id?: string
}) => {
    return (
        <DefaultSection
            ref={ref}
            id={`${id}`}
            className={"w-full h-screen"}
        >
            <SectionBody className={"pt-12"}>
                <p>
                    
                </p>
            </SectionBody>
        </DefaultSection>
    )
}

export default About
