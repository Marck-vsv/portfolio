"use client";
import React from "react";
import HomePage from "@/components/pages/Home";
import About from "@/components/pages/About";
import Experience from "@/components/pages/Experience";
import Projects from "@/components/pages/Projects";
import Skills from "@/components/pages/Skills";
import Contact from "@/components/pages/Contact";
import {Header} from "@/components/ui/Header";

function Home () {
    return (
        <main className={"w-full h-full"}>
            <Header/>
            <HomePage id={"home"}/>
            <About id={"about"}/>
            <Skills id={"skills"}/>
            <Experience id={"experience"}/>
            <Projects id={"projects"}/>
            <Contact id={"contact"}/>
        </main>
    );
}

export default Home
