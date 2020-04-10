import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"

const IndexPage = ({data}) => {
  const items = data.allKontentItemArticle.edges.map(({node}) => {
    return (
      <Link to={`${node.elements.url_slug.value}`} key={node.id}>
          <div>
              <h3>{node.elements.name.value}</h3>
              <span>{node.elements.category.value.name}</span>
              <span>{node.elements.when_useful.value}</span>
          </div>
      </Link>
    )
  });
  console.log(items);
  return (
  <Layout>
    <SEO title="Untools" />
    <h2>Collection of mental tools for better thinking</h2>
    <p>It will go live later this year.</p>
    <p>Stay tuned!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <div style={{width: `12rem`, margin: `auto`, maxWidth: `20rem`, backgroundColor: `#cccccc` }}>
      {items}
    </div>
  </Layout>
  )
} 

export default IndexPage

export const query = graphql`
{
  allKontentItemArticle {
    edges {
      node {
        elements {
          name {
            value
          }
          category {
            value {
              name
            }
          }
          content {
            value
          }
          url_slug {
            value
          }
          icon {
            value {
              url
            }
          }
          when_useful {
            value
          }
        }
        id
      }
    }
  }
}
`