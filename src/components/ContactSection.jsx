import {Col, Row} from "react-bootstrap";
import {FaFigma, FaGithub, FaLinkedin, FaReact} from "react-icons/fa";
import React from "react";
import {TbBrandFramerMotion} from "react-icons/tb";
import {SiGreensock} from "react-icons/si";

const ContactSection = () => {
    const Linkedin = "https://www.linkedin.com/in/lautaro-velez-ba345421b/";
    const Github = "https://github.com/LautaroVelez";

    return (
        <footer id={'Contact'}>
            <Row className={'mt-28 text-center justify-center'}>
                <p>You can reach me in:</p>
                <Row className={'justify-center'}>
                    <Col md={1}>
                        <a href={Linkedin}><FaLinkedin className={'LastIcons'}/></a>
                    </Col>
                    <Col md={1}>
                        <a href={Github}><FaGithub className={'LastIcons'}/></a>
                    </Col>
                </Row>

                <hr className="HorizontalLine mt-6"/>
                <Row className={'justify-center text-center'}>
                    <p>This portfolio was created with:</p>
                    <Row className={'justify-center'}>
                        <Col md={1}>
                            <FaReact className={'IconReact'} alt={'React'}/>
                        </Col>
                        <Col md={1}>
                            <FaFigma className={'IconReact'}/>
                        </Col>
                        <Col md={1}>
                            <TbBrandFramerMotion className={'IconReact'}/>
                        </Col>
                        <Col md={1}>
                            <SiGreensock className={'IconReact'}/>
                        </Col>
                    </Row>
                    <hr className="HorizontalLine mt-6"/>
                </Row>
            </Row>
        </footer>
    )
}

export default ContactSection;