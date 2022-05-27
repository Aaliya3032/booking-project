import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Header from '../../component/header/Header'
import MailList from '../../component/mailList/MailList'
import Footer from '../../component/footer/Footer'
import { faCircleXmark, faLocationDot ,faCircleArrowLeft,faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import "./hotel.css"
import { useState } from "react";
const Hotel = () => {


  const [slideNumber,setSlideNumber]=useState(0);
  const [open,setOpen]=useState(false);

  const photos = [
    {
      src:"https://cdn.pixabay.com/photo/2014/04/16/22/21/capri-325943__340.jpg",
    },
    {
      src:"https://media.istockphoto.com/photos/cozy-restaurant-for-gathering-with-friends-picture-id1159992039?k=20&m=1159992039&s=612x612&w=0&h=t2lqevaWYLXvcjDeKzbHvIRF6GE3gxiqO6AIezr3Mws=",
    }, {
      src:"https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071__340.jpg",
    }, {
      src:"https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602__340.jpg",
    }, {
      src:"https://cdn.pixabay.com/photo/2014/05/18/19/15/walkway-347319__340.jpg",
    }, {
      src:"https://cdn.pixabay.com/photo/2017/06/25/08/07/sunbeds-2439951__340.jpg",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) =>{
    let newSlideNumber;

    if(direction==="l"){
      newSlideNumber= slideNumber === 0 ? 5 : slideNumber - 1; 
    }else{
      newSlideNumber= slideNumber === 5 ? 0 : slideNumber + 1; 
    }
    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
    <Navbar/>
    <Header type="list"/>
    <div className='hotelContainer'>
    {open && (<div className='Slider'>
    <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)} />
    <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow'
    onClick={()=>handleMove("l")}
    />
    <div className='sliderWrapper'>
    <img src={photos[slideNumber].src} alt='' className='sliderImg'/>
    </div>
    <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' 
    onClick={()=>handleMove("r")}
    />
    </div>)}
      <div className='hotelWrapper'>
      <button className='bookNow'>Reserve or Book Now</button>
      <h1 className='hotelTitle'>Grand Hotel</h1>
      <div className='hotelAddress'>
      <FontAwesomeIcon icon={faLocationDot}/>
      <span>Elton St New York</span>
      </div>
      <span className='hotelDistance'>
      Excellent Location - 500 from center
      </span>
      <span className='hotelPriceHighlight'>
      Book a stay over $114 at this property and get a free airport taxi
      </span>
      <div className='hotelImages'>
      {photos.map((photo,i)=>(
       <div className='hotelImgWrapper' key={i}>
       <img
       src={photo.src}
       alt=''
       onClick={()=>handleOpen(i)}
       className='hotelImg'
       />
       </div>
      ))}
      </div>
      <div className='hotelDetails'>
      <div className='hotelDetailsTexts'>
      <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
      </div>
      <div className='hotelDetailsPrice'>
      <h1>Perfect for a 9-night stay!</h1>
      <span>
    Located in the real heart of Krakow, this property has an
    excellent location score of 9.8!
    </span>
   <h2>
   <b>$945</b> (9 nights)
   </h2>
   <button>Reserve or Book Now!</button>
      </div>
      </div>
      </div>
      <MailList/>
      <Footer/>
    </div>
    </div>
  )
}

export default Hotel
