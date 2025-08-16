"use client";
import React from "react";
import HomePage from "@/components/pages/Home";
import Experience from "@/components/pages/Experience";
import Projects from "@/components/pages/Projects";
import Skills from "@/components/pages/Skills";
import Contact from "@/components/pages/Contact";
import {Header} from "@/components/ui/Header";
import FadeInAnimation from "@/components/animations/FadeIn";

function Home () {
    return (
        <main className={"w-full h-full"}>
            <FadeInAnimation>
                <Header/>
                <HomePage id={"home"}/>
                <Skills id={"skills"}/>
                <Experience id={"experience"}/>
                <Projects id={"projects"}/>
                <Contact id={"contact"}/>
            </FadeInAnimation>
        </main>
    );
}

export default Home
 