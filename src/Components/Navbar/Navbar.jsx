import React, { useState, useEffect } from "react"
import "./navbar.scss"
import Musa from "../Assets/Musa7.png"
import { Link, useLocation, useNavigate } from "react-router-dom"
import newRequest from "../../utils/newRequest"
import { ToastContainer, toast } from "react-toastify"

function Navbar() {
  const { pathname } = useLocation()
  const currentUser = JSON.parse((localStorage.getItem("currentUser")))
  const [active, setActive] = useState(false)
  const [showOption, setShowOption] = useState(false)
  const navigate = useNavigate()
  const scrlActive = () => {
    window.scrollY > 0 && setActive(true)
  }

  const handleLogout = async()=>{
    setShowOption(false)
    try{
      await newRequest.post("/auth/logout")
      localStorage.setItem("currentUser", null)
      toast("LoggingOut Successfull")
      navigate("/login")
    }catch(error){
      toast("error logging out")
      console.log(error)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrlActive)
    return () => {
      window.removeEventListener("scroll", scrlActive)
    }
  }, [])
  return (
    <div className={active || pathname !== "/" ? "nav-container active" : "nav-container"}>
      <ToastContainer></ToastContainer>
      <div className="container">
        <div className="top-container">
          <div className="leftbar">
            <Link to="/">
              <span>Musaa</span>
            </Link>
            <span>.</span>
          </div>
          <div className="rightbar">
            <span>Musaa Business</span>
            <span>Explore</span>
            <span>English</span>
            {currentUser && (!currentUser.isSeller && <span>Become a Seller</span>)}
            {!currentUser && <span><Link to="/login">Sign in</Link></span>}
            {!currentUser ? (
              <button className={active && "cta"}><Link to="/register">Join</Link></button>
            ) : (
              <div className="user-info">
                <img src={currentUser.avatar || Musa} alt="user-prof" />
                <span
                  onClick={() => {
                    setShowOption(!showOption)
                  }}
                >
                  {currentUser.username}
                </span>
                {showOption && (
                  <div className="user-option">
                    {currentUser.isSeller && (
                      <Link to="/mygig/1" onClick={()=>{setShowOption(false)}}>
                        <span>Gigs</span>
                      </Link>
                    )}
                    {currentUser.isSeller && (
                      <Link to="/add/1" onClick={()=>{setShowOption(false)}}>
                        <span>Add new Gigs</span>
                      </Link>
                    )}
                    <Link to="/order/1" onClick={()=>{setShowOption(false)}}>
                      <span>Order</span>
                    </Link>
                    <Link to="/messages/1" onClick={()=>{setShowOption(false)}}>
                      <span>Messages</span>
                    </Link>
                    <Link onClick={handleLogout}>
                      <span>Logout</span>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <hr />
        {(active || pathname !== "/") && (
          <div className="bottom-container">
            <span>Graphic & Design</span>
            <span>Video & Animation</span>
            <span>Writting & Translation</span>
            <span>All Services</span>
            <span>Digital Marketing</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Business</span>
            <span>Lifestyle</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
