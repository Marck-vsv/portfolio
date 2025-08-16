import React, { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const options = [
    {
        title: "home",
        href: "#home"
    },
    {
        title: "skills",
        href: "#skills",
    },
    {
        title: "experience",
        href: "#experience",
    },
    {
        title: "projects",
        href: "#projects",
    },
    {
        title: "contact",
        href: "#contact",
    }
]

const AnimatedPointer = ({position}: any) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            className="absolute z-0 rounded-full bg-tertiary md:h-12"
        />
    );
};

const NavItem = ({ setPosition, children }: any) => {
    const ref = useRef(null);
    
    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return;

                // @ts-ignore
                const { width } = ref.current.getBoundingClientRect();

                // @ts-ignore
                setPosition({
                    left: ref.current.offsetLeft,
                    opacity: 1,
                    width,
                });
            }}
            className="relative text-xl z-10 block cursor-pointer px-3 py-1.5 font-bold uppercase mix-blend-difference"
        >
            {children}
        </li>
    )
}

export const DesktopNav = () => {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    const pathname = usePathname();
    
    return (
        <nav className={"p-2 hidden lg:flex items-center whitespace-nowrap"}>
            <ul
                onMouseLeave={() => {
                    setPosition((values) => ({
                        ...values,
                        opacity: 0,
                    }));
                }}
                className="relative mx-auto hidden lg:flex w-fit rounded-full p-1"
            >
                {options.map((item, index) => (
                    <NavItem
                        key={item.title}
                        setPosition={setPosition}
                    >
                        <Link
                            className={`${item.href === pathname}`}
                            href={item.href}
                            key={index}
                        >
                            {item.title}
                        </Link>
                    </NavItem>
                ))}
                <AnimatedPointer position={position}/>
            </ul>
        </nav>
    )
}

export const MobileNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuVariants = {
        hidden: { x: "100%" },
        show: { x: 0, transition: { ease: "easeInOut", duration: 0.4 } },
        exit: { x: "100%", transition: { ease: "easeInOut", duration: 0.4 } }
    };

    const linkVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };
    
    return (
        <aside className={"lg:hidden"}>
            <button
                className={"text-accent text-2xl z-30 relative"}
                onClick={() => setIsMenuOpen(true)}
            >
                <CiMenuFries size={38} />
            </button>
            
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className={"fixed top-0 right-0 w-full h-screen bg-primary z-30 flex flex-col items-center justify-center"}
                    >
                        <button
                            className={"absolute top-8 right-8 text-accent text-2xl"}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <IoClose size={45} />
                        </button>
                        
                        <nav className="text-center">
                            <ul className="flex flex-col gap-8">
                                {options.map((item, index) => (
                                    <motion.li
                                        key={item.title}
                                        variants={linkVariants}
                                        initial="hidden"
                                        animate="show"
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-4xl capitalize font-medium text-tertiary hover:text-accent transition-all"
                                        >
                                            {item.title}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </aside>
    )
}