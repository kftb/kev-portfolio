import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Link from 'gatsby-link';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

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
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Kevin.'}</span>
            <br />
           
          </h1>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1500} distance="30px">
          <h1 className="hero-title">
              {subtitle || "I am a..."}
          </h1>
        </Fade>
          
          </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={2000} distance="30px">
        <Link to="/consulting" smooth duration={1000}>
        <p className="hero-subtitle">consultant.</p>
        </Link>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={2500} distance="30px">
          <p className="hero-subtitle">product manager.</p>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={3000} distance="30px">
          <p className="hero-subtitle">techie.</p>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={3500} distance="30px">
          <p className="hero-subtitle">nerd.</p>
        </Fade>
        <br></br>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={4000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                straight to resume
              </Link>
            </span>
            <span className="cta-btn cta-btn--hero">
              <Link to="/consulting" smooth duration={1000}>
                get in touch
              </Link>
            </span>
          </p>
        </Fade>
       

      </Container>
    </section>
  );
};

export default Header;
