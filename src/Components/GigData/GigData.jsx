import React from "react"
import "./gigData.scss"
import { Link } from "react-router-dom"
import service from "../../Components/Assets/service.jpg"
import like from "../../Components/Assets/star.png"
import game from "../../Components/Assets/game.png"
import { useQuery } from "@tanstack/react-query"
import newRequest from "../../utils/newRequest"

function GigData({item}) {

  const { isLoading: ownerLoading, error: ownerError, data: ownerData} = useQuery({
    queryKey: ['gigOwner'],
    queryFn: () => newRequest.get(`/user/single/${item.userId}`).then((res)=>{
      return res.data
    })
  });
  return (
    <div className="gigdata">
          <div key={item._id} className="gig-card">
                <Link to={`/gigs/${item._id}`}><img src={service||item.cover} alt="dontknow" /></Link>
                <div className="info">
                  {ownerLoading ? 'Loading' : ownerError ? 'Something went wrong' : <img src={ownerData.profile} alt="profile" />}
                  <span>{ownerLoading ? 'Loading' : ownerError ? 'Something went wrong' : ownerData.username}</span>
                </div>
                <span>{item.desc}</span>
                <div className="rating">
                  <img src={like} alt="rating" />
                  <span>{isNaN ? '0' : Math.round(item.total_stars/item.NumberOf_stars)}</span>
                </div>
                <div className="price-section">
                  <img src={game} alt="heart" />
                  <div className="price">
                    <span>Starting at</span>
                    <span>${item.price}</span>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default GigData
