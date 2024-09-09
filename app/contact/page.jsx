'use client'
import {Poppins, Varela} from "next/font/google";
import Image from "next/image";
import image from "@/public/images/image.png";
import {Button, Divider} from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import {Textarea} from "@nextui-org/input";
import MagneticGSAP from "@/app/components/utils/MagneticGSAP";
import Lenis from "lenis";
import {useEffect, useRef} from "react";
import emailjs from '@emailjs/browser';
import {BreadcrumbItem, Breadcrumbs} from "@nextui-org/breadcrumbs";
import {useTranslation} from "react-i18next";

const poppinsBold = Poppins({
    weight: '600', subsets: ['latin'],
})
const poppinsThin = Poppins({
    weight: '200', subsets: ['latin'],
})

const varela = Varela({
    weight: '400', subsets: ['latin'],
})

export default function Contact() {

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);
    const {t} = useTranslation('contact'); // Utiliza useTranslation
    const stickyElement = useRef(null);

    const linkedin = "https://www.linkedin.com/in/lautaro-velez-ba345421b/"
    const github = "https://github.com/LautaroVelez"

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_d9pdm9r', 'template_6vol9oc', e.target, 'CeVl6Z3uKmdaG3xus')
            .then((result) => {
                console.log('email sended')
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <>
            <div>
                <div className={'md:pl-20 flex md:justify-start justify-center'}>
                    <Breadcrumbs size={'lg'} className={poppinsThin.className} itemClasses={{
                        item: "text-white/60 data-[current=true]:text-white",
                        separator: "text-white",
                    }}>

                        <BreadcrumbItem href={"/"}>Home</BreadcrumbItem>
                        <BreadcrumbItem href={"/contact"}>{t("contact_breadcrum")}</BreadcrumbItem>
                    </Breadcrumbs>
                </div>
                <div className={'md:p-44 p-12 md:flex w-full justify-center'}>
                    <div
                        className={'md:flex items-center md:order-2 order-1 md:w-[30vw] w-full md:justify-end justify-center'}>
                        <div className={'md:justify-end justify-center items-center flex '}>
                            <Image src={image} alt={'image'}
                                   className={'rounded-full md:h-auto md:w-[15vw] w-[40vw]'} priority/>
                        </div>
                    </div>
                    <div
                        className={'md:w-[40vw] w-full md:order-1  items-center order-2 md:text-start text-center flex md:justify-end justify-center'}>
                        <h1 className={`${poppinsThin.className} text-white md:text-[4rem] text-[2rem]`}>{t("work_together_message")}</h1>
                    </div>
                </div>
                <div className={'md:pl-12 p-12 md:flex flex-row w-full justify-center align-center'}>
                    <div className={'md:w-[30vw] flex w-full md:justify-end justify-start md:order-2 order-1 '}>
                        <div className={'flex-row'}>
                            <p className={`md:text-[1rem] text-[0.7rem] text-[lightgrey] ${poppinsThin.className}`}>{t("contact_details")}</p>
                            <p className={`md:text-[1rem] text-[0.7rem] pt-5 text-white ${poppinsThin.className}`}>lautivelez28@gmail.com</p>
                            <p className={`md:text-[1rem] text-[0.7rem] pt-2 text-white ${poppinsThin.className}`}>+54 9
                                3512743717</p>
                            <p className={`md:text-[1rem] text-[0.7rem] mt-6 mb-2 text-[lightgrey] ${poppinsThin.className}`}>{t("otherwise_details")}</p>
                            <a className={`md:text-[1rem] text-[0.7rem] pt-2 text-white block ${poppinsThin.className}  `}
                               href={linkedin}>LinkedIn</a>
                            <a className={` md:text-[1rem] text-[0.7rem] pt-2 text-white block ${poppinsThin.className}`}
                               href={github}>Github</a>

                        </div>
                    </div>
                    <div className={'md:w-[42vw] md:pt-0 pt-12 w-full justify-end md:order-1 order-2'}>
                        <form onSubmit={sendEmail}>
                            <div>
                                <Divider orientation={"horizontal"} className={'bg-white'}/>
                                <div className={'flex text-white items-center p-4 pt-12'}>
                                    <h1 className={`${poppinsThin.className}`}>01</h1>
                                    <h1 className={`${poppinsThin.className} pl-4 md:text-[2rem] text-[1rem] `}>{t("your_name")}</h1>
                                </div>
                                <Input type="text" name="from_name" variant={"underlined"} required label="Pepe Dou *"
                                       css={{fontSize: '2rem !important'}}
                                       className={` ${varela.className} text-[2rem] text-2xl text-white pt-2 capitalize`}
                                       color={"primary"}/>
                            </div>
                            <div className={'pt-12'}>

                                <div className={'flex text-white items-center p-4'}>
                                    <h1 className={`${poppinsThin.className} `}>02</h1>
                                    <h1 className={`${poppinsThin.className} pl-4 md:text-[2rem] text-[1rem]`}>{t("your_email")}</h1>
                                </div>
                                <Input type="email" name="reply_to" variant={"underlined"} required
                                       label="Pepe@dou.com *"
                                       className={'text-white pt-2'} color={"primary"}/>
                            </div>
                            <div className={'pt-12'}>
                                <div className={'flex text-white items-center p-4'}>
                                    <h1 className={`${poppinsThin.className} `}>03</h1>
                                    <h1 className={`${poppinsThin.className} pl-4 md:text-[2rem] text-[1rem]`}>{t("your_organization")}</h1>
                                </div>
                                <Input type="text" name="organization" variant={"underlined"} label="Pepe & Dou®"
                                       className={'text-white pt-2 capitalize'} color={"primary"}/>
                            </div>
                            <div className={'pt-12'}>

                                <div className={'flex text-white items-center p-4'}>
                                    <h1 className={`${poppinsThin.className} `}>04</h1>
                                    <h1 className={`${poppinsThin.className} pl-4 md:text-[2rem] text-[1rem]`}>{t("services")}</h1>
                                </div>
                                <Input type="text" name="services" variant={"underlined"} required
                                       label="Web design, Web development... *"
                                       className={'text-white pt-2 capitalize'} color={"primary"}/>
                            </div>
                            <div className={'pt-12'}>

                                <div className={'flex text-white items-center p-4'}>
                                    <h1 className={`${poppinsThin.className} `}>05</h1>
                                    <h1 className={`${poppinsThin.className} pl-4 md:text-[2rem] text-[1rem]`}>{t("your_message")}</h1>
                                </div>
                                <Textarea type="text" name="message" variant={'underlined'} size={'lg'} required
                                          label="Hello Lautaro, can you help me with ... *"
                                          className={'text-white pt-2 text-[1rem] normal-case'} color={"primary"}/>
                            </div>

                            <Divider orientation={'horizontal'} className={'bg-[gray] w-full mt-28 '}/>


                            <div className={' justify-end flex items-center'}>
                                <div className={'pr-12'}>
                                    <MagneticGSAP>
                                        <Button size={"lg"} type={"submit"}
                                                className={'w-auto md:w-[10vw] md:h-[20vh] h-[15vh] text-white font-bold bg-[#455ce9] rounded-[50%] buttonSend '}>{t("send")}</Button>
                                    </MagneticGSAP>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}