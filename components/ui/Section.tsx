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
            className={`mx-auto overflow-hidden bg-primary w-full lg:h-screen h-full ${className}`}
        >
            {children}
        </section>
    )
}

export default DefaultSection