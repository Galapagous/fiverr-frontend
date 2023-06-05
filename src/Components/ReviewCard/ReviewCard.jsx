import React from "react"
import Profile from "../../Components/Assets/profile.jpg"
import like from "../../Components/Assets/like.png"
import "./reviewcard.scss"
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import Star from '../../Components/Assets/star.png'

function ReviewCard({info}) {
  const { isLoading, error, data} = useQuery({
    queryKey: ['gigOwner'],
    queryFn: () => newRequest.get(`/user/single/${info.UserId}`).then((res)=>{
      return res.data
    })
  });
  return (
    <div className="review">
      <div className="review-container">
        <div className="top">
          <img src={Profile} alt="profile" />
          <div className="item">
            <h3>{data.username}</h3>
            <span>{data.country}</span>
          </div>
        </div>
        <span>{info.Star} <img src={Star} alt="image"/></span>
        <p>{info.Desc}</p>
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
