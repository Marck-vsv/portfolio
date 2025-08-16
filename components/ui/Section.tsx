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
            className={`mx-auto bg-primary w-full min-h-screen flex flex-col justify-center py-24 ${className}`}
        >
            {children}
        </section>
    )
}

export default DefaultSection