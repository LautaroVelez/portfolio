import {Col, Container, Row} from "react-bootstrap";
import {FaReact} from "react-icons/fa";
import React, {useEffect, useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";

const WhyMeSection = () => {
    const MiniTitleWhyMe = "I THINK THAT MY WORK CAN SPEAK FOR ME."

    const combinedParagraph = "I’m a disciplined person, who number one interest is the productivity and creative development of me and the brand I’m working with.\n" +
        "I think I act like a connector, problem-solver and forward-thinker, able to impact every step of the process with excellence.\n" +
        "There’s no greater joy than seeing an idea come to life.\n" +
        "This is your baby.\n" +
        "I’d love to help you raise it.";




    const words = combinedParagraph.split("");

    const element = useRef(null);


    const {scrollYProgress} = useScroll({
        target: element,
        offset: ['start 0.9', 'start 0.25']
    })


    return (
        <>
            <div className={'bg-neutral-900'}>
                <h1 className={'WhyMeTitle mt-28'}>¿WHY ME?</h1>
                <h1 className={'MiniTitleWhyMe text-center'}>{MiniTitleWhyMe}</h1>
                <Container>
                    <Row className={'justify-center'}>
                        <Col md={8} className={'text-center'}>
                            <p ref={element}>{
                                words.map((word, i) => {
                                    const start = i / words.length;
                                    const end = start + (1 / words.length)
                                    return (
                                        <Word key={i} range={[start, end]}
                                              progress={scrollYProgress}>{word}</Word>


                                    )
                                })
                            }</p>

                        </Col>
                    </Row>
                </Container>
                <hr className="HorizontalLine mt-6"/>
                <Row className={'justify-center'}>
                    <FaReact className={'IconReact'}/>
                </Row>
            </div>
        </>
    )
}

export default WhyMeSection;

const Word = ({children, range, progress}) => {
    const opacity = useTransform(progress, range, [0, 1])
    return (
        <span className={'paragraphWhyMe'}>
            <span className={'Shadow'}>{children}</span>
            <motion.span style={{opacity}}>{children}</motion.span>
        </span>
    )
}
