import React  from "react"
import style from "./share.module.css"
import { FiCopy, FiTwitter } from "react-icons/fi";
import { IconContext } from "react-icons";
import { CopyToClipboard } from 'react-copy-to-clipboard'

class Tooltip extends React.Component {
    render () {
        return (
            <p key={this.props.tooltipText} className={style.tooltip}>{this.props.tooltipText}</p>
        )
    }
}

/* 
const Tooltip = (tooltipText) => {
    return <p className={style.tooltip}>{tooltipText}</p>
} */

class Share extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tooltipText: 'Copy link',
        };
        this.changeText = this.changeText.bind(this);
        this.resetText = this.resetText.bind(this)
    }

    changeText(){
        this.setState({
            tooltipText: 'Copied!',
        })
    }

    resetText(){
        this.setState({
            tooltipText: 'Copy link!'
        })
    }

    componentDidMount() {
        this.url = window.location.href
    }

    render() {
        return (
        <div className={style.share}>
            <span>Share this tool:</span>
            <CopyToClipboard text={this.url}><button onMouseEnter={this.resetText} onClick={this.changeText}><IconContext.Provider value={{ color: "var(--darkGrey)", className: "global-class-name", size: "2.4rem" }}><FiCopy /></IconContext.Provider><Tooltip tooltipText={this.state.tooltipText}></Tooltip></button></CopyToClipboard>
            <button><a className="twitter-share-button" href={`https://twitter.com/intent/tweet?text=${this.props.title}:%20a%20tool%20for%20better%20${this.props.category}%20${this.url}`} target="_blank" rel="noopener noreferrer"><IconContext.Provider value={{ color: "#1DA1F2", className: "global-class-name", size: "2.4rem" }}><FiTwitter /></IconContext.Provider></a><p className={style.tooltip}>Share on Twitter</p></button>
        </div>
    )}
}

Share.defaultProps = {
    title: 'A tool',
    category: 'thinking'
}
  
export default Share