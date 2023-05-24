import Gigs from "../Gigs/Gigs"
import "./slide.scss"
import Slider from 'infinite-react-carousel'

const Slide = ({children, slidesToShow, arrowScroll})=>{
  return(<div className="slide">
  <div className="slide-container">
    <Slider slidesToShow={slidesToShow} arrowScroll={arrowScroll}> 
          {children}
    </Slider>
  </div>
  </div>)
}

export default Slide