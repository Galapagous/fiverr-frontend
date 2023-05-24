import React from "react"
import "./order.scss"
import Imag from "../../Components/Assets/img7.jpg"
import Pinterest from "../../Components/Assets/mess.png"

function Order() {
  const isSeller = true
  return (
    <div className="orders">
      <div className="order-container">
        <div className="title">
          <h1>Order</h1>
        </div>
        <div className="order-table">
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>{isSeller ? "Seller" : "buyer"}</th>
              <th>Message</th>
            </tr>
            <tr>
              <td>
                <img className="item" src={Imag} alt="image" />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>Abdul Waqas</td>
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
              <td>Abdul Waqas</td>
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
              <td>Abdul Waqas</td>
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
              <td>Abdul Waqas</td>
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

export default Order
