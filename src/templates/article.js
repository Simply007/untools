import React from "react"
import { graphql } from "gatsby"
import style from "./article.module.css"
import Layout from "../components/layout"
import Tag from "../components/tag"
import GalleryItem from "../components/gallery-item"
import Share from "../components/share"

const Article = ({ data }) => {
    const item = data.kontentItemArticle.elements;
    let categoryTag = item.category.value[0].name.toLowerCase().split(' ').join('-');

    const sources = item.sources.linked_items.map(item => {
        return (
            <div key={item.id}><a href={`${item.elements.url_link.value}`} target={`blank`} rel={`noopener noreferrer`}>{item.elements.name.value}</a></div>
        )
    });

    const similarItems = data.kontentItemArticle.elements.similar_tools.linked_items.map(item => {
        return (
          <GalleryItem key={item.id} data={item}></GalleryItem>
        )
    });

    return (
        <Layout>
          <div style={{backgroundColor:`var(--transparentGrey)`, height: `10rem`}}></div>
          <div className={style.container}>
            <div className={style.top}>
                <img src={`${item.icon.value[0].url}`} alt="" style={{float: `left`, marginRight: `2rem`}}></img>
                <div style={{margin: `0.5rem`}}>
                    <h2>{item.name.value}</h2>
                    <Tag categoryStyle={categoryTag} category={item.category.value[0].name.toUpperCase()}></Tag>
                    <div className={style.whenUseful}>{item.when_useful.value}</div>
                </div>
            </div>
            <div className={style.content}>
              <div dangerouslySetInnerHTML={{ __html:item.content.value}}>
              </div>
              <div>
                  <h3>Sources</h3>
                  {sources}
              </div>
            </div>
            <Share title={item.name.value} category={item.category.value[0].name.toLowerCase()} ></Share>
            <div className={style.similarContainer}>
                <h2>Similar tools</h2>
                {similarItems}
            </div>
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