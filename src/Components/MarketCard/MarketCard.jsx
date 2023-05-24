import React from "react"
import Dummy from "../Assets/funding.png"
import "./marketcard.scss"

function MarketCard(props) {
  return (
    <div className="marketcard">
      <img src={Dummy} alt="market-logo" />
      <span>{props.title}</span>
    </div>
  )
}

export default MarketCard
