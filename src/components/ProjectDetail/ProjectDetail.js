import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Chip from '@material-ui/core/Chip';
import Contact from '../Contact/Contact';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma, faGithub } from '@fortawesome/free-brands-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/main.scss';

export const data = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        subtitle
        date
        slug
        projectcategory
        summary
        url
        toptags {
          name
          bg
        }
        bottomtags {
          name
          bg
        }
      }
      html
    }
  }
`;

const ProjectDetail = (props) => {
  return (
    <div id="projectdetail">
      <div className="projectdetail-sum">
        <div className="container">
          <div className="projectdetail-link-container">
            <Link className="projectdetail-link" to="/">
              Return to main page
            </Link>
          </div>
          <h1 className="projectdetail-sum-title">{props.data.markdownRemark.frontmatter.title}</h1>
          <h2 className="projectdetail-sum-subtitle">
            {props.data.markdownRemark.frontmatter.subtitle}
          </h2>
          <div>{props.data.markdownRemark.frontmatter.projectcategory}</div>
          <div className="projectdetail-tags-container">
            {props.data.markdownRemark.frontmatter.toptags.map((tag) => (
              <Chip
                label={tag.name}
                style={{ background: tag.bg }}
                size="small"
                className="projectdetail-tags"
              />
            ))}
          </div>
          <div className="projectdetail-tags-container">
            {props.data.markdownRemark.frontmatter.bottomtags.map((tag) => (
              <Chip
                label={tag.name}
                style={{ background: tag.bg }}
                size="small"
                className="projectdetail-tags"
              />
            ))}
          </div>
          <div className="projectdetail-sum-tldr">tl;dr</div>

          <div className="projectdetail-sum-text">
            {props.data.markdownRemark.frontmatter.summary}
          </div>
          {/* <div className="btn-seemore-container">
            <a href="abc" className="btn-seemore">
              <FontAwesomeIcon icon={faFigma}></FontAwesomeIcon> See on Figma
            </a>
            <a href="abc" className="btn-seemore">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> See on Github
            </a>
            <a href="abc" className="btn-seemore">
              See live
            </a>
          </div> */}
        </div>
      </div>
      <div>
        <div className="container">
          <div
            className="projectdetail-text
            "
            dangerouslySetInnerHTML={{
              __html: props.data.markdownRemark.html,
            }}
          ></div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Contact />
    </div>
  );
};

export default ProjectDetail;
