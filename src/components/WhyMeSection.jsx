import { Col, Container, Row } from "react-bootstrap";
import SplitType from 'split-type';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WhyMeSection = () => {
    const MiniTitleWhyMe = "I THINK THAT MY WORK CAN SPEAK FOR ME.";
    const firstParagraph = "I’m a disciplined person, who's number one interest is the productivity and creative development of myself and the brand I'm working with.";
    const secondParagraph = "I think I act like a connector, problem-solver and forward-thinker, able to impact every step of the process with excellence.";
    const thirdParagraph = "There’s no greater joy than seeing an idea come to life.";
    const fourthParagraph = "This is your baby.";
    const fifthParagraph = "I’d love to help you raise it.";

    const FirstRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: FirstRef,
        offset: ["start end", "end start"],
    });

     const x1 = useTransform(scrollYProgress, [0, 1], ["-10%", "3%"]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const paragraphs = document.querySelectorAll('.paragraphWhyMe');
        paragraphs.forEach((paragraph, i) => {
            const text = new SplitType(paragraph, { types: 'words, chars' });

            gsap.from(text.chars, {
                scrollTrigger: {
                    trigger: paragraph,
                    start: 'top 80%',
                    end: 'bottom 40%',
                    scrub: true,
                    markers: false
                },
                opacity: 0.2,
                stagger: 1,
                duration: 0.5,
                ease: 'power2.out',
            });
        });
    }, []);



    return (
        <>
            <div className={'bg-[#f3e6d8] md:h-[full] relative flex flex-col justify-center'}>
                <h1 className={'WhyMeTitle'}>¿WHY ME?</h1>
                <motion.div className={'relative'} ref={FirstRef} style={{x: x1}}>
                    <h1 className={'MiniTitleWhyMe text-center'}>{MiniTitleWhyMe}</h1>
                </motion.div>
                <Container>
                    <Row className={'justify-center relative'}>
                        <Col md={10} className={'text-center'}>
                            <p className={'paragraphWhyMe'}>{firstParagraph}</p>
                            <p className={'paragraphWhyMe'}>{secondParagraph}</p>
                            <p className={'paragraphWhyMe'}>{thirdParagraph}</p>
                            <p className={'paragraphWhyMe'}>{fourthParagraph}</p>
                            <p className={'paragraphWhyMe mb-20'}>{fifthParagraph}</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default WhyMeSection;
