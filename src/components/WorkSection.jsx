import {Row} from "react-bootstrap";
import projects from "../assets/utils/data.js"
import {CardWork} from "./CardWork.jsx";
import {useScroll} from 'framer-motion';
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
            <div className={'bg-[#3b4838] h-[full] w-[full]'}>
                <h1 className={'MyWorkTitle bg-[#3b4838] h-[full] w-[full]'}>MY WORK</h1>
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
            </div>

        </>
    )
}

export default WorkSection;