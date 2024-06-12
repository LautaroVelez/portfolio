import '../assets/styles/Technologies.css';
import {useRef, useEffect, useState} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {isMobile} from "react-device-detect";


const TechnologiesSection = () => {

    //calculo de animacion de repulsion
    //agarro la posicion del scroll y el top de la section
    const {scrollY} = useScroll();
    const sectionRef = useRef(null);
    const [sectionTop, setSectionTop] = useState(0);

    useEffect(() => {
        if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            setSectionTop(rect.top + window.scrollY);
        }
    }, [sectionRef]);


    const calculateRepulsion = (baseX, baseY, scrollY) => {
        const distanceY = (baseY - 100) - ((scrollY + 135) - sectionTop);
        const repulsion = Math.max(0, 120 - Math.abs(distanceY)) / 200;
        return baseX * repulsion;
    };


    const basePositionsLeft = [
        {x: -150, y: 0},
        {x: -150, y: 50},
        {x: -150, y: 100},
        {x: -150, y: 150},
        {x: -150, y: 200},
        {x: -150, y: 250},
        {x: -150, y: 300},
        {x: -150, y: 350},
        {x: -150, y: 400},
        {x: -150, y: 450},
        {x: -150, y: 500},
        {x: -150, y: 550},
        {x: -150, y: 600},
    ];

    const basePositionsRight = [
        {x: 150, y: 0},
        {x: 150, y: 50},
        {x: 150, y: 100},
        {x: 150, y: 150},
        {x: 150, y: 200},
        {x: 150, y: 250},
        {x: 150, y: 300},
        {x: 150, y: 350},
        {x: 150, y: 400},
        {x: 150, y: 450},
        {x: 150, y: 500},
        {x: 150, y: 550},
        {x: 150, y: 600},
    ];


    const word = useRef(null);
    const word2 = useRef(null);
    const word3 = useRef(null);


    const {scrollYProgress} = useScroll({

        target: sectionRef,
        offset: ["0 60vh", "50vh 50vh"],
    });


    const scale1 = useTransform(scrollYProgress, [0, 0.50], [3, 1]);
    const x1 = useTransform(scrollYProgress, [0, 0.50], ["80%", "0%"]);

    const scale2 = useTransform(scrollYProgress, [0, 0.50], [3, 1]);
    const x2 = useTransform(scrollYProgress, [0, 0.50], ["52%", "0%"]);

    const scale3 = useTransform(scrollYProgress, [0, 0.50], [3, 1]);
    const x3 = useTransform(scrollYProgress, [0, 0.50], ["-80%", "0%"]);


    const scale1Mobile = useTransform(scrollYProgress, [0, 0.50], [1, 0.5]);
    const x1Mobile = useTransform(scrollYProgress, [0, 0.50], ["10%", "0%"]);

    const scale2Mobile = useTransform(scrollYProgress, [0, 0.50], [1, 0.5]);
    const x2Mobile = useTransform(scrollYProgress, [0, 0.50], ["50%", "0%"]);

    const scale3Mobile = useTransform(scrollYProgress, [0, 0.50], [1, 0.5]);
    const x3Mobile = useTransform(scrollYProgress, [0, 0.50], ["0%", "0%"]);

    return (
        <section id='Technologies' className='h-[140vh] bg-[#3b4838] w-[100vw] Technologies' ref={sectionRef}>
            {isMobile ? (
                <motion.div ref={word} className='grid grid-cols-3 grid-rows-1 z-1 sticky top-50'>
                    <motion.h1 className={'TechsAndToolsMobile text-start ml-2'}
                               style={{scale: scale1Mobile, x: x1Mobile,}}>TECHNOLOGIES
                    </motion.h1>
                    <motion.h1 className={'TechsAndToolsMobile text-center'}
                               style={{scale: scale2Mobile, x: x2Mobile,}}>&
                    </motion.h1>
                    <motion.h1 className={'TechsAndToolsMobile text-end mr-2'}
                               style={{scale: scale3Mobile, x: x3Mobile,}}>TOOLS
                    </motion.h1>
                </motion.div>
            ) : (
                <motion.div ref={word} className='grid grid-cols-3 grid-rows-1 z-1  sticky top-50 justify-between'>
                    <motion.div style={{scale: scale1, x: x1,}}>
                        <h1 className={'text-start m-10 TextH1InPC'}>TECHNOLOGIES</h1>
                    </motion.div>
                    <motion.div style={{scale: scale2, x: x2}}>
                        <h1 className={' text-center m-10 TextH1InPC'}>&</h1>
                    </motion.div>
                    <motion.div style={{scale: scale3, x: x3}}>
                        <h1 className={' text-end m-10 TextH1InPC'}>TOOLS</h1>
                    </motion.div>
                </motion.div>
            )}

            {isMobile ? (
                <>
                    <div className="flex items-center relative justify-center h-screen">
                        <div className="grid grid-cols-2 gap-4 w-screen">
                            <div className="text-right">
                                {basePositionsLeft.map((pos, index) => (
                                    <h1
                                        key={index}
                                        className='italic ToolsMobile'
                                    >
                                        {['REACT', 'NEXT.JS', 'PYTHON', 'JAVASCRIPT', 'HTML5', 'CSS', 'MYSQL', 'FRAMER MOTION', 'TAILWIND', 'BOOTSTRAP', 'ANTD DESIGN', 'MATERIAL UI', 'FIGMA', 'MATERIAL DESIGN', 'RESPONSIVE DESIGN'][index]}
                                    </h1>
                                ))}
                            </div>
                            <div className="text-left">
                                {basePositionsLeft.map((pos, index) => (
                                    <h1
                                        key={index}
                                        className='italic ToolsMobile'
                                    >
                                        {['REACT', 'NEXT.JS', 'PYTHON', 'JAVASCRIPT', 'HTML5', 'CSS', 'MYSQL', 'FRAMER MOTION', 'TAILWIND', 'BOOTSTRAP', 'ANTD DESIGN', 'MATERIAL UI', 'FIGMA', 'MATERIAL DESIGN', 'RESPONSIVE DESIGN'][index]}
                                    </h1>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex items-center relative justify-center h-screen">
                    <div className="grid grid-cols-2 gap-4 w-screen">
                        <div className="text-right">
                            {basePositionsLeft.map((pos, index) => (
                                <motion.h1
                                    key={index}
                                    style={{
                                        x: useTransform(scrollY, (scrollY) => calculateRepulsion(pos.x, pos.y, scrollY))
                                    }}
                                    className='italic TextH1InPC'
                                >
                                    {['REACT', 'NEXT.JS', 'PYTHON', 'JAVASCRIPT', 'MYSQL', 'HTML5', 'CSS', 'FRAMER MOTION', 'TAILWIND', 'FIGMA', 'BOOTSTRAP', 'ANTD DESIGN', 'MATERIAL UI'][index]}
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
                                    className='italic TextH1InPC'
                                >
                                    {['REACT', 'NEXT.JS', 'PYTHON', 'JAVASCRIPT', 'MYSQL', 'HTML5', 'CSS', 'FRAMER MOTION', 'TAILWIND', 'FIGMA', 'BOOTSTRAP', 'ANTD DESIGN', 'MATERIAL UI'][index]}
                                </motion.h1>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default TechnologiesSection;