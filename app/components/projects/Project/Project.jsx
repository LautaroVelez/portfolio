'use client';
import React from 'react';
import styles from './style.module.css';
import {Poppins} from "next/font/google";
import Link from "next/link";
import {useTranslation} from "react-i18next"; // Importa useTranslation

const poppinsThin = Poppins({
    weight: '200', subsets: ['latin'],
})

export default function Project({index, title, setModal, location, des, made, href}) {
    const { t } = useTranslation('projects'); // Utiliza useTranslation
    
    return (
        <Link href={href} className={'block'}>
            <div
                className={`flex w-full items-center md:p-10 p-5 justify-between border-t-1 border-t-white ${styles.project}`}
                onMouseEnter={() => {setModal({active: true, index})}}
                onMouseLeave={() => {setModal({active: false, index})}}
            >
                <h2 className={'md:text-[2.5rem] text-[1rem] md:w-[40%] w-[50%]'}>{title}</h2>
                <p className={`md:text-[1rem] text-[0.7rem] text-center md:w-[40%] md:block hidden ${poppinsThin.className}`}>{location}</p>
                <p className={`md:text-[1rem] text-[0.7rem] text-center w-[auto] ${poppinsThin.className}`}>{made}</p>
                <p className={`md:text-[1rem] text-[0.7rem] text-end md:w-[auto]  w-[40%]  ${poppinsThin.className}`}>{des}</p>
            </div>
        </Link>
    );
}
