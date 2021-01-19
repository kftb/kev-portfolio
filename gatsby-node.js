const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const detailTemplate = path.resolve('./src/templates/ProjectDetail.js');
  const detailpages = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              catslug
            }
          }
        }
      }
    }
  `);
  detailpages.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      component: detailTemplate,
      path: `/${edge.node.frontmatter.catslug}/${edge.node.frontmatter.slug}`,
      context: {
        slug: edge.node.frontmatter.slug,
        catslug: edge.node.frontmatter.catslug,
      },
    });
  });
};
