import React from "react"
import { Link } from "react-router-dom"
import "./mygig.scss"
import Imag from "../../Components/Assets/img7.jpg"
import Pinterest from "../../Components/Assets/pinterest.png"

function Mygig() {
  return (
    <div className="mygig">
      <div className="mygig-container">
        <div className="title">
          <h1>Gig</h1>
          <Link to="/add/1">Add New Gig</Link>
        </div>
        <div className="gig-table">
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>
                <img className="item" src={Imag} alt="item" />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>120</td>
              <td>
                <img className="delete" src={Pinterest} alt="delete" />
              </td>
            </tr>
            <tr>
              <td>
                <img className="item" src={Imag} alt="item" />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>120</td>
              <td>
                <img className="delete" src={Pinterest} alt="delete" />
              </td>
            </tr>
            <tr>
              <td>
                <img className="item" src={Imag} alt="image" />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>120</td>
              <td>
                <img className="delete" src={Pinterest} alt="delete" />
              </td>
            </tr>
            <tr>
              <td>
                <img className="item" src={Imag} alt="image" />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>120</td>
              <td>
                <img className="delete" src={Pinterest} alt="delete" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Mygig
