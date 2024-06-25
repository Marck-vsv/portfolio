"use client";
import HomePage from "@/components/pages/Home";
import About from "@/components/pages/About";

function Home () {
    return (
        <main className={"w-full h-full"}>
            <HomePage/>
            <About/>
        </main>
    );
}

export default Home
