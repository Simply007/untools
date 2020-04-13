import React from "react"
import style from "./footer.module.css"

const Footer = () => (
    <footer className={style.footer}>
        © {new Date().getFullYear()}, Made by
        {` `}
        <a href="https://www.amran.cz" target="blank">Adam Amran</a>
    </footer>
  )

export default Footer
  