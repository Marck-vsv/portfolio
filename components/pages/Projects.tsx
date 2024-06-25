import SectionBody from "@/components/ui/SectionBody";
import DefaultSection from "@/components/ui/Section";
import React from "react";

export default function Projects ({
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
            className={"!bg-accent w-full h-screen"}
        >
            <SectionBody className={"pt-12"}>
                <>

                </>
            </SectionBody>
        </DefaultSection>
    )
}