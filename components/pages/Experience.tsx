import SectionBody from "@/components/ui/SectionBody";
import DefaultSection from "@/components/ui/Section";
import React from "react";

export default function Experience ({
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
            className={"!bg-green-500 w-full h-screen"}
        >
            <SectionBody className={"pt-12"}>
                <>

                </>
            </SectionBody>
        </DefaultSection>
    )
}