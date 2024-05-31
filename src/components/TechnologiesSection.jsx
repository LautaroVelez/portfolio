import '../assets/styles/Technologies.css';
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


const TechnologiesSection = () => {
    const word = useRef(null);
    const word2 = useRef(null);
    const word3 = useRef(null);
    const [scrollY, setScrollY] = useState(0);


    const { scrollYProgress } = useScroll();


    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };


        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const calculateRepulsion = (wordX, wordY) => {
        const distance = Math.sqrt(wordX ** 2 + (wordY - scrollY) ** 2);
        const force = Math.max(0, 200 - distance) / 200;
        return force * wordX;
    };


    return (
        <section id='Technologies' className='h-[140vh] FontSection'>
            <div className='grid grid-cols-3 grid-rows-1 z-3 sticky top-50 justify-between mt-20'>
                <div
                    className='text-start'
                >
                    <h1>TECHNOLOGIES</h1>
                </div>
                <div className='text-center'


                >
                    <h1>&</h1>
                </div>
                <div className='text-end'


                >
                    <h1>TOOLS</h1>
                </div>
            </div>


            <div className="flex items-center justify-center h-screen">
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-right">
                        <h1 style={{ transform: `translateX(${calculateRepulsion(-150, 0)}px)` }}>REACT</h1>
                        <h1 style={{ transform: `translateX(${calculateRepulsion(-150, 50)}px)` }}>JAVASCRIPT</h1>
                        <h1 style={{ transform: `translateX(${calculateRepulsion(-150, 100)}px)` }}>HTML5</h1>
                        <h1 style={{ transform: `translateX(${calculateRepulsion(-150, 150)}px)` }}>CSS</h1>
                        <h1 style={{ transform: `translateX(${calculateRepulsion(-150, 200)}px)` }}>PYTHON</h1>
                        <h1 style={{ transform: `translateX(${calculateRepulsion(-150, 250)}px)` }}>FRAMER MOTION</h1>
                        <h1 style={{ transform: `translateX(${calculateRepulsion(-150, 300)}px)` }}>RESPONSIVE DESIGN</h1>
                    </div>
                    <div className="text-left">
                        <h1 style={{ transform: `translateX(${calculateRepulsion(150, 0)}px)` }}>BOOTSTRAP</h1>
                        <h1 style={{ transform: `translateX(${calculateRepulsion(150, 50)}px)` }}>TAILWIND</h1>
                        <h1 style={{ transform: `translateX(${calculateRepulsion(150, 100)}px)` }}>FIGMA</h1>
                        <h1 style={{ transform: `translateX(${calculateRepulsion(150, 150)}px)` }}>PYTHON</h1>
                        <h1 style={{ transform: `translateX(${calculateRepulsion(150, 200)}px)` }}>MATERIAL DESIGN</h1>
                        <h1 style={{ transform: `translateX(${calculateRepulsion(150, 250)}px)` }}>MUI</h1>
                        <h1 style={{ transform: `translateX(${calculateRepulsion(150, 300)}px)` }}>NEXT.JS</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default TechnologiesSection;



