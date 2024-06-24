"use client";
import {AnimatePresence, motion} from "framer-motion";
import {usePathname} from "next/navigation";

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    }
}

const reverseIndex = (index: any) => {
    const totalSteps = 6;
    return totalSteps - (index - 1);
}

const Stairs = () => {
    return (
        <>
            {[...Array(6)].map((__, index) => {
                return <motion.div
                    key={index}
                    variants={stairAnimation}
                    initial={"initial"}
                    animate={"animate"}
                    exit={"exit"}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: reverseIndex(index) * 0.1,
                    }}
                    className={"h-full w-full bg-white relative"}
                />
            })}
        </>
    )
}

const StairTransition = () => {
    const pathnane = usePathname();
    return (
        <>
            <AnimatePresence>
                <div key={pathnane}>
                    <div className={"h-screen w-screen fixed top-0 right-0 left-0 pointer-events-none z-40 flex"}>
                        <Stairs/>
                    </div>
                </div>
                
                <motion.div
                    className={"h-screen w-screen fixed bg-primary top-0 pointer-events-none"}
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
                    }}
                />
            </AnimatePresence>
        </>
    )
}

export default StairTransition;