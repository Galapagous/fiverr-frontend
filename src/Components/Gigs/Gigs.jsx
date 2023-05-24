import React from "react"
import "./gigs.scss"
import { Link } from "react-router-dom"

function Gigs(props) {
  return (
    <div className="gigs">
            <div className="gig-card">
              <Link to="/gigs/1">
              <div className="gig-info">
                <p>{props.desc}</p>
                <h1>{props.title}</h1>
              </div>
              </Link>
                <img src={props.img} alt="gig image" />
      </div>
    </div>
  )
}

export default Gigs
