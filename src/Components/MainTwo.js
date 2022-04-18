import React from 'react'
import Top from './Top'
import Search from './Search'
import Category from './Category'
import Banner from './Banner'
import CardDetail from './CardDetail'
import Footer from './Footer'
import banner from '../images/banner.PNG'

const MainTwo = () => {
  return (
    <div className="container-fluid">
      <div className="fixedDiv">
      <Top />
      <Search />
      <Category />
      </div>
      <Banner />
      <h1 className="h1">Fresh recommendations</h1>
      <CardDetail />
      <div className="banner-2">
        <img src={banner}></img>
      </div>
      <Footer />
      <div className="footer-last">
        <h2>Free Classifieds in Pakistan . © 2006-2022 OLX</h2>
      </div>
    </div>
  )
}

export default MainTwo