import {Col, Container, Row} from "react-bootstrap";
import '../assets/styles/Loader.css';
import {useLayoutEffect, useRef} from "react";
import {motion} from "framer-motion"
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Stairs from "../assets/utils/Stairs.jsx";

const Loader = () => {

    const firstText = useRef(null);
    const secondText = useRef(null);
    const thirdText = useRef(null);
    const fourthText = useRef(null);
    const fifthText = useRef(null);
    const slider = useRef(null);

    let xPercent = 0;
    let direction = -1;

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const animation = () => {
            if (xPercent <= -100) {
                xPercent = 0;
            }
            if (xPercent > 0) {
                xPercent = -100;
            }

            if (firstText.current && secondText.current && thirdText.current && fourthText.current && fifthText.current) {
                gsap.set([firstText.current, secondText.current, thirdText.current, fourthText.current, fifthText.current], { xPercent: xPercent });
            }
            xPercent += 0.25 * direction;
            requestAnimationFrame(animation);
        };

        if (slider.current) {
            gsap.to(slider.current, {
                scrollTrigger: {
                    trigger: document.documentElement,
                    start: 0,
                    end: window.innerHeight,
                    scrub: 0.25,
                    onUpdate: e => direction = e.direction * -1
                },
                x: "-=300px"
            });
        }

        requestAnimationFrame(animation);
    }, []);

    return (
        <Stairs>
            <Container fluid className={'LoaderContainer'}>
                <div className="h-screen align-middle justify-items-center sm:w-screen overflow-x-hidden ">
                    <Row>
                        <Col md={3} sm={12}>
                            <motion.div
                                animate={{opacity: 1, x: 0}}
                                transition={{delay: 1.2, duration: 0.7}}
                                initial={{opacity: 0, x: -30}}
                                exit={{opacity: 0, x: 200}}
                            >
                                <h3 className={'WelcomeLittleText font-bold text-md-end text-sm-center mt-12'}>
                                    Welcome to my portfolio. I'm</h3>
                            </motion.div>
                        </Col>
                    </Row>
                    <Container>
                        <Row>
                            <Col md={7} sm={12}>
                                <motion.div
                                    animate={{opacity: 1, x: 0}}
                                    transition={{delay: 1.9, duration: 0.5}}
                                    initial={{opacity: 0, x: -30}}
                                    exit={{opacity: 0, x: 200}}
                                >
                                    <h1 className="ImLautaroText text-md-end ">
                                        Lautaro
                                    </h1>
                                </motion.div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={10} sm={12}>
                                <motion.div
                                    animate={{opacity: 1, x: 0}}
                                    transition={{delay: 2.3, duration: 0.5}}
                                    initial={{opacity: 0, x: 30}}
                                    exit={{opacity: 0, x: 0}}
                                >
                                    <h1 className="ImLautaroText text-end">
                                        Velez
                                    </h1>
                                </motion.div>
                            </Col>
                        </Row>
                    </Container>
                    <Row>
                        <Col md={11}>
                            <motion.div
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 2.5, duration: 0.5}}
                                initial={{opacity: 0, y: 30}}
                                exit={{opacity: 0, y: -2000}}
                            >
                                <h3 className="BasedInLittleText text-end font-bold" id="BasedInText">
                                    Based in:
                                </h3>
                            </motion.div>
                        </Col>
                    </Row>
                    <div className="sliderContainer bottom-0">
                        <div className="slider" ref={slider}>
                            <p ref={firstText}>Córdoba, Argentina - </p>
                            <p ref={secondText}>Córdoba, Argentina - </p>
                            <p ref={thirdText}>Córdoba, Argentina - </p>
                            <p ref={fourthText}>Córdoba, Argentina - </p>
                            <p ref={fifthText}>Córdoba, Argentina - </p>
                        </div>
                    </div>
                </div>
            </Container>
        </Stairs>
    );
}

export default Loader;
