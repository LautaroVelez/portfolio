'use client'
import {Varela} from 'next/font/google';
import {useCallback, useEffect} from "react";
import {useTranslation} from 'react-i18next';
import Template from "@/app/template";
import i18n from "@/i18n";

const varela = Varela({
    weight: '400',
    subsets: ['latin'],
});

export default function Navbar() {
    const {t, i18n} = useTranslation('navbar');

    // Callback memoized to prevent unnecessary re-creations on each render
    const handleLeng = useCallback(() => {
        const newLanguage = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLanguage);
    }, [i18n]);

    useEffect(() => {
        // Ensure i18n is initialized (if not already handled elsewhere)
        if (!i18n.isInitialized) {
            i18n.init();
        }
    }, [i18n]);

    return (
        <div className="md:sticky bg-[#171717] top-0 z-50">
            <div className="flex flex-col md:flex-row justify-between w-full items-center p-8 text-start">
                <div className="text-start justify-start flex text-white sticky">
                    <a href="/">
                        <h1 className={`a ${varela.className} text-2xl md:text-4xl`}>LAUTARO</h1>
                    </a>
                </div>
                <Template>
                    <div className="flex items-center justify-center mt-4 md:mt-0">
                        <div className="text-start justify-start flex text-white sticky">
                            <a href="/about">
                                <h1 className={`a ${varela.className} mr-2 text-[1rem] md:text-[1rem]`}>
                                    {t('about_message')}
                                </h1>
                            </a>
                        </div>
                        <div className="text-start items-center justify-start flex text-white sticky">
                            <a href="/projects">
                                <h1 className={`a ${varela.className} text-[1rem] md:text-[1rem]`}>
                                    {t('projects_message')}
                                </h1>
                            </a>
                        </div>
                        <div className="text-start items-center justify-start flex text-white sticky">
                            <a href="/contact">
                                <h1 className={`a ${varela.className} ml-2 text-[1rem] md:text-[1rem]`}>
                                    {t('contact_message')}
                                </h1>
                            </a>
                        </div>
                    </div>
                </Template>
                <div className="flex justify-center items-center text-white">
                    <span className="switch">
                        <input
                            type="checkbox"
                            id="switcher"
                            onClick={handleLeng}
                            className={varela.className}
                            checked={i18n.language === 'es'}
                            readOnly
                        />
                        <label htmlFor="switcher"/>
                    </span>
                </div>
            </div>
        </div>
    );
}
