import React from "react"
import Adinfo from "../Adinfo/Adinfo"
import "./advert.scss"
import vid from "../Assets/vid1.mp4"

function Advert() {
  return (
    <div className="advert">
      <div className="advert-container">
        <div className="left-ad">
          <h1>A whole world of freelance talent at your fingertip</h1>
          <Adinfo title="The best  for every budget" info="FInd high quality service at every price point, no rate, just project base pricing system" />
          <Adinfo title="The best  for every budget" info="FInd high quality service at every price point, no rate, just project base pricing system" />
          <Adinfo title="The best  for every budget" info="FInd high quality service at every price point, no rate, just project base pricing system" />
          <Adinfo title="The best  for every budget" info="FInd high quality service at every price point, no rate, just project base pricing system" />
        </div>
        <div className="right-ad">
          <div className="right-video">
            <video src={vid} alt="video here" controls></video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advert
