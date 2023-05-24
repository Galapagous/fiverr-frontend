import React from "react"
import { Link } from "react-router-dom"
import Footcard from "../FootCard/Footcard"
import "./footer.scss"
import facebook from "../Assets/facebook.png"
import twitter from "../Assets/twitter.png"
import pinterest from "../Assets/pinterest.png"
import linkedin from "../Assets/linkedin.png"
// import facebook from "../Assets/facebook.png"
// import facebook from "../Assets/facebook.png"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="top-footer">
          <Footcard />
          <Footcard />
          <Footcard />
          <Footcard />
          <Footcard />
        </div>
        <hr />
        <div className="bottom-footer">
          <div className="foot-left">
            <Link to="/">
              <h1>Musaa</h1>
            </Link>
            <h3>@ musaa International Ltd 2023</h3>
          </div>
          <div className="foot-right">
            <img src={facebook} alt="img" />
            <img src={twitter} alt="img" />
            <img src={facebook} alt="img" />
            <img src={linkedin} alt="img" />
            <img src={facebook} alt="img" />
            <img src={pinterest} alt="img" />
            <img src={facebook} alt="img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
