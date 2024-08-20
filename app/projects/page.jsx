'use client'
import projectsList from "@/app/projects/projectsList";
import Project from "@/app/components/projects/Project/Project";
import Modal from "@/app/components/projects/Modal/Modal";
import {useEffect, useState} from "react";
import {BreadcrumbItem, Breadcrumbs} from "@nextui-org/breadcrumbs";
import {Poppins} from "next/font/google";
import Lenis from "lenis";
import AlmostFooter from "@/app/components/almostFooter/AlmostFooter";


const poppinsThin = Poppins({
    weight: '200', subsets: ['latin'],
})

export default function Projects() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);
    const [modal, setModal] = useState({active: false, index: 0})
    return (
        <>
            <div className={'md:pb-28 pb-12'}>
                <div className={'md:pl-20 flex md:justify-start justify-center'}>
                    <Breadcrumbs size={'lg'} className={poppinsThin.className} itemClasses={{
                        item: "text-white/60 data-[current=true]:text-white",
                        separator: "text-white",
                    }}>

                        <BreadcrumbItem href={"/"}>Home</BreadcrumbItem>
                        <BreadcrumbItem href={"/projects"}>Projects</BreadcrumbItem>
                    </Breadcrumbs>

                </div>
                <div className={'md:p-44 p-12 md:flex w-full justify-start'}>
                    <div
                        className={'md:w-[50vw] w-full md:order-1  items-center order-2 md:text-start text-center flex md:justify-end justify-center'}>
                        <h1 className={`${poppinsThin.className} text-white md:text-[4rem] text-[2rem]`}>Creating next
                            level
                            digital products</h1>
                    </div>
                </div>
                <div className='flex  justify-center align-middle'>
                    <div>
                        <div className='md:w-[80vw] w-full text-[#FFFFFF] flex justify-center'>
                            <div className={`flex w-full items-center md:p-10 p-5 justify-between `}>
                                <p className={'md:text-[1rem] text-[0.7rem] md:w-[40%] w-[50%]'}>(CLIENT)</p>
                                <p className={`md:text-[1rem] text-[0.7rem] text-center md:w-[40%] md:block hidden ${poppinsThin.className}`}>(LOCATION)</p>
                                <p className={`md:text-[1rem] text-[0.7rem] text-center md:w-[20%] w-[40%] ${poppinsThin.className}`}>(SERVICES)</p>
                                <p className={`md:text-[1rem] text-[0.7rem] text-end md:w-[20%] w-[10%] ${poppinsThin.className}`}>(YEAR)</p>
                            </div>
                        </div>
                        <div className='md:w-[80vw] w-full flex flex-col text-white align-middle justify-center'>
                            {projectsList.map((project, index) => {
                                const projectName = project.title.toLowerCase().replace(/\s+/g, '-');
                                return <Project index={index} title={project.title} setModal={setModal} key={index}
                                                des={project.des} location={project.location} year={project.year}
                                                href={`/projects/${project.id}`}/>
                            })}
                        </div>
                        <Modal modal={modal} projects={projectsList}/>
                    </div>
                </div>
            </div>
            <AlmostFooter/>
        </>
    )
}