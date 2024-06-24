import React from "react";

const DefaultSection = ({
    children,
    className,
    id
}: {
    children?: React.ReactNode
    className?: string
    id: string
}) => {
    return (
        <section
            id={id}    
            className={`mx-auto overflow-hidden bg-primary w-full lg:h-screen h-full border-b-2 border-accent border-opacity-5 ${className}`}
        >
            {children}
        </section>
    )
}

export default DefaultSection