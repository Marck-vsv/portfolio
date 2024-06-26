import { motion } from "framer-motion"
import React from "react";

const FadeInAnimation = ({
    children
}: {
    children?: React.ReactNode 
}) => {
    return (
        <motion.div
            variants = {{
                hidden: {
                    opacity: 0
                },
                show: {
                    opacity: 1,
                    transition: {
                        delay: 0.8
                    }
                }
            }}
            initial = {"hidden"}
            animate = {"show"}
        >
            {children}
        </motion.div>
    )
}

export default FadeInAnimation