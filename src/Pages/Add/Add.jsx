import React from "react"
import "./add.scss"

function Add() {
  return (
    <div className="add">
      <div className="add-container">
        <div className="left-add">
          <label>Title</label>
          <input type="text" />
          <label>Category</label>
          <input type="text" />
          <label>Upload Image</label>
          <input type="file" />
          <label>Cover Image</label>
          <input type="file" />
          <label>Description</label>
          <textarea type="text" />
          <button>Create</button>
        </div>
        <div className="right-add">
          <label>Service Title</label>
          <input type="text" />
          <label>Short Description</label>
          <textarea type="text" />
          <label>Delivery (e.g 2-3days) </label>
          <input type="text" />
          <label>Revision Number</label>
          <input type="text" />
          <label>Add Feature</label>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <label>Price</label>
          <input type="text" />
        </div>
      </div>
    </div>
  )
}

export default Add
