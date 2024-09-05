'use client'
import Lenis from "lenis";
import {useEffect} from "react";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/breadcrumbs";
import {Poppins} from "next/font/google";
import Image from 'next/image'
import me from '@/public/images/me.jpg'
import {Divider} from "@nextui-org/react";
import AlmostFooter from "@/app/components/almostFooter/AlmostFooter";
import {useTranslation} from "react-i18next";

const poppinsThin = Poppins({
    weight: '200', subsets: ['latin'],
})
const poppinsBold = Poppins({
    weight: '600', subsets: ['latin'],
})
export default function Page() {

    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);

    const learning = <span className={`${poppinsBold.className} pt-3 text-white md:text-[2rem] text-[1rem]`}>Nodejs &
        Angular</span>

    const { t } = useTranslation('about');

    return (

            <div className={'md:pb-28 pb-20'}>
                <div className={'md:pl-20 flex md:justify-start justify-center'}>
                    <Breadcrumbs size={'lg'} className={poppinsThin.className} itemClasses={{
                        item: "text-white/60 data-[current=true]:text-white",
                        separator: "text-white",
                    }}>

                        <BreadcrumbItem href={"/"}>Home</BreadcrumbItem>
                        <BreadcrumbItem href={"/about"}>{t("breadcrum_about")}</BreadcrumbItem>
                    </Breadcrumbs>
                </div>
                <div className={'md:flex flex-row w-full p-12 justify-center items-center'}>
                    <div className={'md:mr-12 mr-0 md:text-end text-center  flex md:justify-end justify-center'}>
                        <div className={'md:w-[40vw] w-[70vw] flex-row'}>
                            <h1 className={`${poppinsThin.className} text-white md:text-[2rem] text-[1rem]`}>{t("hello_there_message")}</h1>
                            <h1 className={`${poppinsThin.className} text-white md:text-[2rem] text-[1rem] pt-10`}>{t("i_enjoy_message")}</h1>
                        </div>
                    </div>
                    <div className={'md:w-[40vw] flex justify-center md:pt-0 pt-10'}>
                        <Image src={me} alt={'me'} priority className={'rounded-3xl md:w-[30vw] w-[60vw] h-auto'}/>
                    </div>
                </div>
                <div className={'text-start flex md:pt-12 pt-6 justify-center '}>
                    <div className={'w-[70vw]'}>
                        <h1 className={`${poppinsThin.className} text-white md:text-[2rem] text-[1rem]`}>{t("improving_message")}</h1>
                        <h1 className={`${poppinsThin.className} text-start md:pt-8 pt-6 text-white md:text-[2rem] text-[1rem]`}>
                            {t("learning_message")} {learning}.</h1>
                    </div>
                </div>
                <div className={'md:pl-20 pt-32 pl-0 md:text-start text-center'}>
                    <h1 className={`${poppinsThin.className} text-white md:text-[2.5rem] text-[1.5rem]`}>
                        {t("help_message")}</h1>
                </div>

                <div className={'flex text-white justify-center '}>
                    <div className={'md:w-[90vw] w-[full] md:flex flex-row pt-12'}>
                        <div className={'md:w-[30%] w-[60vw] flex justify-center'}>
                            <div className={'flex-row w-full '}>
                                <h1 className={'pl-3'}>01</h1>
                                <Divider orientation={"horizontal"} className={'text-white bg-white w-full'}/>
                                <h1 className={`${poppinsThin.className} pt-6 pl-2 text-white md:text-[2.5rem] text-[1.5rem]`}>
                                    {t("design")}</h1>
                                <h1 className={`${poppinsThin.className} pt-6 pl-2 text-white md:text-[1rem] text-[0.7rem]`}>
                                    {t("design_message")}
                                </h1>
                            </div>
                        </div>

                        <div className={'md:w-[30%] w-[60vw] flex justify-center md:mx-28 md:pt-0 pt-12'}>
                            <div className={'flex-row w-full '}>
                                <h1 className={'pl-3'}>02</h1>
                                <Divider orientation={"horizontal"} className={'text-white bg-white w-full'}/>
                                <h1 className={`${poppinsThin.className} pt-6 pl-2 text-white md:text-[2.5rem] text-[1.5rem]`}>
                                    {t("development")}</h1>
                                <h1 className={`${poppinsThin.className} pt-6 pl-2 text-white md:text-[1rem] text-[0.7rem]`}>
                                    {t("development_message")}
                                </h1>
                            </div>
                        </div>

                        <div className={'md:w-[30%] w-[60vw] flex justify-center md:pt-0 pt-12'}>
                            <div className={'flex-row w-full '}>
                                <h1 className={'pl-3'}>03</h1>
                                <Divider orientation={"horizontal"} className={'text-white bg-white w-full'}/>
                                <h1 className={`${poppinsThin.className} pt-6 pl-2 text-white md:text-[2.5rem] text-[1.5rem]`}>
                                    {t("package")}</h1>
                                <h1 className={`${poppinsThin.className} pt-6 pl-2 text-white md:text-[1rem] text-[0.7rem]`}>
                                    {t("package_message")}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <AlmostFooter/>
            </div>
    )
}


