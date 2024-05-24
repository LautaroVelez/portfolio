import '../assets/styles/CardWork.css'
import {Col, Row} from "react-bootstrap";
import {motion, useScroll, useTransform} from 'framer-motion';
import {useRef} from "react";


export const CardWork = ({i, title, description, src, link, progress, range, color, targetScale}) => {
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ["start end", 'start start']

    })

    const Imgscale = useTransform(scrollYProgress, [0, 1], [2, 1])
    const scale = useTransform(progress, range, [1, targetScale])

    return (
        <div ref={container} className={'cardWorkContainer'}>
            <motion.div  style={{backgroundColor: color, scale, top:`calc(-5vh + ${i * 25}px)`}}  className={'cardWork'}>
                <h1 className={'text-5xl text-center font-bold'}>{title}</h1>
                <Row>
                    <Col md={6} className={'text-center align-middle'}>
                        <p>{description}</p>

                    </Col>
                    <Col md={6}>
                        <div className={'imgCardWork'}>
                            <motion.div className={'inner'} style={{scale: Imgscale}}>
                                <img src={`/portfolio/src/assets/images/${src}`} alt="image"/>
                            </motion.div>
                        </div>
                    </Col>
                </Row>
            </motion.div>
        </div>
    )
}
