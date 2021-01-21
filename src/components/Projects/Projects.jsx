import React, { useContext, useEffect, useState } from 'react';
import Chip from '@material-ui/core/Chip';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma, faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = (props) => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  let cat = props.category;

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title={props.title} />
          {projects
            .filter((project) => project.cat == cat)
            .map((project) => {
              const {
                title,
                info,
                info2,
                url,
                repo,
                img,
                id,
                slug,
                tag1,
                tag2,
                tag3,
                figma,
              } = project;

              return (
                <Row key={id}>
                  <Col lg={4} sm={12}>
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <Chip label={tag1} size="small" className="project-tag" />
                        <Chip label={tag2} size="small" className="project-tag" />
                        <Chip label={tag3} size="small" className="project-tag" />
                      </div>
                      <div>
                        <p>{info || ''}</p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>

                      <Link to={slug} className="cta-btn cta-btn--hero">
                        <span className="cta-btn--icons"></span>
                        Read More
                      </Link>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                        See Live
                      </a>
                      <div>
                        {figma && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn cta-btn--hero-small"
                            href={url || '#!'}
                          >
                            <span className="cta-btn--icons">
                              <FontAwesomeIcon icon={faFigma} />
                            </span>
                            See on Figma
                          </a>
                        )}
                        {repo && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn cta-btn--hero-small"
                            href={url || '#!'}
                          >
                            <span className="cta-btn--icons">
                              <FontAwesomeIcon icon={faGithub} />
                            </span>
                            See on Github
                          </a>
                        )}
                      </div>
                    </div>
                  </Col>
                  <Col lg={8} sm={12}>
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <ProjectImg alt={title} filename={img} />
                      </a>
                    </div>
                  </Col>
                </Row>
              );
            })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
