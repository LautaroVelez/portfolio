import {Col, Container, Row} from 'react-bootstrap';
import '../../assets/styles/LandingPage.css';
import {motion} from "framer-motion";
import {FaGithub, FaReact} from "react-icons/fa";
import me from '../../assets/images/me.jpg';
import {FaLinkedin} from "react-icons/fa";
import Stairs from "../../assets/utils/Stairs.jsx";

const LandingPage = () => {


    const Linkedin = "https://www.linkedin.com/in/lautaro-velez-ba345421b/";
    const Github = "https://github.com/LautaroVelez";

    return (
        <>

            <Container fluid className={'justify-center items-center justify-content-center text-center'}>
                <Row className={'justify-center'}>
                    <FaReact className={'IconReact'}/>
                </Row>

                <h6 className={'WelcomeText'}>Welcome, I'm Lautaro.</h6>
                <h1 className={'TitleLanding'}>A Front-end React Developer and UI/UX Designer </h1>
                <hr className="HorizontalLine"/>
                <h6 className={'WelcomeText'}>Based in Córdoba, Argentina.</h6>
            </Container>


            <section className="firstSection" id={'About'}>
                <Container>
                    <Row>
                        <Col md={6}>
                            <h1 className="AboutMe text-start">About</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={10}>
                            <h1 className="AboutMe text-end">Me</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <img src={me} className={'MePhoto'}/>
                        </Col>
                        <Col md={6} className={'MeTextContainer'}>
                            <h1 className="MeText FontKaisei">I’m Lautaro Velez, a web developer.</h1>
                            <h1 className="MeText FontEmbed ">I have a solid knowledge about React, JavaScript, HTML,
                                CSS, and
                                more. </h1>
                            <h1 className="MeText ">I consider myself someone who is highly creative and very into
                                design, whether it's fashion, cars, buildings, web pages, i always try to think outside
                                the box.</h1>
                        </Col>
                    </Row>
                </Container>
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
                            <h1 className={'text-end'}>HMLT5</h1>
                            <h1 className={'text-end'}>REACT</h1>

                            <h1 className={'text-end'}>CSS</h1>

                            <h1 className={'text-end'}>PYTHON</h1>
                            <h1 className={'text-end'}>FRAMER MOTION</h1>
                            <h1 className={'text-end'}>RESPONSIVE DESIGN</h1>


                        </Col>
                        <Col md={6} sm={6}>
                            <h1 className={'text-start'}>BOOSTRAP</h1>
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

                            <p className={'mt-11'}>I’m a disciplined person, who number one interest is the
                                productivity
                                and
                                creative development
                                of me and the brand im working with.</p>

                            <p className={'mt-11'}>I think i act like a connector, problem-solver and
                                forward-thinker,
                                able
                                to impact every step of
                                the process with excellence.</p>

                            <p className={'mt-11'}>There’s no greater joy than seeing an idea come to life.</p>
                            <p> This is your baby.</p>
                            <p>I’d love to help you raise it.</p>
                        </h1>
                    </Col>
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
                <Row className={'justify-center text-center mt-10'}>
                    <p className={'text-1xl font-bold text-gray-500'}>Thanks for seeing!</p>
                </Row>
            </Container>

        </>
    )
        ;
};

export default LandingPage;