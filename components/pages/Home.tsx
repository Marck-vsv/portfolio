import DefaultSection from "@/components/ui/Section";
import SectionBody from "@/components/ui/SectionBody";
import Link from "next/link";
import {Nav} from "@/components/ui/Nav";
import Image from "next/image";

export default function HomePage () {
    return (
        <>
            <DefaultSection 
                id={"home"}
                className={"relative"}
            >
                <Nav/>
                
                <SectionBody className={"flex items-center mt-24"}>
                    <div className={"flex flex-col gap-4"}>
                        <span className={"text-xl"}>
                            Software developer
                        </span>
                        
                        <div className={"text-5xl xl:text-6xl"}>
                            <h1 className={""}>
                                Hello, I'm
                            </h1>
                            <h2 className={"text-accent"}>
                                Marcos Vinicius<span className={"text-tertiary"}>.</span>
                            </h2>
                        </div>
                        
                        <p
                            className={"w-4/5 whitespace-break-spaces"}
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
                    
                    <div className={"hidden lg:block relative w-full xl:w-3/6 max-w-2xl aspect-square overflow-hidden"}>
                        <Image 
                            className={"rounded-full border-accent max-w-2xl border-2 p-4"}
                            src={"https://github.com/Marck-vsv.png"}
                            alt={"Image pfp"}
                            layout={"fill"}  
                            objectFit={"contain"}
                        />
                    </div>
                </SectionBody>
                
                <SectionBody className={"lg:absolute lg:bottom-11 lg:left-1/2 lg:-translate-x-1/2"}>
                    <div className={"mt-10 mb-10 lg:mb-0 lg:mt-36 grid grid-cols-2 gap-4 md:gap-0 md:flex justify-between text-center"}>
                        <div>
                            <span className={"text-accent text-4xl "}>00+</span> <br/>
                            <span className={"w-1/3 whitespace-break-spaces"}>Repositories</span>
                        </div>
                        
                        <div>
                            <span className={"text-accent text-4xl "}>00+</span> <br/>
                            <span className={"w-1/3 whitespace-break-spaces"}>Repositories</span>
                        </div>
                        
                        <div>
                            <span className={"text-accent text-4xl "}>00+</span> <br/>
                            <span className={"w-1/3 whitespace-break-spaces"}>Repositores</span>
                        </div>
                        
                        <div>
                            <span className={"text-accent text-4xl "}>00+</span> <br/>
                            <span className={"w-1/3 whitespace-break-spaces"}>Repositories</span>
                        </div>
                    </div>
                </SectionBody>
            </DefaultSection>
        </>
    )
}