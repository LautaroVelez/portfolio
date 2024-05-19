import {Col, Container, Row} from "react-bootstrap";
import '../assets/styles/Loader.css';
import {useEffect, useRef} from "react";
import {motion} from "framer-motion"
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Stairs from "../assets/utils/Stairs.jsx";

const Loader = () => {

    const firstText = useRef(null);
    const secondText = useRef(null);
    const ThirdText = useRef(null);
    const FourthText = useRef(null);
    const FifthText = useRef(null);
    const slider = useRef(null);


    let xPercent = 0;
    let direction = -1;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        requestAnimationFrame(animation);

        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                scrub: 0.25,
                onUpdate: e => direction = e.direction * -1
            },
            x: "-=300px"

        })
    }, []);

    const animation = () => {
        if (xPercent <= -100) {
            xPercent = 0;
        }
        if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, {xPercent: xPercent})
        gsap.set(secondText.current, {xPercent: xPercent})
        gsap.set(ThirdText.current, {xPercent: xPercent})
        gsap.set(FourthText.current, {xPercent: xPercent})
        gsap.set(FifthText.current, {xPercent: xPercent})
        xPercent += 0.25 * direction;
        requestAnimationFrame(animation);
    }


    return (
        <Stairs>
            <Container fluid className={'LoaderContainer'}>
                <div className="h-screen align-middle flex-col justify-items-center">
                    <motion.div
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 1, duration: 0.5}}
                        initial={{opacity: 0, y: -30}}
                        exit={{opacity: 0, y: 200}}
                    >
                        <h3 className={'WelcomeLittleText font-bold text-center '}>
                            WELCOME, I'M</h3>
                    </motion.div>

                    <Container>
                        <motion.div
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 1, duration: 0.5}}
                            initial={{opacity: 0, y: -30}}
                            exit={{opacity: 0, y: 200}}
                        >
                            <h1 className="ImLautaroText text-center overflow-hidden ">
                                Lautaro
                            </h1>
                        </motion.div>

                        <motion.div
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 1, duration: 0.5}}
                            initial={{opacity: 0, y: 30}}
                            exit={{opacity: 0, y: -200}}
                        >
                            <h1 className="ImLautaroText font-roboto text-center overflow-hidden">
                                Velez
                            </h1>
                        </motion.div>
                    </Container>
                    <motion.div
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 1, duration: 0.5}}
                        initial={{opacity: 0, y: 30}}
                        exit={{opacity: 0, y: -200}}
                    >
                        <h3 className="BasedInLittleText  text-center font-bold" id="BasedInText">
                            BASED IN:
                        </h3>
                    </motion.div>


                    <div className="sliderContainer bottom-0">
                        <div className="slider" ref={slider}>
                            <p ref={firstText}>Córdoba, Argentina - </p>
                            <p ref={secondText}>Córdoba, Argentina - </p>
                            <p ref={ThirdText}>Córdoba, Argentina - </p>
                            <p ref={FourthText}>Córdoba, Argentina - </p>
                            <p ref={FifthText}>Córdoba, Argentina - </p>
                        </div>
                    </div>


                </div>
            </Container>
        </Stairs>
    )
        ;
}

export default Loader;
