import React, { useState } from "react"
import "./register.scss"
// import Img1 from "../../Assets/apple3.png"
import newRequest from "../../utils/newRequest"
import { ToastContainer, toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"
import upload from "../../utils/upload"
function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    profile: "",
    is_seller: false,
    phone_number: "",
    desc: ""
  })
  const [file, setFIle] = useState("")
  const [profileHolder, setProfileholder] = useState("")
  const navigate = useNavigate()
  const handleSubmit = async(e)=>{
    e.preventDefault()
    if (!(user.username && user.email && user.password && user.desc && user.phone_number)){
      toast("Please provide all information")
      return
    }
    try {
      const url = await upload(file)
      await newRequest.post("/auth/register", {...user, profile: url})
      toast("Registration successfull")
      navigate("/login")
    } catch (error) {
      toast("Error creating profile")
      console.log(error)
    }
  }
  const handleImage = (e)=>{
    const theFile = e.target.files[0]
    setFIle(theFile)
    setProfileholder(URL.createObjectURL(e.target.files[0]))
    setUser({...user, profile: e.target.value})
  }
  return (
    <div className="register-container">
    <ToastContainer></ToastContainer>
      <div className="register">
        <form onSubmit={handleSubmit}>
        <div className="form-left">
        <div className="form-data">
          <label htmlFor="username">Username</label>
          <input name="username" value={user.username} placeholder="username" type="text" onChange={(e=>{
            setUser({...user, username: e.target.value})
          })}/>
        </div>
        <div className="form-data">
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="email" value={user.email} type="email" onChange={(e)=>{setUser({...user, email: e.target.value})}}/>
        </div>
        <div className="form-data">
          <label htmlFor="password">Password</label>
          <input name="password" value={user.password} placeholder="password" type="text" onChange={(e)=>{
            setUser({...user, password: e.target.value})
          }}/>
        </div>
        <div className="form-data">
          <label htmlFor="country">Country</label>
          <input name="country" value={user.country} placeholder="country" type="text" onChange={(e)=>{
            setUser({...user, country: e.target.value})
          }}/>
        </div>
        <div className="form-data toggle">
          <label htmlFor="profile">
            {profileHolder ? <img src={profileHolder} alt="prof"/> : <p>Your Image</p>}
          </label>
          <input name="profile" placeholder="profile" type="file" onChange={handleImage}/>
        </div>
        <span>Already a member? <Link to="/login"> Login</Link></span>
        <button>Register</button>
        </div>
        <div className="form-right">
          <h3>I want to become a seller</h3>
          <div className="form-data toggle">
          <label htmlFor="is_seller">Activate the seller account</label>
          <input name="is_seller" value={user.is_seller} type="checkbox" onChange={(e)=>{
            setUser({...user, is_seller: e.target.checked})
          }}/>
        </div>
        <div className="form-data">
          <label htmlFor="phone_number">Profile</label>
          <input name="phone_number" value={user.phone_number} placeholder="phone" type="text" onChange={(e)=>{
            setUser({...user, phone_number: e.target.value})
          }}/>
        </div>
        <div className="form-data">
          <label htmlFor="desc">Description</label>
          <textarea name="desc" value={user.desc} placeholder="profile" type="text" onChange={(e)=>{
            setUser({...user, desc: e.target.value})
          }}/>
        </div>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Register
