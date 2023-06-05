import React, { useRef, useState } from "react"
import "./gig.scss"
import { useLocation } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import newRequest from "../../utils/newRequest"
import GigData from "../../Components/GigData/GigData"

function Gig() {
  const [viewSort, setViewSort] = useState(false)
  const [sort, setSort] = useState("Newest")
  const {search} = useLocation()
  const minRef = useRef()
  const maxRef = useRef()

  const { isLoading: gigPending, error:gigError, data:gigData, refetch: refetchGig } = useQuery({
    queryKey: ['gigData'],
    queryFn: () => newRequest.get(`/gig/all?${search}&min=${minRef.current.value}&max=${maxRef.current.value}`).then((res)=>{
      return res.data
    }),
  });
  const handleApply = (e)=>{
    e.preventDefault()
    refetchGig()
  }

  return (
    <div className="gigpage">
      <div className="gigpage-container">
        <h2>MUSAA > GRAPHIC DESIGN > </h2>
        <h1>AI Artist</h1>
        <h3>Explore the boundaries of AI and art with Musaa AI artist</h3>
        <div className="barner">
          <div className="left-barner">
            <form onSubmit={handleApply}>
            <span>Budget</span>
            <input type="text" ref={minRef} placeholder="Min" />
            <input type="text" ref={maxRef} placeholder="Max" />
            <button>Apply</button>
            </form>
          </div>
          <div className="right-barner">
            <h3>Sort By:</h3>
            <h2
              onClick={() => {
                setViewSort(!viewSort)
              }}
            >
              {sort}
            </h2>
            {viewSort && (
              <div className="sort-item">
                {sort === "Best Selling" ? <span
                  onClick={() => {
                    setSort("Newest")
                    setViewSort(!viewSort)
                  }}
                >
                  Newest
                </span> :
                <span
                  onClick={() => {
                    setSort("Best Selling")
                    setViewSort(!viewSort)
                  }}
                >
                  Best Selling
                </span>}
              </div>
            )}
          </div>
        </div>
        <div className="category-display">
          {gigPending ? 'Loading' : gigError ? 'Something Went Wrong' : gigData.map((item) => {
            return (
              <GigData item={item}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Gig
