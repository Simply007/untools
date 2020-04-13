import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={style.header}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <span className={style.logo}>
        <Link to="/" >
          {siteTitle.toLowerCase()}
        </Link>
      </span>
      <span className={style.about}>
        <Link to="/about/">About</Link>
      </span>
      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
