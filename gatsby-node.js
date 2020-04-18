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
    if (node.internal.type === `kontentItemArticle`) {
      createNodeField({
        node,
        name: `categorySlug`,
        value: node.elements.category.value.codename,
      })
    } 
};


exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions;
    // Query data
    const result = await graphql(`
    {
        allArticles: allKontentItemArticle {
            edges {
              node {
                elements {
                  url_slug {
                    value
                  }
                  category {
                    value {
                      name
                    }
                  }
                }
              }
            }
          }
        allCategories: allKontentItemArticle {
            edges {
              node {
                elements {
                  category {
                    value {
                      codename
                      name
                    }
                  }
                }
              }
            }
          }
    }
    `);

    // Create pages
    result.data.allArticles.edges.forEach(({node}) => {
        createPage({
            path: node.elements.url_slug.value,
            component: path.resolve(`./src/templates/article.js`),
            context: {
                slug: node.elements.url_slug.value,
            }
        })
    });

    result.data.allCategories.edges.forEach(({node}) => {
      createPage({
          path: `${node.elements.category.value[0].codename.toLowerCase().split('_').join('-')}`,
          component: path.resolve(`./src/templates/category.js`),
          context: {
              slug: node.elements.category.value[0].codename.toLowerCase().split('_').join('-'),
              category: node.elements.category.value[0].name,
          }
      })
  });
}