import React from "react"
import Logo1 from "../Assets/facebook.png"
import Logo2 from "../Assets/twitter.png"
import Logo3 from "../Assets/instagram.png"
import Logo4 from "../Assets/linkedin.png"
import Logo5 from "../Assets/pinterest.png"
import "./trusted.scss"

function Trusted() {
  return (
    <div className="trusted">
      <div className="trusted-container">
        <img src={Logo1} alt="trusted-image" />
        <img src={Logo2} alt="trusted-image" />
        <img src={Logo3} alt="trusted-image" />
        <img src={Logo4} alt="trusted-image" />
        <img src={Logo5} alt="trusted-image" />
      </div>
    </div>
  )
}

export default Trusted
