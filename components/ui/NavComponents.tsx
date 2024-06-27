import React, { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";

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
        <nav className={"p-4 hidden lg:flex items-center whitespace-nowrap"}>
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
    
    return (
        <aside className={"lg:hidden relative"}>
            <button
                className={"absolute top-[-1.3rem] right-0"}
                onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                }}
            >
                <CiMenuFries
                    className={"text-accent text-xl"}
                    size={40}
                />
            </button>
            {isMenuOpen && (
                <nav
                    className={""}
                >
                    <button
                        className={"absolute top-[-1.3rem] right-0"}
                        onClick={() => {
                            setIsMenuOpen(!isMenuOpen);
                        }}
                    >
                        Fecha aqui
                    </button>
                </nav>
            )}
        </aside>
    )
}