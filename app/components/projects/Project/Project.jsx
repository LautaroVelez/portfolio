'use client';
import React from 'react'
import styles from './style.module.css';
import {Poppins} from "next/font/google";
import Link from "next/link";
const poppinsThin = Poppins({
    weight: '200', subsets: ['latin'],
})
export default function Project({index, title, setModal, location, year, des, href}) {
    return (
        <Link href={href} className={'block'}>
            <div
                className={`flex w-full items-center md:p-10 p-5 justify-between border-t-1 border-t-white ${styles.project}`}
                onMouseEnter={() => {setModal({active: true, index})}}
                onMouseLeave={() => {setModal({active: false, index})}}
            >
                <h2 className={'md:text-[2.5rem] text-[1rem] md:w-[40%] w-[50%]'}>{title}</h2>
                <p className={`md:text-[1rem] text-[0.7rem] text-center md:w-[40%] md:block hidden ${poppinsThin.className}`}>{location}</p>
                <p className={`md:text-[1rem] text-[0.7rem] text-center md:w-[20%] w-[40%] ${poppinsThin.className}`}>{des}</p>
                <p className={`md:text-[1rem] text-[0.7rem] text-end md:w-[20%] w-[10%] ${poppinsThin.className}`}>{year}</p>
            </div>
        </Link>
    );
}