import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const Similar = () => (
  <h3>It works</h3>
    /* <StaticQuery
      query={graphql`
      {
        kontentItemArticle {
            elements {
              name {
                value
              }
              when_useful {
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
      `}
      render={data => (
        <Link to="/">
          <div>
              <h3>{data.kontentItemArticle.elements.name.value}</h3>
              <span>{data.kontentItemArticle.elements.category.value.name}</span>
              <span>{data.kontentItemArticle.elements.when_useful.value}</span>
          </div>
        </Link>
      )}
    />

    <div style={{width: `12rem`, margin: `auto`, maxWidth: `20rem`, backgroundColor: `#cccccc` }}>
      {items}
    </div>
    */
)
  
export default Similar