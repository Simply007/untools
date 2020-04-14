import React, { useState }  from "react"
import style from "./share.module.css"
import { FiCopy, FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { IconContext } from "react-icons";
import { CopyToClipboard } from 'react-copy-to-clipboard'

const url = window.location.href

const Tooltip = () => {
    const [tooltipText, setText] = useState("Click here");

    return <p onClick={() => setText("New title")}className={style.tooltip}>{tooltipText}</p>
}

const Share = () => (
    <div className={style.share}>
        <span>Share</span>
        <CopyToClipboard text={url}><button><IconContext.Provider value={{ color: "var(--darkGrey)", className: "global-class-name", size: "2.4rem" }}><FiCopy /></IconContext.Provider><Tooltip tooltipText="Copy link"></Tooltip></button></CopyToClipboard>
        <button><IconContext.Provider value={{ color: "#1DA1F2", className: "global-class-name", size: "2.4rem" }}><FiTwitter /></IconContext.Provider><p className={style.tooltip}>Share on Twitter</p></button>
        <button><IconContext.Provider value={{ color: "#007BB5", className: "global-class-name", size: "2.4rem" }}><FiLinkedin /></IconContext.Provider><p className={style.tooltip}>Share on LinkedIn</p></button>
    </div>
)
  
export default Share