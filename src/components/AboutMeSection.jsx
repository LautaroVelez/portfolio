import {motion, useScroll, useTransform} from "framer-motion";
import me from "../assets/images/me.jpg";
import React, {useRef} from "react";
import {Col, Row} from "react-bootstrap";
import '/src/assets/styles/LandingPage.css';
import {isMobile} from "react-device-detect";
import mewhitoutfondo from "../assets/images/mewhitoutfondo.png";

const AboutMeSection = () => {
    const FirstRef = useRef(null);
    const SecondRef = useRef(null);
    const ThirdRef = useRef(null);

    const {scrollYProgress: scrollYProgress1} = useScroll({
        target: FirstRef,
        offset: ["start end", "end start"],
    });

    const {scrollYProgress: scrollYProgress2} = useScroll({
        target: SecondRef,
        offset: ["start end", "end start"],
    });

    const {scrollYProgress: scrollYProgress3} = useScroll({
        target: ThirdRef,
        offset: ["start end", "end start"],
    });

    const x1 = useTransform(scrollYProgress1, [0, 1], ["-25%", "5%"]);
    const x2 = useTransform(scrollYProgress2, [0, 1], ["10%", "-90%"]);

    const x3 = useTransform(scrollYProgress3, [0, 1], ["5%", "-250%"]);

    return (
        <section className={'AboutMeSection md:h-[140vh]'}>
            <Row>
                <Col md={9} sm={12}>
                    {isMobile ? (
                        <h1 className="AboutMeTitle text-center ColorBlack">ABOUT</h1>
                    ) : (
                        <motion.div ref={FirstRef} style={{x: x1}}>
                            <motion.h1 className="AboutMeTitle  text-center ColorBlack">ABOUT</motion.h1>
                        </motion.div>)}
                </Col>
                <Col md={12} sm={12}>
                    {isMobile ? (
                        <h1 className="AboutMeTitle text-center ColorWhite">ME</h1>
                    ) : (
                        <motion.div ref={SecondRef} style={{x: x2}}>
                            <motion.h1 className="AboutMeTitle text-end ColorWhite">ME</motion.h1>
                        </motion.div>
                    )}
                </Col>
            </Row>
            <Row className={''}>
                <Col md={6}>
                </Col>
                <Col sm={12} md={6}>
                    <motion.div ref={ThirdRef} style={{x: x3}} className={'MeTextContainer'}>

                        <h1 className="MeText FontKaisei">Hello there! I’m Lautaro Velez, a web developer borned in
                            Córdoba,
                            Argentina.</h1>

                        <h1 className="MeText FontEmbed mt-2">
                            I have a solid knowledge in React, JavaScript, HTML, CSS, and more.
                        </h1>
                        <h1 className="MeText FontKaisei mt-2">
                            I consider myself a very creative and a hard-working person who is always trying to learn
                            something new.
                        </h1>
                        <h1 className="MeText FontKaisei mt-2">Extra: I'm 19 years old, I love working out, cars, music,
                            and watching rom-coms!</h1>
                    </motion.div>
                </Col>
            </Row>
        </section>
    );
};

export default AboutMeSection;
