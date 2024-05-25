import React, {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";


const Section = ({Component}) => {
    const sectionRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "20%"]);
    return (
        <section ref={sectionRef} className={'relative h-[140vh] overflow-hidden'}>
            <motion.div className={'absolute w-full'} style= {{top: y}}>
                {Component}
            </motion.div>
        </section>
    )
}

export default Section;