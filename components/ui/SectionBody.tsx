import React from "react";

const SectionBody = ({
    children,
    className
}: {
    children?: React.ReactNode
    className?: string
}) => {
    return (
        <div className={`w-4/5 mx-auto ${className}`}>
            {children}
        </div>
    )
}

export default SectionBody;