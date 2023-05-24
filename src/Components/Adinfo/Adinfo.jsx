import React from "react"
import Img from "../Assets/pinterest.png"
import "./adinfo.scss"

function Adinfo(props) {
  return (
    <div className="adinfo">
      <div className="adinfo-container">
        <div className="top">
          <img src={Img} alt="icon" />
          <span>{props.title}</span>
        </div>
        <span>{props.info}</span>
      </div>
    </div>
  )
}

export default Adinfo
