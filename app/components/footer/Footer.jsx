'use client'
import {Poppins} from "next/font/google";
import MagneticGSAP from "@/app/components/utils/MagneticGSAP";

import {useTranslation} from "react-i18next";

const poppinsThin = Poppins({
    weight: '200', subsets: ['latin'],
})

const poppinsBold = Poppins({
    weight: '600', subsets: ['latin'],
})

const linkedin = "https://www.linkedin.com/in/lautaro-velez-ba345421b/"
const github = "https://github.com/LautaroVelez"

const Footer = () => {


    const { t } = useTranslation('footer');

    let options = {
            timeZone: 'America/Argentina/Buenos_Aires',
            hour: 'numeric',
            minute: 'numeric',
        },
        formatter = new Intl.DateTimeFormat([], options);

    return (
        <div className={'md:h-[full] h-[full] w-full'}>
            <div className={'bottom-0 w-full flex text-white  md:pt-16 pt-12  pb-5'}>
                <div className={'flex-row md:w-[15%] w-[30%] text-center'}>
                    <p className={`md:text-[0.8rem] text-[0.6rem] ${poppinsThin.className}`}>(VERSION)</p>
                    <p className={`md:text-[1rem] text-[0.7rem] ${poppinsThin.className} pt-2`}>{t("version_edition")}</p>
                </div>
                <div className={'flex-row md:w-[20%] w-[40%] text-center'}>
                    <p className={`md:text-[0.8rem] text-[0.6rem] ${poppinsThin.className}`}>{t("local_time")}</p>
                    <p className={`md:text-[1rem] text-[0.7rem] uppercase ${poppinsThin.className} pt-2`}>{formatter.format(new Date())} GMT-3</p>
                </div>

                <div className={'w-full md:justify-end justify-end text-end flex md:pr-0 pr-10 right-0 '}>
                    <div className={'flex-row w-[20%] text-center'}>
                        <p className={`md:text-[0.8rem] text-[0.6rem] ${poppinsThin.className}`}>{t("socials")}</p>
                        <div className={'flex text-center justify-center '}>
                            <MagneticGSAP>
                                <a className={`a md:text-[1rem] text-[0.7rem] ${poppinsThin.className} pt-2 mx-2 project`}
                                   href={linkedin}>LinkedIn</a>
                            </MagneticGSAP>
                            <MagneticGSAP>
                                <a className={`a md:text-[1rem] text-[0.7rem] ${poppinsThin.className} pt-2 mx-2 project`}
                                   href={github}>Github</a>
                            </MagneticGSAP>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;