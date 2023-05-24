import React from "react"
import Profile from "../../Components/Assets/profile.jpg"
import like from "../../Components/Assets/like.png"
import "./reviewcard.scss"

function ReviewCard() {
  return (
    <div className="review">
      <div className="review-container">
        <div className="top">
          <img src={Profile} alt="profile" />
          <div className="item">
            <h3>Musa Mo</h3>
            <span>Nigeria</span>
          </div>
        </div>
        <span>ratings</span>
        <p>So far, we haven’t done anything that couldn’t be done just as easily without Express, but already Express is providing us some functionality that isn’t immediately obvious. Remember in the previous chapter how we had to normalize req.url to determine what resource was being requested? We had to manually strip off the querystring and the trailing slash, and convert to lowercase.</p>
        <div className="bottom">
          <span>Helpful?</span>
          <img src={like} alt="like" />
          <span>Yes</span>
          <img src={like} alt="like" />
          <span>No</span>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
