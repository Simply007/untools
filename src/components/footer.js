import React from "react"
import style from "./footer.module.css"
import { Link } from "gatsby";

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        url: '',
    };
}

  componentDidMount() {
    this.setState({
        url: `${window.location.href}`,
    })
  }

  render() {
    return (
      <>
    <footer className={style.footer}>
      <div className={style.container}>
      <div className={style.block}>
        <h3><span role="img" aria-label="mailbox">📫 </span>New tools in your inbox</h3>
        <label htmlFor="bd-email">You'll get new tools as soon as they're published and occasional project updates.</label>

        <form
          action="https://buttondown.email/api/emails/embed-subscribe/untools.co"
          method="post"
          target="popupwindow"
          onSubmit={`${this.state.url}.open('https://buttondown.email/untools.co', 'popupwindow')`}
          className="embeddable-buttondown-form" >
          <input type="email" name="email" id="bd-email" placeholder="Enter your email" />
          <input type="hidden" value="1" name="embed" />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
      <div className={style.block}>
        <h3><span role="img" aria-label="info">ℹ️ </span>About Untools</h3>
        <p>Collection of thinking tools and frameworks to help you solve problems, make decisions and understand systems. <br /><Link to="/about">Learn more</Link></p>
        <p>Do you have feedback or want to suggest a tool? <br /><a href="https://twitter.com/amrancz" target="_blank" rel="noopener noreferrer">Let me know on Twitter!</a></p>
      </div>
      </div>
      <div className={style.container}>
        <p>© {new Date().getFullYear()}, Made by {` `} <a href="https://www.amran.cz" target="blank" rel={`noopener noreferrer`}>Adam Amran</a></p>
      </div>
    </footer>
  </>
    )
  }

}
/* 
const Footer = () => (
  <>
    <footer className={style.footer}>
      <div className={style.container}>
      <div className={style.block}>
        <h3><span role="img" aria-label="mailbox">📫 </span>New tools in your inbox</h3>
        <p>You'll get new tools as soon as they're published and occasional project updates.</p>
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/untools.co"
          method="post"
          target="popupwindow"
          onSubmit={`window.open('https://buttondown.email/untools.co', 'popupwindow')`}
          className="embeddable-buttondown-form" >
          <input type="email" name="email" id="bd-email" placeholder="Enter your email" />
          <input type="hidden" value="1" name="embed" />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
      <div className={style.block}>
        <h3><span role="img" aria-label="lightbulb">💡 </span>Have a suggestion?</h3>
        <a href="https://twitter.com/amrancz" target="_blank" rel="noopener noreferrer">Let me know on Twitter!</a>
      </div>
      </div>
      <div className={style.container}>
        <p>© {new Date().getFullYear()}, Made by {` `} <a href="https://www.amran.cz" target="blank" rel={`noopener noreferrer`}>Adam Amran</a></p>
      </div>
    </footer>
  </>
)
*/

export default Footer
  