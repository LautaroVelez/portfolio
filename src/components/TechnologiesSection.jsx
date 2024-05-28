import '../assets/styles/Technologies.css';
import {useRef} from "react";

import {motion, useScroll, useTransform} from "framer-motion";
import {Col, Row} from 'react-bootstrap';

const TechnologiesSection = () => {

    const word = useRef(null);
    const word2 = useRef(null);
    const word3 = useRef(null);


    const {scrollYProgress} = useScroll({
        target: word, word2, word3,
        offset: ["0 60vh", "end 50vh"],
    });

    const scale1 = useTransform(scrollYProgress, [0, 1], [3, 0.35]);
    const x1 = useTransform(scrollYProgress, [0, 1], ["80%", "-35%"]);

    const scale2 = useTransform(scrollYProgress, [0, 1], [3, 0.35]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["52%", "-32%"]);

    const scale3 = useTransform(scrollYProgress, [0, 1], [3, 0.35]);
    const x3 = useTransform(scrollYProgress, [0, 1], ["-80%", "30%"]);

    return (

        <section id={'Technologies'} className={' h-[140vh] FontSection'}>


            <div className={'grid grid-cols-3 grid-rows-1 z-3 sticky top-50 justify-between mt-20'}>
                <motion.div style={{scale: scale1, x: x1,}}>
                    <h1 ref={word} className={'SmallText text-start ml-10'}>TECHNOLOGIES</h1>
                </motion.div>
                <motion.div style={{scale: scale2, x: x2}}>
                    <h1 className={'SmallText text-center'}>&</h1>
                </motion.div>
                <motion.div style={{scale: scale3, x: x3}}>
                    <h1 className={'SmallText text-end mr-10'}>TOOLS</h1>
                </motion.div>
            </div>

            <div className="flex items-center justify-center h-screen">
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-right">
                        <h1>REACT</h1>
                        <h1>JAVASCRIPT</h1>
                        <h1>HTML5</h1>
                        <h1>CSS</h1>
                        <h1>PYTHON</h1>
                        <h1>FRAMER MOTION</h1>
                        <h1>RESPONSIVE DESIGN</h1>
                    </div>
                    <div className="text-left">
                        <h1>BOOTSTRAP</h1>
                        <h1>TAILWIND</h1>
                        <h1>FIGMA</h1>
                        <h1>PYTHON</h1>
                        <h1>MATERIAL DESIGN</h1>
                        <h1>MUI</h1>
                        <h1>NEXT.JS</h1>
                    </div>
                </div>
            </div>


        </section>
    )
};

export default TechnologiesSection;

/*


 */