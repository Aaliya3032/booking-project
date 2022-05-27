import React from 'react'
import Featured from '../../component/featured/Featured'
import FeaturedProperty from '../../component/featuredProperty/FeaturedProperty'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import MailList from '../../component/mailList/MailList'
import Navbar from '../../component/navbar/Navbar'
import PropertyList from '../../component/propertyList/PropertyList'
import "./home.css"

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Header/>
    <div className='homeContainer'>
    <Featured/>
    <h1 className='homeTitle'>Browse by Property type</h1>
    <PropertyList/>
    <h1 className='homeTitle'>Homes guests love</h1>
    <FeaturedProperty/>
    <MailList/>
    <Footer/>
    </div>
    </div>
  )
}

export default Home

