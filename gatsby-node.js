/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);

exports.onCreateNode = ({node, actions: {createNodeField}}) => {
    if (node.internal.type === `kontentItemArticle`) {
        createNodeField({
            node,
            name: `slug`,
            value: node.elements.url_slug.value,
        })
    }
};

exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions;
    // Query data
    const result = await graphql(`
    {
        allKontentItemArticle {
            edges {
              node {
                elements {
                  url_slug {
                    value
                  }
                }
              }
            }
          }
    }
    `);
    // Create pages
    result.data.allKontentItemArticle.edges.forEach(({node}) => {
        createPage({
            path: node.elements.url_slug.value,
            component: path.resolve(`src/templates/article.js`),
            context: {
                slug: node.elements.url_slug.value,
            }
        })
    })
}