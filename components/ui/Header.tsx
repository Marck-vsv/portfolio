"use client"
import React, { HTMLProps } from "react";
import {DesktopNav, MobileNav} from "@/components/ui/NavComponents";

export const Header = () => {
    const afterStyle: HTMLProps<HTMLElement>["className"] = `after:content-[';'] after:text-accent`
    const beforeStyle: HTMLProps<HTMLElement>["className"] = `before:content-['.'] before:text-accent`
    
    return (
        <header className={`fixed w-full top-0 flex justify-between items-center z-20 px-6 py-4 bg-primary/90 backdrop-blur-sm`}>
            <a href={"#home"} className={`text-4xl ${beforeStyle} ${afterStyle}`}>
                Marck
            </a>
            
            <div className="lg:hidden">
                <MobileNav/>
            </div>
            <div className="hidden lg:block">
                <DesktopNav/>
            </div>
        </header>
    );
};