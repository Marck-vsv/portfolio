"use client"
import React, { HTMLProps, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
// import { CiMenuFries } from "react-icons/ci";

const options = [
    {
        title: "home",
        href: "#home"
    },
    {
        title: "about",
        href: "#about",
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

// Lembrar de fazer a versão mobile do menu
export const Nav = () => {
    const afterStyle: HTMLProps<HTMLElement>["className"] = `after:content-[';'] after:text-accent`
    const beforeStyle: HTMLProps<HTMLElement>["className"] = `before:content-['.'] before:text-accent`
    
    // const mobileNav: HTMLProps<HTMLElement>["className"] = ``
    
    return (
        <div className={`sticky top-4 lg:top-0 flex justify-between items-center z-10`}>
            <a href={"#home"} className={`text-4xl ml-6 ${beforeStyle} ${afterStyle}`}>
                Marck
            </a>
            
            <DesktopNav/>
        </div>
    );
};

const DesktopNav = () => {
    return (
        <nav className={`p-4 hidden lg:flex items-center whitespace-nowrap`}>
            <ListWrapper/>
        </nav>
    )
}

const ListWrapper = () => {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });
    
    const pathname = usePathname();
    
    return (
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
                <ListItem 
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
                </ListItem>
            ))}
            
            <AnimatedPointer position={position} />
        </ul>
    );
};

const ListItem = ({ children, setPosition }: any) => {
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
    );
};

const AnimatedPointer = ({ position }:any) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            className="absolute z-0 rounded-full bg-tertiary md:h-12"
        />
    );
};