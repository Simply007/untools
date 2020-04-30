import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from "./header.module.css"

const Header = ({ siteTitle, displayBackLink }) => {
  return (
    <>
    <header className={style.header}>
      <div className={style.container}>
        <span className={style.logo}>
          <Link to="/" >
            {siteTitle.toLowerCase()}
          </Link>
        </span>
        <span className={style.backLink}><Link to="/" style={{display: `${displayBackLink}`}}>All tools</Link></span>
        <span className={style.about}>
          <Link to="/about/">About</Link>
        </span>
      </div>
    </header>
    </>
  )
  }

Header.propTypes = {
  siteTitle: PropTypes.string,
  displayBackLink: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  displayBackLink: `none`,
}

export default Header
