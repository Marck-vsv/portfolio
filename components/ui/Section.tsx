import React from "react";

const DefaultSection = ({
    children,
    className,
    id,
    ref
}: {
    children?: React.ReactNode
    className?: string
    id: string
    ref?: React.Ref<any>
}) => {
    return (
        <section
            ref={ref}
            id={id}    
            className={`mx-auto bg-primary w-full flex flex-col py-10 md:py-16 ${className}`}
        >
            {children}
        </section>
    )
}

export default DefaultSection