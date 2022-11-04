import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import {faFacebook}  from "@fortawesome/free-solid-svg-icons"
import Instapic from "../Images/instagram.svg"
import FB from "../Images/facebook.svg"
import Yt from "../Images/youtube.svg"
import "./follow.css"

function Follow() {
  return (
    <div className='follow'>
        <div className="followpage">
      <hr/><p>Follow us for updates</p><hr/>
        </div>
        <div className="imagesslink">
           <div className="licont"><img src={Instapic} alt="" /></div>
           <div className="licont"><img src={FB} alt="" /></div>
           <div className="licont"><img src={Yt} alt="" /></div>
        </div>
    </div>
  )
}

export default Follow
