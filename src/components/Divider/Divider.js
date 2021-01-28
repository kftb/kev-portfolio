import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';

const Projects = (props) => {
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
    <section id="divider">
      <Container>
        <div className="divider-wrapper">
          <p className="divider-text">My Portfolio</p>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
