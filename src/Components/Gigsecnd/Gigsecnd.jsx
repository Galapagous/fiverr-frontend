import React from "react"
import "./gigsecnd.scss"
import { Link } from "react-router-dom"

function Gigscend(props) {
  return (
    <div className="gigsecond">
      <div className="gigsecond-container">
            <div className="gigsecond-card">
              <img src={props.img} alt="dummmy image" />
              <div className="gig-info">
                <img src={props.profile} alt="profile" />
                <Link to="/gigs/1">
                <div className="profile-info">
                  <h1>{props.category}</h1>
                  <span>{props.username}</span>
                </div>
                </Link>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Gigscend
