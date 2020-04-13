import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import style from "./index.module.css"

const IndexPage = ({data}) => {
  const items = data.allKontentItemArticle.edges.map(({node}) => {
    return (
      <Link to={`/${node.elements.url_slug.value}`} key={node.id}>
          <div className={style.item}>
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
        <button className={style.button} >{node.elements.category.value[0].name}</button>
    )
  });

  return (
    <Layout>
      <SEO title="Untools" />
      <div className={style.top}>
        <h1>Tools for better thinking</h1>
        <div>
          <button className={style.button} disabled>All</button>
          {categories}
        </div>
      </div>
      <div className={style.container}>
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