import React from 'react'
import Follow from '../../Components/followlinks/follow'
import Login from '../../Components/login/login'
import Navabr from '../../Components/Navbar/Navabr'

import "./loginpage.css"


function Loginpage() {
  return (
    <div>
      <Navabr loginsec="false"/>
    <div className='login'>
        <Login/>
        <Follow/>
    </div>
    </div>
  )
}

export default Loginpage
