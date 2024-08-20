'use client'
import {Varela} from 'next/font/google'
import {Button, ButtonGroup, Divider} from "@nextui-org/react";

const varela = Varela({
    weight: '400',
    subsets: ['latin'],
})

export default function Navbar() {
    return (
        <div className={'md:sticky bg-[#171717] top-0 z-50'}>
            <div className={'flex flex-col md:flex-row justify-between items-center p-8 text-start '}>
                <div className={`text-start justify-start flex text-white sticky`}>

                    <a href="/">
                        <h1 className={`a ${varela.className} text-2xl md:text-4xl`}>LAUTARO</h1>
                    </a>
                </div>
                <div className={'flex items-center justify-center mt-4 md:mt-0'}>

                    <div className={`text-start justify-start flex text-white  sticky`}>
                        <a href="/about" >
                            <h1 className={`a ${varela.className} mx-2 text-[1rem] md:text-[1rem]`}>ABOUT</h1>
                        </a>
                    </div>

                    <div className={`text-start items-center justify-start flex text-white  sticky`}>
                        <a href="/projects">
                            <h1 className={`a ${varela.className} mx-2 text-[1rem] md:text-[1rem]`}>PROJECTS</h1>
                        </a>
                    </div>

                    <div className={`text-start items-center justify-start flex text-white sticky`}>

                        <a href="/contact">
                            <h1 className={`a ${varela.className} mx-2 text-[1rem] md:text-[1rem]`}>CONTACT</h1>
                        </a>
                    </div>

                </div>


            </div>
        </div>
    )
}

/*
<div className={'flex justify-end order-2 md:order-none md:mt-0 mt-4 sticky'}>
                    <ButtonGroup radius={'full'} size={'sm'}>
                        <Button className={'h-[5vh]  bg-black text-white'}>.ESP</Button>
                        <Button className={'h-[5vh] bg-[#E2DFD2]'}>.ENG</Button>
                    </ButtonGroup>
                </div>
 */