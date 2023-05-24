import React from "react"
import { Link } from "react-router-dom"
import "./message.scss"
import Img from "../../Components/Assets/img6.jpg"
import Img2 from "../../Components/Assets/img7.jpg"

function Message() {
  return (
    <div className="message">
      <div className="message-container">
        <div className="breadcrump">
          <span>
            <Link to="/messages/1">MESSAGES</Link>>Muhd' Musa
          </span>
        </div>
        <div className="message-data">
          <div className="buyer">
            <img src={Img} alt="message" />
            <p>So far, we haven’t done anything that couldn’t be done just as easily without Express, but already Express is providing us some functionality that isn’t immediately obvious. Remember in the previous chapter how we had to normalize req.url to determine what resource was being requested? We had to manually strip off the querystring and the trailing slash, and convert to lowercase.</p>
          </div>
          <div className="owner">
            <img src={Img2} alt="message" />
            <p>So far, we haven’t done anything that couldn’t be done just as easily without Express, but already Express is providing us some functionality that isn’t immediately obvious. Remember in the previous chapter how we had to normalize req.url to determine what resource was being requested? We had to manually strip off the querystring and the trailing slash, and convert to lowercase.</p>
          </div>
          <div className="buyer">
            <img src={Img} alt="message" />
            <p>So far, we haven’t done anything that couldn’t be done just as easily without Express, but already Express is providing us some functionality that isn’t immediately obvious. Remember in the previous chapter how we had to normalize req.url to determine what resource was being requested? We had to manually strip off the querystring and the trailing slash, and convert to lowercase.</p>
          </div>
          <div className="owner">
            <img src={Img2} alt="message" />
            <p>So far, we haven’t done anything that couldn’t be done just as easily without Express, but already Express is providing us some functionality that isn’t immediately obvious. Remember in the previous chapter how we had to normalize req.url to determine what resource was being requested? We had to manually strip off the querystring and the trailing slash, and convert to lowercase.</p>
          </div>
          <div className="buyer">
            <img src={Img} alt="message" />
            <p>So far, we haven’t done anything that couldn’t be done just as easily without Express, but already Express is providing us some functionality that isn’t immediately obvious. Remember in the previous chapter how we had to normalize req.url to determine what resource was being requested? We had to manually strip off the querystring and the trailing slash, and convert to lowercase.</p>
          </div>
          <div className="owner">
            <img src={Img2} alt="message" />
            <p>So far, we haven’t done anything that couldn’t be done just as easily without Express, but already Express is providing us some functionality that isn’t immediately obvious. Remember in the previous chapter how we had to normalize req.url to determine what resource was being requested? We had to manually strip off the querystring and the trailing slash, and convert to lowercase.</p>
          </div>
          <div className="buyer">
            <img src={Img} alt="message" />
            <p>So far, we haven’t done anything that couldn’t be done just as easily without Express, but already Express is providing us some functionality that isn’t immediately obvious. Remember in the previous chapter how we had to normalize req.url to determine what resource was being requested? We had to manually strip off the querystring and the trailing slash, and convert to lowercase.</p>
          </div>
          <div className="owner">
            <img src={Img2} alt="message" />
            <p>So far, we haven’t done anything that couldn’t be done just as easily without Express, but already Express is providing us some functionality that isn’t immediately obvious. Remember in the previous chapter how we had to normalize req.url to determine what resource was being requested? We had to manually strip off the querystring and the trailing slash, and convert to lowercase.</p>
          </div>
        </div>
        <div className="message-box">
          <textarea type="text" />
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message
