import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const Article = ({ data }) => {
    console.log(data);
    const item = data.kontentItemArticle.elements;

    return (
        <Layout>
            <h1>{item.name.value}</h1>
            <span>{item.category.value.name}</span>
            <div dangerouslySetInnerHTML={{ __html:item.content.value}}>
            </div>
        </Layout>
    )
}

export default Article

export const query = graphql`
query articleQuery($slug: String!) {
    kontentItemArticle(elements: {url_slug: {value: {eq: $slug}}})
        {
        elements {
            url_slug {
              value
            }
            name {
              value
            }
            content {
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
`