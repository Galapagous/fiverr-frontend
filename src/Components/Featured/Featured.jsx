import React from "react"
import "./featured.scss"
import Musa from "../Assets/Musa7.png"
import Search from "../Assets/search.png"

function Featured() {
  return (
    <div className="featured">
      <div className="feature-container">
        <div className="feature-info">
          <h1>
            Find the perfect <i>freelance</i> service for your business
          </h1>
          <div className="search">
            <div className="search-icon">
              <img src={Search} alt="search-logo" />
              <input type="text" alt="What are you looking for?" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular-feature">
            <span>Popular:</span>
            <span>Web Design</span>
            <span>Logo Design</span>
            <span>Wordpress</span>
            <span>AI Services</span>
          </div>
        </div>
        <img src={Musa} alt="feature-img" />
      </div>
    </div>
  )
}

export default Featured
