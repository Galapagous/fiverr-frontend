import React from "react"
import "./messages.scss"
import { Link } from "react-router-dom"

function Messages() {
  const message = `So far, we haven’t done anything that couldn’t be done just as easily without Express,
  but already Express is providing us some functionality that isn’t immediately obvious.
  Remember in the previous chapter how we had to normalize req.url to determine what
  resource was being requested? We had to manually strip off the querystring and the
  trailing slash, and convert to lowercase.`
  return (
    <div className="messages">
      <div className="messages-container">
        <div className="title">
          <h1>Order</h1>
        </div>
        <div className="messages-table">
          <table>
            <tr>
              <th>Buyer</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            <tr className="action">
              <td>Temi Tope</td>
              <td>
                <Link to="/message/1">{message.substring(0, 100)}...</Link>
              </td>
              <td>1 day ago</td>
              <td>
                <button>Mark As Read</button>
              </td>
            </tr>
            <tr className="action">
              <td>Temi Tope</td>
              <td>
                <Link to="/message/1">{message.substring(0, 100)}...</Link>
              </td>
              <td>1 day ago</td>
              <td>
                <button>Mark As Read</button>
              </td>
            </tr>
            <tr>
              <td>Temi Tope</td>
              <td>
                <Link to="/message">{message.substring(0, 100)}...</Link>
              </td>
              <td>1 day ago</td>
              <td></td>
            </tr>
            <tr>
              <td>Temi Tope</td>
              <td>
                <Link to="/message/1">{message.substring(0, 100)}...</Link>
              </td>
              <td>1 day ago</td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Messages
