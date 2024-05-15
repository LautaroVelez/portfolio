import {Col, Container, Row} from 'react-bootstrap';
import '../assets/styles/LandingPage.css';
import {motion} from "framer-motion";

const Intro = () => {
    return (
        <Container fluid>
            <h3 className={'font-bold text-gray-500 text-3xl text-center mt-3'}>Welcome</h3>
            <div className={'WelcomeH1 font-bold text-start FontRoboto ml-20'}>
                <h1>I'M</h1>
                <h1>LAUTARO</h1>
            </div>
            <h3 className={'font-bold text-gray-500 text-3xl text-end '}>BASED IN</h3>
            <Row className={'font-bold text-gray-500 text-2xl mb-5 mt-3'}>
                <Col>
                    <h3>CÓRDOBA, ARGENTINA</h3>
                </Col>
                <Col>
                    <h3>CÓRDOBA, ARGENTINA</h3>
                </Col>
                <Col>
                    <h3>CÓRDOBA, ARGENTINA</h3>
                </Col>
                <Col>
                    <h3>CÓRDOBA, ARGENTINA</h3>
                </Col>
            </Row>
        </Container>

    );
}

export default Intro;