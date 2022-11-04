import React from 'react'
import "./email.css"
function Email() {
  return (
    <div className='Emailbox'>
        <div className='mail'>
            <h1>Save time, Save money! </h1>
            <p className='pp'>Sign up and we'll send the best deals to you</p>
            
                <form className='subs'>
                <input type="text" name='email' className='mailtxt' placeholder='Your Email'/>
                <button type="submit">Subscribe</button>
                </form>

        </div>
      
    </div>
  )
}

export default Email
