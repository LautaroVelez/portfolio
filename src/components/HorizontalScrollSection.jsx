import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { isMobile } from "react-device-detect";
import '../assets/styles/LandingPage.css';

const HorizontalScrollSection = () => {
    // Refs para las secciones
    const targetRef = useRef(null);
    const targetRef2 = useRef(null);
    const targetRef3 = useRef(null);

    // useScroll y useTransform para animaciones
    const { scrollYProgress: scrollYProgress1 } = useScroll({
        target: targetRef,
    });
    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: targetRef2,
    });
    const { scrollYProgress: scrollYProgress3 } = useScroll({
        target: targetRef3,
    });

    const x1 = useTransform(scrollYProgress1, [0, 1], ["0%", "-100%"]);
    const x2 = useTransform(scrollYProgress2, [0, 1], ["0%", "-100%"]);
    const x3 = useTransform(scrollYProgress3, [0, 1], ["0%", "-100%"]);

    return (
        <div className={'bg-neutral-900 text-center sm:w-screen'}>
            <h1 className={'FrontEndTitle md:h-screen'}>A</h1>
            <section ref={targetRef} className={'md:h-[300vh] md:relative'}>
                <div className="md:sticky md:top-0 md:flex md:h-screen items-center overflow-hidden md:w-[160vw] sm:w-screen sm:text-center">
                    {isMobile ? (
                        <h1 className={'FrontEndTitle'}>Front-end</h1>
                    ) : (
                        <motion.div style={{ x: x1 }} className="md:flex md:gap-4 sm:h-[100vh] sm:text-center">
                            <h1 className={'FrontEndTitle'}>Front-end</h1>
                        </motion.div>
                    )}
                </div>
            </section>

            <h1 className={'FrontEndTitle md:h-screen'}>React</h1>

            <section ref={targetRef2} className={'md:h-[300vh] md:relative'}>
                <div className="md:sticky md:top-0 md:flex md:h-screen items-center overflow-hidden md:w-[200vw]">
                    {isMobile ? (
                        <h1 className={'FrontEndTitle'}>Developer</h1>
                    ) : (
                        <motion.div style={{ x: x2 }} className="md:flex md:gap-4">
                            <h1 className={'FrontEndTitle'}>Developer</h1>
                        </motion.div>
                    )}
                </div>
            </section>

            <h1 className={'FrontEndTitle md:h-screen'}>and</h1>
            <h1 className={'FrontEndTitle md:h-screen'}>UX/UI</h1>

            <section ref={targetRef3} className={'md:h-[300vh] md:relative'}>
                <div className="md:sticky md:top-0 md:flex md:h-screen items-center overflow-hidden">
                    {isMobile ? (
                        <h1 className={'FrontEndTitle'}>Designer.</h1>
                    ) : (
                        <motion.div style={{ x: x3 }} className="md:flex md:gap-4">
                            <h1 className={'FrontEndTitle'}>Designer.</h1>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default HorizontalScrollSection;
