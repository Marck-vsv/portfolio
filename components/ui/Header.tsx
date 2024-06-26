"use client"
import React, { HTMLProps } from "react";
import {DesktopNav, MobileNav} from "@/components/ui/NavComponents";

// Lembrar de fazer a versão mobile do menu
export const Header = () => {
    const afterStyle: HTMLProps<HTMLElement>["className"] = `after:content-[';'] after:text-accent`
    const beforeStyle: HTMLProps<HTMLElement>["className"] = `before:content-['.'] before:text-accent`
    
    return (
        <div className={`sticky top-4 lg:top-0 flex justify-between items-center z-10`}>
            <a href={"#home"} className={`text-4xl ml-6 ${beforeStyle} ${afterStyle}`}>
                Marck
            </a>
            
            <MobileNav/>
            <DesktopNav/>
        </div>
    );
};