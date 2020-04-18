import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import style from "./index.module.css"
import GalleryItem from "../components/gallery-item"
import Categories from "../components/categories"

const IndexPage = ({data}) => {

  const items = data.allKontentItemArticle.edges.map(({node}) => {
    return (
      <GalleryItem data={node} key={node.id}></GalleryItem>
    )
  });
/*
  const categoriesRaw = data.allKontentItemArticle.edges.map(({node}) => {
    return (
        <CategoryTag key={node.elements.category.value[0].name} name={node.elements.category.value[0].name}/>
      )
  });

  const categories = categoriesRaw.filter((elem, index) => {
    return categoriesRaw.findIndex((x) => {
      return x.key === elem.key;
    }) === index;
  }); */
    
  return (
    <>
    <Layout displayValue="none">
      <SEO title="Untools" />
      <div className={style.top}>
        <h1>Tools for better thinking</h1>
        <div>
          <Categories data={data}></Categories>
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
}
`