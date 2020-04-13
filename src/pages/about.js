import React from 'react'
// import { Link } from "gatsby"
import style from "./about.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
    <Layout>
        <SEO title="About" />
        <div className={style.container}>
            <h1>About Untools</h1>
            <p>
                Untools is a collection of mental tools for better thinking. 
                It spans systems thinking, problem solving and decision making.
            </p>
            <p>
                Made by <a href="https://www.amran.cz">Adam Amran</a>.
                Connect on Twitter: <a href="https://www.twitter.com/amrancz">@amrancz</a>
            </p>
        </div>
    </Layout>
)

export default About