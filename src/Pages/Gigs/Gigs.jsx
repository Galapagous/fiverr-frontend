import React from "react"
import "./gigs.scss"
import profile from "../../Components/Assets/Musa7.png"
import project from "../../Components/Assets/profile.jpg"
import project2 from "../../Components/Assets/img4.jpg"
import ReviewCard from "../../Components/ReviewCard/ReviewCard"
import cover from "../../Assets/cover"
import Slide from "../../Components/Slide/Slide"

function Gigs() {
  return (
    <div className="gigs-page">
      <div className="gigs-container">
        <div className="gigs-left">
          <span className="bread-crump">Musaa > graphic & design ></span>
          <h1>I will create an ai generated imagery</h1>
          <div className="profile">
            <img src={profile} alt="profile picture" />
            <h1>Goerge orwell</h1>
            <div className="rating">
              <span>ratings here</span>
            </div>
          </div>
          <div className="works">
            <div className="projects">
            <Slide slidesToShow={1} arrowScroll={1}>
              {cover.map(each_cover=>{
                return(
                  <img src={each_cover.profile} alt="cover" />
                )
              })}
            </Slide>
            </div>
          </div>
          <div className="about-gig">
            <h1>About This Gig</h1>
            <p>when I tell them how easy it would be to do what they’re doing in vi), but finding a powerful editor and learning to use it will significantly increase your productivity and, dare I say it, enjoyment. One of the reasons I particularly like vi (though hardly the most important reason) is that like bash, it is ubiquitous. If you have access to a Unix system (Cygwin included), vi is there for you. Many popular editors (even Microsoft Visual Studio!) have a vi mode. Once you get used to it, it’s hard to imagine using anything else. vi is a hard road at first, but the payoff is worth it</p>
          </div>
          <div className="about-seller">
            <h1>About This Seller</h1>
            <div className="seller-info">
              <img src={project2} alt="profile" />
              <div className="seller-data">
                <h1>George orwell</h1>
                <span>ratings</span>
                <button>Contact</button>
              </div>
            </div>
            <div className="additional-info">
              <div className="info-card">
                <div className="card">
                  <h3>From</h3>
                  <p>Nigeria</p>
                </div>
                <div className="card">
                  <h3>Member since</h3>
                  <p>Aug 1 1993</p>
                </div>
                <div className="card">
                  <h3>Avg. Response time</h3>
                  <p>1 hr</p>
                </div>
                <div className="card">
                  <h3>Last Delivery</h3>
                  <p>Today</p>
                </div>
                <div className="card">
                  <h3>Language</h3>
                  <p>English</p>
                </div>
              </div>
              <p>If, like me, you see the value in being familiar with an editor that’s available anywhere, your other option is Emacs. Emacs and I have never quite gotten on (and usually you’re either an Emacs person or a vi person), but I absolutely respect the power and flexibility that Emacs provides. If vi’s modal editing approach isn’t for you, I would encourage you to look into Emacs</p>
            </div>
            <div className="reviews">
              <h1>Reviews</h1>
              <div className="review-card">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
              </div>
            </div>
          </div>
        </div>
        <div className="gigs-right">
          <div className="menu1">
            <h3>1 AI Generated Image</h3>
            <span>$33.99</span>
          </div>
          <p>So far, we haven’t done anything that couldn’t be done just as easily without Express, but already Express is providing us some functionality that isn’t immediately obvious.</p>
          <div className="menu2">
            <span>2 days delivery</span>
            <span>3 review session</span>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Gigs
