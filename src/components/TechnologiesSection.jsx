import '../assets/styles/Technologies.css';
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TechnologiesSection = () => {

    //calculo de animacion de repulsion
    //agarro la posicion del scroll y el top de la section
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
        const distanceY = (baseY-75) - ((scrollY+20) - sectionTop);
        const repulsion = Math.max(0, 120 - Math.abs(distanceY)) / 200;
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


    const word = useRef(null);
    const word2 = useRef(null);
    const word3 = useRef(null);


    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["0 60vh", "50vh 50vh"],
    });

   
    const scale1 = useTransform(scrollYProgress, [0, 0.50], [3, 1]);
    const x1 = useTransform(scrollYProgress, [0, 0.50], ["80%", "0%"]);

    const scale2 = useTransform(scrollYProgress, [0, 0.50], [3, 1]);
    const x2 = useTransform(scrollYProgress, [0, 0.50], ["52%", "0%"]);

    const scale3 = useTransform(scrollYProgress, [0, 0.50], [3, 1]);
    const x3 = useTransform(scrollYProgress, [0, 0.50], ["-80%", "0%"]);

    return (
        <section id='Technologies' className='h-[140vh] bg-[#3b4838] Technologies' ref={sectionRef}>
        
            <div className='grid grid-cols-3 grid-rows-1 z-1 sticky top-50 justify-between'>
                
                <motion.div style={{scale: scale1, x: x1,}}>
                    <h1 ref={word} className={'SmallText text-start m-10'}>TECHNOLOGIES</h1>
                </motion.div>
                <motion.div style={{scale: scale2, x: x2}}>
                    <h1 className={'SmallText text-center m-10'}>&</h1>
                </motion.div>
                <motion.div style={{scale: scale3, x: x3}}>
                    <h1 className={'SmallText text-end m-10'}>TOOLS</h1>
                </motion.div>
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