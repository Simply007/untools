import React from "react"
import Layout from "../components/layout"
import gif from "../images/404.gif"
import SEO from "../components/seo"
import style from "./404.module.css"
import { Link } from "gatsby"


const NotFoundPage = () => (
  <Layout>
    <SEO title="No page found (404)" />
    <div className={style.container}>
      <h1>No page found here</h1>
      <p><Link to="/"><strong>Go to homepage</strong></Link>. You'll find all the content there.</p>
      <p>If you got here via a link on this page, please <a href="https://twitter.com/amrancz"  target="_blank" rel="noopener noreferrer">let me know.</a></p>
      <img src={gif} alt="Confused Travolta" />
    </div>
  </Layout>
)

export default NotFoundPage
