import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Chip from '@material-ui/core/Chip';
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
          <h2 className="projectdetail-sum-title">tl;dr</h2>

          <div className="projectdetail-sum-text">
            {props.data.markdownRemark.frontmatter.summary}
          </div>
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
    </div>
  );
};

export default ProjectDetail;
