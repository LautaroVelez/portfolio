import {Col, Container, Row} from 'react-bootstrap';
import '../../assets/styles/LandingPage.css';
import {FaGithub, FaReact} from "react-icons/fa";
import me from '../../assets/images/me.jpg';
import {FaLinkedin} from "react-icons/fa";
import {motion, useTransform, useScroll} from "framer-motion";
import {useRef} from "react";

const LandingPage = () => {
    const targetRef = useRef(null);
    const targetRef2 = useRef(null);
    const targetRef3 = useRef(null);

    const {scrollYProgress: scrollYProgress1} = useScroll({
        target: targetRef,
    });

    const {scrollYProgress: scrollYProgress2} = useScroll({
        target: targetRef2,
    });

    const {scrollYProgress: scrollYProgress3} = useScroll({
        target: targetRef3,
    });

    const x1 = useTransform(scrollYProgress1, [0, 1], ["0%", "-100%"]);
    const x2 = useTransform(scrollYProgress2, [0, 1], ["0%", "-100%"]);
    const x3 = useTransform(scrollYProgress3, [0, 1], ["0%", "-100%"]);


    const Linkedin = "https://www.linkedin.com/in/lautaro-velez-ba345421b/";
    const Github = "https://github.com/LautaroVelez";

    return (
        <>
            <div className={'bg-neutral-900 text-center'}>
                <h1 className={'FrontEndTitle h-screen'}>A</h1>
                <section ref={targetRef} className={'h-[300vh] relative'}>
                    <div className="sticky top-0 flex h-screen items-center overflow-hidden w-[160vw]">
                        <motion.div style={{x: x1}} className="flex gap-4">
                            <h1 className={'FrontEndTitle '}>Front-end</h1>
                        </motion.div>
                    </div>
                </section>

                <h1 className={'FrontEndTitle  h-screen'}>React</h1>

                <section ref={targetRef2} className={'h-[300vh] relative'}>
                    <div className="sticky top-0 flex h-screen items-center overflow-hidden w-[200vw]">
                        <motion.div style={{x: x2}} className="flex gap-4">
                            <h1 className={'FrontEndTitle '}>Developer</h1>
                        </motion.div>
                    </div>
                </section>

                <h1 className={'FrontEndTitle h-screen'}>and</h1>
                <h1 className={'FrontEndTitle h-screen'}>UX/UI</h1>

                <section ref={targetRef3} className={'h-[300vh] relative'}>
                    <div className="sticky top-0 flex h-screen items-center overflow-hidden ">
                        <motion.div style={{x: x3}} className="flex gap-4">
                            <h1 className={'FrontEndTitle'}>Designer.</h1>
                        </motion.div>
                    </div>
                </section>
            </div>
            <section className="firstSection" id={'About'}>
                <Container>
                    <Row>
                        <Col md={6}>
                            <h1 className="AboutMeText text-start">About</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={10}>
                            <h1 className="AboutMeText text-end">Me</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <img src={me} className={'MePhoto'}/>
                        </Col>
                        <Col md={6} className={'MeTextContainer'}>
                            <h1 className="MeText FontKaisei">I’m Lautaro Velez, a web developer.</h1>
                            <h1 className="MeText FontEmbed">I have a solid knowledge about React, JavaScript, HTML,
                                CSS, and more.</h1>
                            <h1 className="MeText">I consider myself someone who is highly creative and very into
                                design, whether it's fashion, cars, buildings, web pages, I always try to think outside
                                the box.</h1>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id={'Projects'}>
                <h1 className={'mt-20 text-9xl FontRoboto font-bold ml-10 text-black'}>MY WORK</h1>
                <Row className={'justify-content-center'}>
                    <div className="square"></div>
                </Row>
            </section>

            <h1 className={'mt-20 text-8xl FontRoboto font-bold ml-5 text-black '}>¿WHY ME?</h1>
            <Container>
                <Row className={'text-center justify-center'}>
                    <Col md={8}>
                        <h1 className={'mt-20 text-3xl FontRoboto font-bold ml-5 text-black'}>
                            I THINK THAT MY WORK SPEAKS FOR ME.

                            <p className={'mt-11'}>I’m a disciplined person, whose number one interest is the
                                productivity and creative development of me and the brand I'm working with.</p>

                            <p className={'mt-11'}>I think I act like a connector, problem-solver and forward-thinker,
                                able to impact every step of the process with excellence.</p>

                            <p className={'mt-11'}>There’s no greater joy than seeing an idea come to life.</p>
                            <p>This is your baby.</p>
                            <p>I’d love to help you raise it.</p>
                            <hr className="HorizontalLine"/>
                        </h1>
                    </Col>
                </Row>
                <Row className={'justify-center'}>
                    <FaReact className={'IconReact'}/>
                </Row>

                <section id={'Contact'}>
                    <Row className={'justify-center text-center mt-20'}>
                        <Col md={2}>
                            <Row>
                                <p className={'text-1xl font-bold text-gray-500'}>You can reach me in:</p>
                            </Row>
                            <Row className={'mt-3'}>
                                <Col md={6} sm={6}>
                                    <a href={Linkedin}><FaLinkedin className={'LastIcons'}/></a>
                                </Col>
                                <Col md={6} sm={6}>
                                    <a href={Github}><FaGithub className={'LastIcons'}/></a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>

                <section id={'Technologies'}>
                    <span>
                        <h1 className={'m-20 text-8xl text-center text-black FontRobotoBold'}>TECHNOLOGIES & TOOLS</h1>
                    </span>
                    <Container fluid className={'font-bold text-2xl black'}>
                        <Row className={'FontRobotoBold'}>
                            <Col>
                                <h1 className={'text-start'}>TECHNOLOGIES</h1>
                            </Col>
                            <Col>
                                <h1 className={'text-center'}>&</h1>
                            </Col>
                            <Col>
                                <h1 className={'text-end'}>TOOLS</h1>
                            </Col>
                        </Row>
                        <Row className={'text-center'}>
                            <Col md={6} sm={6}>
                                <h1 className={'text-end'}>JAVASCRIPT</h1>
                                <h1 className={'text-end'}>HTML5</h1>
                                <h1 className={'text-end'}>REACT</h1>
                                <h1 className={'text-end'}>CSS</h1>
                                <h1 className={'text-end'}>PYTHON</h1>
                                <h1 className={'text-end'}>FRAMER MOTION</h1>
                                <h1 className={'text-end'}>RESPONSIVE DESIGN</h1>
                            </Col>
                            <Col md={6} sm={6}>
                                <h1 className={'text-start'}>BOOTSTRAP</h1>
                                <h1 className={'text-start'}>TAILWIND</h1>
                                <h1 className={'text-start'}>FIGMA</h1>
                                <h1 className={'text-start'}>MUI</h1>
                                <h1 className={'text-start'}>NEXTUI</h1>
                                <h1 className={'text-start'}>PHOTOSHOP</h1>
                                <h1 className={'text-start'}>MATERIAL DESIGN</h1>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Row className={'justify-center text-center mt-10'}>
                    <p className={'text-1xl font-bold text-gray-500'}>Thanks for seeing!</p>
                </Row>
            </Container>
        </>
    );
};

export default LandingPage;
