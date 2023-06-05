import React, { useEffect } from "react"
import "./gigs.scss"
import profile from "../../Components/Assets/Musa7.png"
import project from "../../Components/Assets/profile.jpg"
import ReviewCard from "../../Components/ReviewCard/ReviewCard"
import cover from "../../Assets/cover"
import Slide from "../../Components/Slide/Slide"
import { useQuery } from "@tanstack/react-query"
import newRequest from "../../utils/newRequest"
import { useParams } from "react-router-dom"

function Gigs({review}) {
  const params = useParams().id
  const { isLoading, error, data} = useQuery({
    queryKey: ['gigSingle'],
    queryFn: () => newRequest.get(`/gig/single/${params}`).then((res)=>{
      return res.data
    })
  });
  const { isLoading: ownerLoading , error:ownerError, data:ownerData} = useQuery({
    queryKey: ['gigOwner'],
    queryFn: () => newRequest.get(`/user/single/${data.userId}`).then((res)=>{
      return res.data
    })
  });

  const { isLoading: reviewLoading , error:reviewError, data:reviewData} = useQuery({
    queryKey: ['gigReview'],
    queryFn: () => newRequest.get(`/review`).then((res)=>{
      return (res.data.filter(each_data=>{
        return each_data.GigId == data._id
      }))
    })
  });


  const handleSUbmit = (e) =>{
    e.preventDefault()
    const reviewData = {
      GigId: data._id,
      Desc: e.target[0].value,
      Star: e.target[1].value,
    }
    newRequest.post('/review', reviewData)
  }

  return (
    <div className="gigs-page">
      <div className="gigs-container">
        <div className="gigs-left">
          <span className="bread-crump">Musaa > graphic & design ></span>
          <h1>{isLoading? 'Loading' : error ? 'Something Went Wrong' : data.title}</h1>
          <div className="profile">
            <img src={isLoading? 'Loading' : error ? 'Something Went Wrong' : ownerData.profile} alt="profile picture" />
            <h1>{ownerLoading ? 'Loading Owner' : ownerError ? 'Error Fetching owner' : ownerData.username}</h1>
            <div className="rating">
              <span>{isLoading? 'Loading' : error ? 'Something Went Wrong' : data.total_stars}</span>
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
            <p>{isLoading? 'Loading' : error ? 'Something Went Wrong' : data.desc}</p>
          </div>
          <div className="about-seller">
            <h1>About This Seller</h1>
            <div className="seller-info">
              <img src={isLoading? 'Loading' : error ? 'Something Went Wrong' : ownerData.profile} alt="profile" />
              <div className="seller-data">
                <h1>{ownerLoading ? 'Loading Owner' : ownerError ? 'Error Fetching owner' : ownerData.username}</h1>
                <span>ratings</span>
                <button>Contact</button>
              </div>
            </div>
            <div className="additional-info">
              <div className="info-card">
                <div className="card">
                  <h3>From</h3>
                  <p>{ownerLoading ? 'Loading Owner' : ownerError ? 'Error Fetching owner' : ownerData.country}</p>
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
              <p>{ownerLoading ? 'Loading Owner' : ownerError ? 'Error Fetching owner' : ownerData.desc}</p>
            </div>
            <div className="add_review">
                <h3>Add Your Review</h3>
              <form onSubmit = {handleSUbmit}>
                <input type="text" placeholder="Write your review"/>
                <select>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
                <button>Submit</button>
              </form>
            </div>
            <div className="reviews">
              <h1>Reviews</h1>
              <div className="review-card">
                {reviewLoading ? 'Loading' : reviewError ? 'Something Went Wrong' : reviewData.length > 1 && reviewData.map(each_data=>{
                  return(
                    <ReviewCard info = {each_data}/>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="gigs-right">
          <div className="menu1">
            <h3>{isLoading? 'Loading' : error ? 'Something Went Wrong' : data.title}</h3>
            <span>${isLoading? 'Loading' : error ? 'Something Went Wrong' : data.price}</span>
          </div>
          <p>So far, we haven’t done anything that couldn’t be done just as easily without Express, but already Express is providing us some functionality that isn’t immediately obvious.</p>
          <div className="menu2">
            <span>{isLoading? 'Loading' : error ? 'Something Went Wrong' : data.delivery} days delivery</span>
            <span>{isLoading? 'Loading' : error ? 'Something Went Wrong' : data.revision} review session</span>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Gigs
