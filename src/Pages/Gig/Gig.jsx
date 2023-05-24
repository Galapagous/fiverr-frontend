import React, { useState } from "react"
import gig_page from "../../Assets/gig_page"
import service from "../../Components/Assets/service.jpg"
import like from "../../Components/Assets/like.png"
import game from "../../Components/Assets/game.png"
import "./gig.scss"
import { Link } from "react-router-dom"

function Gig() {
  const [viewSort, setViewSort] = useState(false)
  const [sort, setSort] = useState("Newest")
  return (
    <div className="gigpage">
      <div className="gigpage-container">
        <h2>MUSAA > GRAPHIC DESIGN ></h2>
        <h1>AI Artist</h1>
        <h3>Explore the boundaries of AI and art with Musaa AI artist</h3>
        <div className="barner">
          <div className="left-barner">
            <span>Budget</span>
            <input type="text" placeholder="Min" />
            <input type="text" placeholder="Max" />
            <button>Apply</button>
          </div>
          <div className="right-barner">
            <h3>Sort By:</h3>
            <h2
              onClick={() => {
                setViewSort(!viewSort)
              }}
            >
              {sort}
            </h2>
            {viewSort && (
              <div className="sort-item">
                {sort === "Best Selling" ? <span
                  onClick={() => {
                    setSort("Newest")
                    setViewSort(!viewSort)
                  }}
                >
                  Newest
                </span> :
                <span
                  onClick={() => {
                    setSort("Best Selling")
                    setViewSort(!viewSort)
                  }}
                >
                  Best Selling
                </span>}
              </div>
            )}
          </div>
        </div>
        <div className="category-display">
          {gig_page.map((item) => {
            return (
              <div key={item.id} className="gig-card">
                <Link to="/gigs/1"><img src={service} alt="dontknow" /></Link>
                <div className="info">
                  <img src={item.profile} alt="profile" />
                  <span>{item.username}</span>
                </div>
                <span>{item.desc}</span>
                <div className="rating">
                  <img src={like} alt="rating" />
                  <span>{item.star}</span>
                </div>
                <div className="price-section">
                  <img src={game} alt="heart" />
                  <div className="price">
                    <span>Starting at</span>
                    <span>${item.price}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Gig
