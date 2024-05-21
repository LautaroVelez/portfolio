import React, {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import '../assets/styles/LandingPage.css';

const HorizontalScrollSection = () => {
    //Horizontal Scroll

  const targetRef = useRef(null);
    const targetRef2 = useRef(null);
    const targetRef3 = useRef(null);


    const {scrollYProgress: scrollYProgress1} = useScroll({
        target: targetRef,
    });

    const {scrollYProgress: scrollYProgress2} = useScroll({
        target: targetRef2,
    });

    const {scrollYProgress: scrollYProgress3} = useScroll({
        target: targetRef3,
    });

    const x1 = useTransform(scrollYProgress1, [0, 1], ["0%", "-100%"]);
    const x2 = useTransform(scrollYProgress2, [0, 1], ["0%", "-100%"]);
    const x3 = useTransform(scrollYProgress3, [0, 1], ["0%", "-100%"]);
    //Horizontal Scroll
    return (
        <div className={'bg-neutral-900 text-center'}>
            <h1 className={'FrontEndTitle h-screen'}>A</h1>
            <section ref={targetRef} className={'h-[300vh] relative'}>
                <div className="sticky top-0 flex h-screen items-center overflow-hidden w-[160vw]">
                    <motion.div style={{x: x1}} className="flex gap-4">
                        <h1 className={'FrontEndTitle '}>Front-end</h1>
                    </motion.div>
                </div>
            </section>

            <h1 className={'FrontEndTitle  h-screen'}>React</h1>

            <section ref={targetRef2} className={'h-[300vh] relative'}>
                <div className="sticky top-0 flex h-screen items-center overflow-hidden w-[200vw]">
                    <motion.div style={{x: x2}} className="flex gap-4">
                        <h1 className={'FrontEndTitle '}>Developer</h1>
                    </motion.div>
                </div>
            </section>

            <h1 className={'FrontEndTitle h-screen'}>and</h1>
            <h1 className={'FrontEndTitle h-screen'}>UX/UI</h1>

            <section ref={targetRef3} className={'h-[300vh] relative'}>
                <div className="sticky top-0 flex h-screen items-center overflow-hidden ">
                    <motion.div style={{x: x3}} className="flex gap-4">
                        <h1 className={'FrontEndTitle'}>Designer.</h1>
                    </motion.div>
                </div>
            </section>
        </div>

    )

}

export default HorizontalScrollSection;