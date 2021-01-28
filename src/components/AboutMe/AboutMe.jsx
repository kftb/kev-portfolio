import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';

const AboutMe = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;
  const { about } = useContext(PortfolioContext);
  const { img, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="aboutme">
      <Container>
        <Title title="About Kev" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  Born and raised in Germany,{' '}
                  <span className="about-bold">Kevin has always enjoyed building things.</span>{' '}
                  Programming an event management tool in Microsoft Access and designing student
                  newspapers in Adobe InDesign have been his first forays into the world of Tech &
                  Design. ',
                </p>
                <p className="about-wrapper__info-text">
                  Structured thinking and problem-solving was one of the core skills he learnt as
                  Associate and{' '}
                  <span className="about-bold">Consultant at the Boston Consulting Group. </span>
                  Next to intense client work and lots of PowerPointing and Exceleering, he
                  continued his programming journey through his own 1-person venture, dedicated to
                  building a management tool for Summer Camps. ',
                </p>
                <p className="about-wrapper__info-text">
                  <span className="about-bold">
                    During his MBA at Kellogg, Kevin is bringing all of these skills together
                  </span>
                  , by honing his leadership skills as project lead within the Dean's Consulting
                  Alliance, his product management passion by building a new class and bidding tool
                  for his fellow classmates and his passion for data by taking all R classes he can
                  find.
                </p>
                <p className="about-wrapper__info-text">
                  Going forward, Kevin seeks{' '}
                  <span className="about-bold">
                    new opportunities in the world between Tech, Digital Strategy and Product
                    Management,{' '}
                  </span>
                  where he can make use of his wide tool and skillset.',
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
                <br />
                <br />
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
