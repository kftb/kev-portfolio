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
          <h2 className="hero-subtitle" style={{ "marginLeft": 0, "fontWeight": 100 }}>
              {subtitle || "I am a..."}
          </h2>
        </Fade>
          
          </Fade>

        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={2500} distance="30px">
        <p className="hero-subtitle" style={{"color": `$primary-color`}}>
            <span style={{ "fontWeight": 100}}>aspiring </span> 
            <span className="text-color-main">product manager.</span> 
          </p>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={3000} distance="30px">
        <p className="hero-subtitle" style={{"color": `$primary-color`}}>
            <span style={{ "fontWeight": 100 }}>excited </span> 
            <span className="text-color-main">techie.</span> 
          </p>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={2000} distance="30px">
          <p className="hero-subtitle" style={{"color": `$primary-color`}}>
            <span style={{ "fontWeight": 100 }}>experienced </span> 
            <span className="text-color-main">consultant.</span> 
          </p>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={3500} distance="30px">
        <p className="hero-subtitle" style={{"color": `$primary-color`}}>
            <span style={{ "fontWeight": 100 }}>proud </span> 
            <span className="text-color-main">nerd.</span> 
          </p>
        </Fade>
        <br></br>
        <br></br>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={4000} distance="30px">
          <p className="hero-cta">
          <a href="https://drive.google.com/file/d/1cqd0mcikAPHtePyFhoLPhLN_PCeJ-4Wp/view?usp=sharing">
            <span className="cta-btn cta-btn--hero">
                straight to resume
            </span>
            </a>
            <a href="https://www.linkedin.com/in/baykevin/">
            <span className="cta-btn cta-btn--hero">
                get in touch
            </span>
            </a>
            
          </p>
        </Fade>
       

      </Container>
    </section>
  );
};

export default Header;
