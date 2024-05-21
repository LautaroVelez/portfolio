import {motion, useScroll, useTransform} from "framer-motion";
import me from "../assets/images/me.jpg";
import React, {useRef} from "react";
import {Col, Row} from "react-bootstrap";

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

    const x1 = useTransform(scrollYProgress1, [0, 1], ["-15%", "5%"]);
    const x2 = useTransform(scrollYProgress2, [0, 1], ["15%", "-5%"]);

    const y3 = useTransform(scrollYProgress3, [0, 1], ["-30%", "30%"]);

    return (
        <>
            <Row>
                <Col md={9}>
                    <motion.div ref={FirstRef} style={{x: x1}}>
                        <motion.h1 className="AboutMeTitle text-center mt-20">About</motion.h1>
                    </motion.div>
                </Col>
                <Col md={9}>
                    <motion.div ref={SecondRef} style={{x: x2}}>
                        <motion.h1 className="AboutMeTitle text-end">Me</motion.h1>
                    </motion.div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={me} className={'MePhoto'}/>
                </Col>
                <Col>
                    <motion.div ref={ThirdRef} style={{y: y3}} className={'MeTextContainer'}>

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
                        <h1 className="MeText FontKaisei mt-2">Extra: I'm 19 years old, I love working out, cars, and watching rom-coms!</h1>
                    </motion.div>
                </Col>
            </Row>
        </>
    );
};

export default AboutMeSection;
