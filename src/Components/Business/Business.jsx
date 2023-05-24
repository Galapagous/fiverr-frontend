import React from "react"
import Adinfo from "../Adinfo/Adinfo"
import "./business.scss"
import Img from "../Assets/apple3.png"

function Business() {
  return (
    <div className="business">
      <div className="business-container">
        <div className="left-business">
          <h1>
            Musaa <i>Business</i>
          </h1>
          <h1>
            A business solution design for <i>teams</i>
          </h1>
          <span>Upgrade to a business experience packed with tools and benefits, dedicated to business</span>
          <div className="business-items">
            <Adinfo style={{ Color: "white" }} title="Never abandone the truth" />
            <Adinfo style={{ Color: "green" }} title="Avoid making companion with fools" />
            <Adinfo title="Do something worthwhile" />
          </div>
          <button>Explore Musaa business</button>
        </div>
        <div className="right-business">
          <img src={Img} alt="apple image" />
        </div>
      </div>
    </div>
  )
}

export default Business
