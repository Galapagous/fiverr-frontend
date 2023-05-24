import React, { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./login.scss"
import newRequest from "../../utils/newRequest";
import {Link, useNavigate} from "react-router-dom"
import Community from "../../Assets/pix.jpg"

function Login() {
  const [error, setError] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate= useNavigate()
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const formData = {
      username: username,
      password: password
    }
    try {
      const fetchUser = await newRequest.post("/auth/login", formData)
      localStorage.setItem("currentUser", JSON.stringify(fetchUser.data))
      toast("Successfully logged in")
      navigate("/")
    } catch (error) {
      toast("Error submitting from")
      setError(error.response.data)
    }
    setUsername("")
    setPassword("")
  }
  return (
    <div className="login-container">
    <ToastContainer></ToastContainer>
      <div className="login">
        <form onSubmit={handleSubmit}>
        <div className="form-left">
        <div className="form-data">
          <label htmlFor="username">Username</label>
          <input name="username" placeholder="username" 
          type="text" 
          value={username}
          onChange={(e)=>{setUsername(e.target.value)}}
          />
        </div>
        <div className="form-data">
          <label htmlFor="password">Password</label>
          <input name="password" placeholder="password"
           type="text" 
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
           />
        </div>
        <div className="down">
        {error && <p>{error}</p>}
        <span>Not a member yet? <Link to="/register"> Register</Link></span>
        <button>Login</button>
        </div>
        </div>
        <div className="form-right">
          <img src={Community} alt="community"/>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login
