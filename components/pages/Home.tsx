import DefaultSection from "@/components/ui/Section";
import SectionBody from "@/components/ui/SectionBody";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function HomePage ({
    ref,
    id
}: {
    ref?: React.Ref<any>
    id?: string
}) {
    const [stats, setStats] = useState([
        { value: "0+", label: "Years on GitHub" },
        { value: "0+", label: "Repositories" },
        { value: "0+", label: "Stars Received" },
        { value: "0+", label: "Followers" },
    ]);

    useEffect(() => {
        const fetchGithubStats = async () => {
            try {
                const userResponse = await fetch('https://api.github.com/users/Marck-vsv');
                if (!userResponse.ok) throw new Error('User not found');
                const userData = await userResponse.json();

                const reposResponse = await fetch('https://api.github.com/users/Marck-vsv/repos');
                if (!reposResponse.ok) throw new Error('Repos not found');
                const reposData = await reposResponse.json();

                const totalStars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
                
                const yearsOnGitHub = new Date().getFullYear() - new Date(userData.created_at).getFullYear();

                setStats([
                    { value: `${yearsOnGitHub}+`, label: "Years on GitHub" },
                    { value: `${userData.public_repos}`, label: "Repositories" },
                    { value: `${totalStars}`, label: "Stars Received" },
                    { value: `${userData.followers}`, label: "Followers" },
                ]);

            } catch (error) {
                console.error("Failed to fetch GitHub stats:", error);
            }
        };

        fetchGithubStats();
    }, []);
    
    return (
        <DefaultSection 
            ref={ref}
            id={`${id}`}
            className={"relative"}
        >
            <SectionBody className={"flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8"}>
                {/* Text Content */}
                <div className={"flex flex-col gap-4 items-center lg:items-start text-center lg:text-left"}>
                    <span className={"text-xl"}>
                        Software developer
                    </span>
                    
                    <div className={"text-4xl md:text-5xl xl:text-6xl"}>
                        <h1>
                            Hello, I'm
                        </h1>
                        <h2 className={"text-accent"}>
                            Marcos Vinicius<span className={"text-tertiary"}>.</span>
                        </h2>
                    </div>
                    
                    <p
                        className={"w-full max-w-xl break-words whitespace-pre-line hyphens-auto"}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus nec risus nec blandit. Vestibulum eget lacus consequat, tincidunt quam nec, egestas velit.
                    </p>
                    
                    <Link
                        href={"#contact"}
                        className={"mt-4 border-2 border-accent p-4 w-fit text-accent rounded-full font-bold hover:bg-accent hover:text-primary transition-all"}
                    >
                        Contact me
                    </Link>
                </div>
                
                {/* Image */}
                <div className={"relative w-full max-w-[20rem] md:max-w-[25rem] aspect-square"}>
                    <Image 
                        className={"rounded-full border-accent border-4 p-4"}
                        src={"https://github.com/Marck-vsv.png"}
                        alt={"Image pfp"}
                        layout={"fill"}  
                        objectFit={"contain"}
                    />
                </div>
            </SectionBody>
            
            <SectionBody className={"lg:absolute lg:bottom-11 lg:left-1/2 lg:-translate-x-1/2 w-full"}>
                <div className={"mt-16 lg:mt-0 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"}>
                    {stats.map((stat, index) => (
                        <div key={index} className="px-2">
                            <span className={"text-accent text-3xl md:text-4xl font-bold"}>{stat.value}</span> <br/>
                            <span className={"whitespace-pre-wrap text-sm"}>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </SectionBody>
        </DefaultSection>
    )
}