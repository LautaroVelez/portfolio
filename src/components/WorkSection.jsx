import {Row} from "react-bootstrap";
import React, {useEffect} from "react";
import projects from "../assets/utils/data.js"
import {CardWork} from "./CardWork.jsx";
import {motion, useScroll, useTransform} from 'framer-motion';
import {useRef} from "react";

const WorkSection = () => {
    const container = useRef(null);

    const {scrollYProgress} = useScroll({
        layoutEffect: false,
        target: container,
        offset: ['start start', 'end end']
    })

    return (
        <>
            <section className={'bg-[#3b4838]'}>
                <h1 className={'MyWorkTitle'}>MY WORK</h1>
                <Row className={'justify-content-center relative'}>
                    <div ref={container}>
                        {
                            projects.map((project, i) => {
                                const targetScale = 1 - ((projects.length - i) * 0.05);
                                return <CardWork key={i} i={i} {...project} range={[i * 0.25, 1]}
                                                 progress={scrollYProgress} targetScale={targetScale}/>
                            })
                        }
                    </div>
                </Row>
            </section>
        </>
    )
}

export default WorkSection;