'use client'
import Project from "@/app/components/projects/Project/Project";
import Modal from "@/app/components/projects/Modal/Modal";
import { useEffect, useState } from "react";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/breadcrumbs";
import { Poppins } from "next/font/google";
import Lenis from "lenis";
import AlmostFooter from "@/app/components/almostFooter/AlmostFooter";
import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import useProjectsList from "@/app/projects/projectsList";

const poppinsThin = Poppins({
    weight: '200', subsets: ['latin'],
})

export default function Projects() {
     const { t } = useTranslation('projects');
    const projectsList = useProjectsList();

    const filterButtons = [
        t('filter_all'),
        t('work'),
        t('filter_personal_projects')
    ];

    const [filterList, setFilterList] = useState([]);
    const [typeFilter, setTypeFilter] = useState();

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        setFilterList(projectsList);
    }, []);

    const [modal, setModal] = useState({ active: false, index: 0 });

    function handleFilter(filterName) {
        switch (filterName) {
            case t('filter_all'):
                setFilterList(projectsList);
                setTypeFilter(filterName);
                break;
            case t('filter_personal_projects'):
                setFilterList(projectsList.filter(project => project.des.includes(t("filter_personal"))));
                setTypeFilter(filterName);
                break;
            case t('work'):
                setFilterList(projectsList.filter(project => project.des === t("filter_work")));
                setTypeFilter(filterName);
                break;
            default:
                setFilterList(projectsList);
                break;
        }
    }

    return (
        <>
            <div className={'md:pb-28 pb-12'}>
                <div className={'md:pl-20 flex md:justify-start justify-center'}>
                    <Breadcrumbs size={'lg'} className={poppinsThin.className} itemClasses={{
                        item: "text-white/60 data-[current=true]:text-white",
                        separator: "text-white",
                    }}>
                        <BreadcrumbItem href={"/"}>{t("home")}</BreadcrumbItem>
                        <BreadcrumbItem href={"/projects"}>{t("projects_breadcrumb")}</BreadcrumbItem>
                    </Breadcrumbs>
                </div>
                <div className={'md:p-44 p-12  w-full justify-start'}>
                    <div className={'md:w-[50vw] w-full md:order-1  items-center order-2 md:text-start text-center flex md:justify-end justify-center'}>
                        <h1 className={`${poppinsThin.className} text-white md:text-[4rem] text-[2rem]`}>{t("projects_message")}</h1>
                    </div>
                    <div className={'mt-12 md:flex md:justify-start w-full justify-center'}>
                        {filterButtons.map((filterName, index) => (
                            <Button key={index}
                                    onClick={() => handleFilter(filterName)}
                                    className={`md:w-auto md:h-[10vh] h-[8vh] w-full bg-[#171717] border border-white text-white hover:bg-[#525252] hover:border-[#525252] md:mx-4 md:mt-0 mt-4 ${typeFilter === filterName ? "bg-[#525252] border-[#525252]" : ""}`}
                                    radius={"full"}
                                    size={"lg"}>{filterName}</Button>
                        ))}
                    </div>
                </div>

                <div className='flex justify-center align-middle'>
                    <div>
                        <div className='md:w-[80vw] w-full text-[#FFFFFF] flex justify-center'>
                            <div className={`flex w-full items-center md:p-10 p-5 justify-between`}>
                                <p className={'md:text-[1rem] text-[0.7rem] md:w-[40%] w-[50%]'}>{t("client")}</p>
                                <p className={`md:text-[1rem] text-[0.7rem] text-center md:w-[40%] md:block hidden ${poppinsThin.className}`}>{t("location")}</p>
                                <p className={`md:text-[1rem] text-[0.7rem] text-center md:w-[20%] w-[40%] ${poppinsThin.className}`}>{t("services")}</p>
                                <p className={`md:text-[1rem] text-[0.7rem] text-end md:w-[20%] w-[10%] ${poppinsThin.className}`}>{t("year")}</p>
                            </div>
                        </div>
                        <div className='md:w-[80vw] w-full flex flex-col text-white align-middle justify-center'>
                            {filterList.map((project, index) => {
                                const projectName = project.title.toLowerCase().replace(/\s+/g, '-');
                                return <Project index={index} title={project.title} setModal={setModal} key={index}
                                                des={project.des} location={project.location} year={project.year}
                                                href={`/projects/${project.id}`}/>
                            })}
                        </div>
                        <Modal modal={modal} projects={filterList}/>
                    </div>
                </div>
            </div>
            <AlmostFooter/>
        </>
    );
}
