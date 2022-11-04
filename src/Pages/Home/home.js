import React, { useContext } from 'react'
import "./home.css"
import Navbar from "../../Components/Navbar/Navabr.jsx"
import Header from "../../Components/header/header.jsx"
import Featured from '../../Components/featured/featured'
import Property from "../../Components/propertytype/propertytype"
import Toprating from '../../Components/toprating/toprating'
import Email from '../../Components/Email/email'
import Footer from "../../Components/footer/footer"
import {context} from "../../app.js"

function home() {
  let all = useContext(context)
  console.log(all.search)
  return (
    <>
  <Navbar/>
  <Header/>
  <div className='Hotellist'>
      <Featured/>
    </div>
    <div className='Property'>
<Property/>
    </div>
    <div className='Topratingg'>
<Toprating/>
    </div>
    <div className='Mailll'>
      <Email/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
    )
}

export default home
