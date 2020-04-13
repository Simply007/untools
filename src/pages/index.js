import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import style from "./index.module.css"
import GalleryItem from "../components/gallery-item"
import Header from "../components/header"

const IndexPage = ({data}) => {
  const items = data.allKontentItemArticle.edges.map(({node}) => {
    return (
      <GalleryItem data={node}></GalleryItem>
    )
  });

  const categories = data.allKontentItemArticle.edges.map(({node}) => {
    let categoryTag = node.elements.category.value[0].name.toLowerCase().split(' ').join('-');
    return (
        <button className={`${style.button} ${categoryTag}`} key={node.id}>{node.elements.category.value[0].name}</button>
    )
  });

  return (
    <>
    <Layout displayValue="none">
      <SEO title="Untools" />
      <div className={style.top}>
        <h1>Tools for better thinking</h1>
        <div>
          <button className={`${style.button} all`} disabled>All</button>
          {categories}
        </div>
      </div>
      <div className={style.container}>
        {items}
      </div>
    </Layout>
    </>
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