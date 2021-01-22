import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Obfuscate from 'react-obfuscate';

const Contact = () => {
  // const { contact } = useContext(PortfolioContext);
  // const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Fade bottom duration={600} delay={200} distance="0px">
          <h2 className="section-title" style={{ 'text-align': 'center' }}>
            Contact
          </h2>
        </Fade>
        <Fade bottom duration={600} delay={400} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">I would love to hear from you!</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href="https://linkedin.com/in/baykevin"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="" />
            <div className="cta-btn cta-btn--resume cta-btn--resume-obfuscate">
              <Obfuscate
                email="kevin.bay@outlook.com"
                aria-label="Email Me"
                className="cta-btn--resume-obfuscate"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </Obfuscate>
            </div>
          </div>
          <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>Initial template by Jacobo Martínez, adaptation and content by Kevin Bay</div>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
