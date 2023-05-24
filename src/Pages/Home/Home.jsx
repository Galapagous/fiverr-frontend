import React from "react"
import Advert from "../../Components/Advert/Advert"
import Business from "../../Components/Business/Business"
import Featured from "../../Components/Featured/Featured"
import Gigs from "../../Components/Gigs/Gigs"
import Gigscend from "../../Components/Gigsecnd/Gigsecnd"
import Market from "../../Components/Market/Market"
import Trusted from "../../Components/Trusted/Trusted"
import "./home.scss"
import Slide from "../../Components/Slide/Slide"
import gig_data from "../../Assets/gigs_data"
import Data from "../../Assets/gigsecnd"

function Home() {
  return (
    <div className="home-container">
      <Featured />
      <Trusted />
      <Slide slidesToShow={4} arrowScroll={4}>
        {gig_data.map(each_data=>{
          return(
            <Gigs key={each_data.id} desc={each_data.desc} title ={each_data.Title} img ={each_data.img}/>
          )
        })}
      </Slide>
      <Advert />
      <Market />
      <Business />
      <Slide slidesToShow={4} arrowScroll={4}>
        {Data.map(dummy_data=>{
          return(
            <Gigscend key={dummy_data.id} img ={dummy_data.img} profile = {dummy_data.profile} category={dummy_data.category} username = {dummy_data.username}/>
          )
        })}
      </Slide>
    </div>
  )
}

export default Home
