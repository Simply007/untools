import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const Article = ({ data }) => {
    const item = data.kontentItemArticle.elements;

    const sources = item.sources.linked_items.map(item => {
        return (
            <div><a href={`${item.elements.url_link.value}`}>{item.elements.name.value}</a></div>
        )
    });

    const similarItems = data.kontentItemArticle.elements.similar_tools.linked_items.map(item => {
        return (
          <Link to={`/${item.elements.url_slug.value}`} key={item.id}>
              <div style={{width: `12rem`, margin: `auto`, maxWidth: `20rem`, backgroundColor: `#cccccc` }}>
                  <img src={`${item.elements.icon.value[0].url}`} alt=""></img>
                  <h3>{item.elements.name.value}</h3>
                  <div>{item.elements.category.value[0].name.toUpperCase()}</div>
                  <span>{item.elements.when_useful.value}</span>
              </div>
          </Link>
        )
    });

    return (
        <Layout>
            <div style={{margin: `2rem`, backgroundColor:`#eee`}}>
                <img src={`${item.icon.value[0].url}`} alt="" style={{float: `left`, marginRight: `2rem`}}></img>
                <div style={{margin: `0.5rem`}}>
                    <h2>{item.name.value}</h2>
                    <div>{item.category.value[0].name.toUpperCase()}</div>
                    <div>{item.when_useful.value}</div>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html:item.content.value}}>
            </div>
            <div>
                <h3>Sources</h3>
                {sources}
            </div>
            <div>
                <h2>Similar tools</h2>
                {similarItems}
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
            when_useful {
                value 
            }
            icon {
                value {
                  url
                }
              }
            category {
              value {
                name
              }
            }
            sources {
                linked_items {
                  ... on KontentItemSource {
                    id
                    elements {
                      name {
                        value
                      }
                      url_link {
                        value
                      }
                    }
                  }
                }
              }
              similar_tools {
                linked_items {
                  id
                  ... on KontentItemArticle {
                    id
                    elements {
                      name {
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
                      category {
                        value {
                          name
                        }
                      }
                      url_slug {
                        value
                      }
                    }
                  }
                }
                name
              }
          }
    }
  }
`