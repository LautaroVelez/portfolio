import '../assets/styles/Technologies.css';
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TechnologiesSection = () => {
    const { scrollY } = useScroll();
    const sectionRef = useRef(null);
    const [sectionTop, setSectionTop] = useState(0);

    useEffect(() => {
        if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            setSectionTop(rect.top + window.scrollY);
        }
    }, [sectionRef]);

    const calculateRepulsion = (baseX, baseY, scrollY) => {
        const distanceY = (baseY-75) - ((scrollY+50) - sectionTop);
        const repulsion = Math.max(0, 150 - Math.abs(distanceY)) / 200;
        return baseX * repulsion;
    };

    const basePositionsLeft = [
        { x: -150, y: 0 },
        { x: -150, y: 50 },
        { x: -150, y: 100 },
        { x: -150, y: 150 },
        { x: -150, y: 200 },
        { x: -150, y: 250 },
        { x: -150, y: 300 },
    ];

    const basePositionsRight = [
        { x: 150, y: 0 },
        { x: 150, y: 50 },
        { x: 150, y: 100 },
        { x: 150, y: 150 },
        { x: 150, y: 200 },
        { x: 150, y: 250 },
        { x: 150, y: 300 },
    ];

    return (
        <section id='Technologies' className='h-[140vh] FontSection Technologies' ref={sectionRef}>
            <div className='grid grid-cols-3 grid-rows-1 z-1 sticky top-50 justify-between mt-20'>
                <div className='text-start'>
                    <h1>TECHNOLOGIES</h1>
                </div>
                <div className='text-center'>
                    <h1>&</h1>
                </div>
                <div className='text-end'>
                    <h1>TOOLS</h1>
                </div>
            </div>

            <div className="flex items-center justify-center h-screen">
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-right">
                        {basePositionsLeft.map((pos, index) => (
                            <motion.h1
                                key={index}
                                style={{
                                    x: useTransform(scrollY, (scrollY) => calculateRepulsion(pos.x, pos.y, scrollY))
                                }}
                            >
                                {['REACT', 'JAVASCRIPT', 'HTML5', 'CSS', 'PYTHON', 'FRAMER MOTION', 'RESPONSIVE DESIGN'][index]}
                            </motion.h1>
                        ))}
                    </div>
                    <div className="text-left">
                        {basePositionsRight.map((pos, index) => (
                            <motion.h1
                                key={index}
                                style={{
                                    x: useTransform(scrollY, (scrollY) => calculateRepulsion(pos.x, pos.y, scrollY))
                                }}
                            >
                                {['BOOTSTRAP', 'TAILWIND', 'FIGMA', 'PYTHON', 'MATERIAL DESIGN', 'MUI', 'NEXT.JS'][index]}
                            </motion.h1>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologiesSection;