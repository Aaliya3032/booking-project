import React from 'react'
import "./searchItem.css"
import { useNavigate } from 'react-router-dom';

const SearchItem = () => {
  const navigate = useNavigate();
  return (
    <div className='searchItem '>
      <img className='siImg' src='https://media.istockphoto.com/photos/happy-waiter-serving-food-to-group-of-friends-in-a-pub-picture-id1307190527?b=1&k=20&m=1307190527&s=170667a&w=0&h=_GZiHqd9mIhvg_tMT-VwIGlPDeZUY6zUorx5XvQM358=' alt=''/>
      <div className='siDesc'>
      <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className='siDetails'>
      <div className='siRating'>
      <span>Excellent</span>
      <button>8.9</button>
      </div>
      <div className='siDetailTexts'>
      <span className='siPrice'>$123</span>
      <span className='siTaxOp'>Include Taxes and Fees</span>
      <button className='siCheckButton' onClick={()=>navigate("/hotels/:id")}>See Availability</button>
      </div>
      </div>
    </div>
  )
}

export default SearchItem
