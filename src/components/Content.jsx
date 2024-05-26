import React from 'react'
import '../assets/styles/Footer.css';

export default function Content() {
    return (
        <div className='bg-[#FBF4EA] py-8 px-12 h-full w-full flex flex-col justify-between'>
            <Section1/>
            <Section2/>
        </div>
    )
}

const Section1 = () => {
    return (
        <div>
            <Nav/>
        </div>
    )
}

const Section2 = () => {
    return (
        <div className=' items-end'>
            <h1 className='fontPrincipalFooter'>Lautaro Velez</h1>
        </div>
    )
}

const Nav = () => {
    const Linkedin = "https://www.linkedin.com/in/lautaro-velez-ba345421b/";
    const Github = "https://github.com/LautaroVelez";

    return (
        <div className='flex shrink-0 gap-20 fonth3Footer'>
            <div className='flex flex-col gap-2'>
                <h3 className='uppercase text-black font-bold underline'>About</h3>
                <a className={'pInFooter'}>Home</a>
                <a className={'pInFooter'}>Projects</a>
                <a className={'pInFooter'}>About Me</a>

            </div>
            <div className='flex flex-col gap-2 fonth3Footer'>
                <h3 className='uppercase text-black font-bold underline'>Contact Me</h3>
                <p className={'pInFooter'}>lautivelez28@gmail.com</p>
                <a href={Linkedin} className={'pInFooter '}>LinkedIn</a>
                <a href={Github} className={'pInFooter'}>Github</a>
            </div>
        </div>
    )
}