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
        </>
    );
};

export default LandingPage;