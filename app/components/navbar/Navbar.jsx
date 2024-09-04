'use client'
import {Varela} from 'next/font/google'
import {Button, ButtonGroup, Divider, Switch} from "@nextui-org/react";
import {useState} from "react";
import {useTranslation} from 'react-i18next';

const varela = Varela({
    weight: '400',
    subsets: ['latin'],
})

export default function Navbar() {
    const {i18n} = useTranslation();

   const handleLeng = () => {
        const newLanguage = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <div className={'md:sticky bg-[#171717] top-0 z-50'}>
            <div className={'flex flex-col md:flex-row justify-between w-full items-center p-8 text-start '}>
                <div className={`text-start justify-start flex text-white sticky`}>
                    <a href="/">
                        <h1 className={`a ${varela.className} text-2xl md:text-4xl`}>LAUTARO</h1>
                    </a>
                </div>
                <div className={'flex items-center justify-center mt-4 md:mt-0'}>

                    <div className={`text-start justify-start flex text-white  sticky`}>
                        <a href="/about">
                            <h1 className={`a ${varela.className} mr-2 text-[1rem] md:text-[1rem]`}>ABOUT</h1>
                        </a>
                    </div>

                    <div className={`text-start items-center justify-start flex text-white  sticky`}>
                        <a href="/projects">
                            <h1 className={`a ${varela.className} text-[1rem] md:text-[1rem]`}>PROJECTS</h1>
                        </a>
                    </div>

                    <div className={`text-start items-center justify-start flex text-white sticky`}>
                        <a href="/contact">
                            <h1 className={`a ${varela.className} ml-2 text-[1rem] md:text-[1rem]`}>CONTACT</h1>
                        </a>
                    </div>
                </div>
                <div className={'flex justify-center items-center text-white'}>

                    <span className={'switch'}>
                         <input
                             type="checkbox"
                             id={'switcher'}
                             onClick={handleLeng}
                             className={`${varela.className}`}
                             checked={i18n.language === 'es'}
                             readOnly
                         />
                        <label htmlFor="switcher"/>
                    </span>

                </div>
            </div>
        </div>
    )
}
