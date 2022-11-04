import React, { useContext, useState } from 'react'
import Navbar from "../../Components/Navbar/Navabr"
import Header from "../../Components/header/header.jsx"
import Singlehoteli from '../../Components/singlepage/singlehotel'
import "./singlihotel.css"
import Email from '../../Components/Email/email'
import Footer from '../../Components/footer/footer'

import {context} from "../../app.js"
function Singlehotel() {
 
  
  return (
    <div>
     <Navbar/>
     <Header type="list"/>
     <div className='singli'>
     <Singlehoteli />
     </div>
     <Email/>
     <Footer/>
    </div>
  )
}

export default Singlehotel
