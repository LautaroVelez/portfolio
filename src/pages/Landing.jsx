import {Col, Container, Row} from 'react-bootstrap';
import '../assets/styles/LandingPage.css';
import {motion} from "framer-motion";
import {FaReact} from "react-icons/fa";
import me from '../assets/images/me.jpg';

const LandingPage = () => {
    return (
        <>
            <Container fluid className={'justify-center items-center justify-content-center text-center'}>
                <Row className={'justify-center'}>

                    <FaReact className={'IconReact'}/>

                </Row>
                <h6 className={'WelcomeText'}>Welcome, I'm Lautaro.</h6>
                <h1 className={'TitleLanding'}>Front-end React Developer and UI/UX Designer </h1>
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
                            <h1 className="MeText">I’m Lautaro Velez, a web developer.</h1>
                            <h1 className="MeText">I have a solid knowledge about React, JavaScript, HTML, CSS, and
                                more. </h1>
                            <h1 className="MeText">I consider myself someone who is highly creative and very into
                                design, whether it's fashion, cars, buildings, web pages, i always try to think outside
                                the box.</h1>
                        </Col>
                    </Row>
                </Container>
            </section>

            <span className={''}><h1
                className={'m-20 text-8xl text-center text-black FontRoboto'}>TECHNOLOGIES & TOOLS</h1></span>

            <Container fluid className={'font-bold text-2xl black'}>
                <Row className={'FontRoboto'}>
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
                    <Col md={6}>

                        <h1 className={'text-end'}>FRAMER MOTION</h1>
                        <h1 className={'text-end'}>RESPONSIVE DESIGN</h1>
                        <h1 className={'text-end'}>STORYTELLING</h1>
                        <h1 className={'text-end'}>CSS</h1>
                        <h1 className={'text-end'}>HMLT5</h1>
                        <h1 className={'text-end'}>JAVASCRIPT</h1>
                        <h1 className={'text-end'}>REACT</h1>


                    </Col>
                    <Col md={6}>
                        <h1 className={'text-start'}>BOOSTRAP</h1>
                        <h1 className={'text-start'}>TAILWIND</h1>
                        <h1 className={'text-start'}>FIGMA</h1>
                        <h1 className={'text-start'}>PYTHON</h1>
                        <h1 className={'text-start'}>MATERIAL DESIGN</h1>
                        <h1 className={'text-start'}>MUI</h1>
                        <h1 className={'text-start'}>NEXT.UI</h1>
                    </Col>
                </Row>
            </Container>


        </>
    );
};

export default LandingPage;