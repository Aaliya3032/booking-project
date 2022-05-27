import React from 'react'
import "./featured.css"

const Featured = () => {
  return (
    <div className='featured'>
    <div className='featuredItem'>
    <img
    src='https://cdn.pixabay.com/photo/2018/02/17/22/15/water-3161063_960_720.jpg'
    alt=''
    className='featuredImg'
    />
    <div className='featuredTitles'>
    <h1>Dublin</h1>
    <h2>123 properties</h2>
    </div>
    </div>
    <div className='featuredItem'>
    <img
    src='https://cdn.pixabay.com/photo/2016/03/29/13/34/bruges-1288281_960_720.jpg'
    alt=''
    className='featuredImg'
    />
    <div className='featuredTitles'>
    <h1>Austin</h1>
    <h2>235 properties</h2>
    </div>
    </div>
    <div className='featuredItem'>
    <img
    src='https://cdn.pixabay.com/photo/2018/12/14/10/23/iceland-3874707_960_720.jpg'
    alt=''
    className='featuredImg'
    />
    <div className='featuredTitles'>
    <h1>reno</h1>
    <h2>533 properties</h2>
    </div>
    </div>
    </div>
  )
}

export default Featured
