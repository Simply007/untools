import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"

const IndexPage = ({data}) => {
  const items = data.allKontentItemArticle.edges.map(({node}) => {
    return (
      <Link to={`/${node.elements.url_slug.value}`} key={node.id}>
          <div style={{width: `12rem`, margin: `auto`, maxWidth: `20rem`, backgroundColor: `#cccccc` }}>
              <img src={`${node.elements.icon.value[0].url}`} alt=""></img>
              <h3>{node.elements.name.value}</h3>
              <div>{node.elements.category.value[0].name.toUpperCase()}</div>
              <span>{node.elements.when_useful.value}</span>
          </div>
      </Link>
    )
  });

  const categories = data.allKontentItemArticle.edges.map(({node}) => {
    return (
      <li key={node.elements.category.value[0].name}>
        <button href="#">{node.elements.category.value[0].name}</button>
      </li>
    )
  });

  return (
    <Layout>
      <SEO title="Untools" />
      <h2>Tools for better thinking</h2>
      <ul style={{ listStyle: `none`, float: `none` }}>
        <li><button href="#">All</button></li>
        {categories}
      </ul>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      </div>
      <div>
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
  allKontentTaxonomyCategory {
    edges {
      node {
        terms {
          name
        }
        id
      }
    }
  }
}
`