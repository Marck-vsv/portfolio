import React from "react";

interface IDefaultSection extends HTMLAttributes {
    children?: React.ReactNode
    id: string
    ref?: React.Ref<any>
}

const DefaultSection = ({
    children,
    className,
    id,
    ref
}: IDefaultSection) => {
    return (
        <section
            ref={ref}
            id={id}    
            className={`mx-auto overflow-hidden bg-primary w-full lg:h-screen h-full border-b-2 border-accent border-opacity-5 ${className}`}
        >
            {children}
        </section>
    )
}

export default DefaultSection