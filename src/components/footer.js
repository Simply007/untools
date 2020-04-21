import React from "react"
import style from "./footer.module.css"

const Footer = () => (
    <footer className={style.footer}>
      <div className={style.container}>
      <div className={style.newsletter}>
        <h3>New tools in your inbox</h3>
        <input type="textfield" placeholder="Your best email"></input>
        <button>Get updates</button>
        <p>Only new tools and project updates. Unsubscribe anytime.</p>
      </div>
      <div className={style.newsletter}>
        <h3>Have a suggestion?</h3>
        <a href="https://twitter.com/amrancz" target="_blank">Let me know on Twitter!</a>
      </div>
      </div>
      <div className={style.container}>
        <p>© {new Date().getFullYear()}, Made by {` `} <a href="https://www.amran.cz" target="blank" rel={`noopener noreferrer`}>Adam Amran</a></p>
      </div>
    </footer>
  )

export default Footer
  