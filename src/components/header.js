import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={style.header}>
    <div className={style.container}>
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
