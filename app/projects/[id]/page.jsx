'use client'
import {BreadcrumbItem, Breadcrumbs} from "@nextui-org/breadcrumbs";
import {Poppins, Varela} from "next/font/google";
import projectsList from "@/app/projects/projectsList";
import {Button, Divider} from "@nextui-org/react";
import Lenis from "lenis";
import {useEffect} from "react";
import AlmostFooter from "@/app/components/almostFooter/AlmostFooter";
import MagneticGSAP from "@/app/components/utils/MagneticGSAP";
import {FaArrowRight} from "react-icons/fa6";
import Image from 'next/image'


const poppinsThin = Poppins({
    weight: '200',
    subsets: ['latin'],
});

const varela = Varela({
    weight: '400',
    subsets: ['latin'],
});

export default function ProjectPage({params}) {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    const {id} = params;
    const project = projectsList.find(proj => proj.id === id);
    if (!project) {
        return (
            <div className={'text-white text-center text-3xl items-center flex justify-center h-[100vh]'}>
                Project not found
            </div>
        );
    }

    let roleContent = null;
    if (project.title === 'FINANCE') {
        roleContent = (
            <div className={'md:pt-8 md:px-32 pt-8 px-6'}>
                <div className={'flex justify-start text-[lightgrey]'}>
                    <p className={`md:text-[1rem] text-[0.7rem] ${poppinsThin.className}`}>(ROLE)</p>
                </div>
                <div>
                    <Divider orientation={"horizontal"} className={'text-white bg-white w-full mt-2'}/>
                </div>
                <div className={'pt-4 text-start justify-end text-white'}>
                    <p className={`lg:text-[2rem] md:text-[2rem] sm:text-[0.7rem] ${poppinsThin.className}`}>{project.roleTitle}</p>
                </div>
                <div className={'pt-12 text-start justify-end text-white'}>
                    <p className={`lg:text-[2rem] md:text-[2rem] sm:text-[0.7rem] ${poppinsThin.className}`}>{project.role}</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className={'md:pb-28 pb-12 text-white'}>
                <div className={'md:pl-20 flex md:justify-start justify-center'}>
                    <Breadcrumbs size={'lg'} className={poppinsThin.className} itemClasses={{
                        item: "text-white/60 data-[current=true]:text-white",
                        separator: "text-white",
                    }}>
                        <BreadcrumbItem href={"/"}>Home</BreadcrumbItem>
                        <BreadcrumbItem href={"/projects"}>Projects</BreadcrumbItem>
                        <BreadcrumbItem href={`/projects/${project.id}`}>{project.title}</BreadcrumbItem>
                    </Breadcrumbs>
                </div>
                <h1 className={`${varela.className} md:text-[6rem] text-[2rem] md:pl-20 pl-0 md:text-start text-center`}>{project.title}</h1>
                <div className={'flex text-white justify-center '}>
                    <div className={'md:w-[90vw] w-[full] md:flex flex-row pt-12'}>
                        <div className={'md:w-[30%] w-[60vw] flex justify-center'}>
                            <div className={'flex-row w-full '}>
                                <h1 className={'pl-3'}>(ROLE / SERVICES)</h1>
                                <Divider orientation={"horizontal"} className={'text-white bg-white w-full'}/>

                                <h1 className={`${poppinsThin.className} pt-6 pl-2 text-white md:text-[1rem] text-[0.7rem]`}>
                                    {project.des}
                                </h1>
                            </div>
                        </div>

                        <div className={'md:w-[30%] w-[60vw] flex justify-center md:mx-28 md:pt-0 pt-12'}>
                            <div className={'flex-row w-full '}>
                                <h1 className={'pl-3'}>(MADE WITH)</h1>
                                <Divider orientation={"horizontal"} className={'text-white bg-white w-full'}/>

                                <h1 className={`${poppinsThin.className} pt-6 pl-2 text-white md:text-[1rem] text-[0.7rem]`}>
                                    {project.made}
                                </h1>
                            </div>
                        </div>

                        <div className={'md:w-[30%] w-[60vw] flex justify-center md:pt-0 pt-12'}>
                            <div className={'flex-row w-full '}>
                                <h1 className={'pl-3'}>(LOCATION & YEAR)</h1>
                                <Divider orientation={"horizontal"} className={'text-white bg-white w-full'}/>
                                <h1 className={`${poppinsThin.className} pt-6 pl-2 text-white md:text-[1rem] text-[0.7rem]`}>
                                    {project.location}, {project.year}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={'md:pt-20 pt-12 md:pb-0 pb-12 md:justify-end md:w-[75vw] w-full justify-center flex items-center'}>
                    <MagneticGSAP>
                        <a href={project.link} target="_blank" className={'items-center flex'}>
                            <Button size={"lg"} type={"submit"}
                                    className={'w-auto md:w-[150px] md:h-[150px] h-[7vh] text-white font-bold items-center flex bg-[#455ce9] md:rounded-[55%] rounded-2xl buttonLink md:translate-y-16 '}>Live
                                site<FaArrowRight className={'items-center justify-center flex'}/></Button></a>
                    </MagneticGSAP>
                </div>
                <div className={'flex md:w-[90vw] w-full justify-center items-center mx-auto'}>
                    <div className={'flex justify-center w-[90%]'}>
                        <Image src={`/images/${project.directory}/${project.src}`} alt={project.title}
                             className={' object-contain rounded-xl'} width={1200} height={900}/>
                    </div>
                </div>


                <div className={'md:pt-8 md:px-32 pt-8 px-6'}>
                    <div className={'flex justify-start text-[lightgrey]'}>
                        <p className={`md:text-[1rem] text-[0.7rem] ${poppinsThin.className}`}>(ABOUT)</p>
                    </div>
                    <div>
                        <Divider orientation={"horizontal"} className={'text-white bg-white w-full mt-2'}/>
                    </div>
                    <div className={'pt-12 text-start justify-end text-white'}>
                        <p className={`lg:text-[2rem] md:text-[2rem] sm:text-[0.7rem] ${poppinsThin.className}`}>{project.about}</p>
                    </div>
                </div>
            </div>
            {roleContent && <div>{roleContent}</div>}
            <div className={'mt-28 w-full h-full flex justify-center relative'}>
                <div className={'relative w-[80vw] h-full flex justify-center items-center'}>
                    <video autoPlay loop muted controls className={'z-10 rounded-xl'}>
                        <source src={`/images/${project.directory}/${project.video}`}/>
                    </video>
                </div>
            </div>
            <div className={'md:mt-28 mt-12 w-full h-full flex justify-center relative'}>
                <div className={'relative w-[80vw] h-full flex flex-wrap justify-center items-center'}>
                    {project.responsive.map(({id, src}) => (
                        <div className={'w-auto  p-2'} key={id}>
                            <Image src={`/images/${project.directory}/${src}`} priority alt={src} width={600} height={800}
                                   className={' rounded-xl'}/>
                        </div>
                    ))}
                </div>
            </div>
            <AlmostFooter/>
        </>
    );
}