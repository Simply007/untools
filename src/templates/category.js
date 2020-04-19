import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import style from "./category.module.css"
import GalleryItem from "../components/gallery-item"
import Categories from "../components/categories"


const Category = ({data, pageContext}) => { 

  function orderItems(a, b) {
    const first = a.props.data.system.lastModified;
    const second = b.props.data.system.lastModified;
    return first > second ? -1 : (first < second ? 1 : 0)
  }

  const items = data.allKontentItemArticle.edges.map(({node}) => {
    if (node.elements.category.value[0].name === pageContext.category) {
      return (
        <GalleryItem data={node} key={node.id}></GalleryItem>
      )
    }
  }).sort(orderItems);


  
  return (
    <>
    <Layout displayBackLink="none">
      <SEO title={pageContext.category} />
      <div className={style.top}>
        <h1>Tools for better thinking</h1>
        <div>
        <Categories data={data} selected={pageContext.category}></Categories>
        </div>
      </div>
      <div className={style.container}>
        {items}
      </div>
    </Layout>
    </>
  )
} 

export default Category

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
        system {
          lastModified
        }
      }
    }
  }
}
`