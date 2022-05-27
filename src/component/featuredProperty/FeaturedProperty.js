import React from 'react'
import "./featuredProperty.css"

const FeaturedProperty = () => {
  return (
    <div className='fp'>
    <div className='fpItem'>
    <img
    className='fpImg'
    src='https://cdn.pixabay.com/photo/2016/11/18/22/21/restaurant-1837150__340.jpg'
    alt=''
    /> 
    <span className='fpName'>Aparthotel Stare Miasto</span>
    <span className='fpCity'>Madrid</span>
    <span className='fpPrice'>Starting from $120</span>
    <div className='fpRating'>
    <button>8.9</button>
    <span>Excellent</span>
    </div> 
    </div>
    <div className='fpItem'>
    <img
    className='fpImg'
    src='https://cdn.pixabay.com/photo/2016/11/17/09/28/hotel-1831072__340.jpg'
    alt=''
    /> 
    <span className='fpName'>Aparthotel Stare Miasto</span>
    <span className='fpCity'>Madrid</span>
    <span className='fpPrice'>Starting from $120</span>
    <div className='fpRating'>
    <button>8.9</button>
    <span>Excellent</span>
    </div> 
    </div>
    <div className='fpItem'>
    <img
    className='fpImg'
    src='https://cdn.pixabay.com/photo/2014/07/10/17/17/hotel-389256__340.jpg'
    alt=''
    /> 
    <span className='fpName'>Aparthotel Stare Miasto</span>
    <span className='fpCity'>Madrid</span>
    <span className='fpPrice'>Starting from $120</span>
    <div className='fpRating'>
    <button>8.9</button>
    <span>Excellent</span>
    </div> 
    </div>
    <div className='fpItem'>
    <img
    className='fpImg'
    src='https://cdn.pixabay.com/photo/2018/08/06/19/49/design-3588214__340.jpg'
    alt=''
    /> 
    <span className='fpName'>Aparthotel Stare Miasto</span>
    <span className='fpCity'>Madrid</span>
    <span className='fpPrice'>Starting from $120</span>
    <div className='fpRating'>
    <button>8.9</button>
    <span>Excellent</span>
    </div> 
    </div>
    </div>
  )
}

export default FeaturedProperty
