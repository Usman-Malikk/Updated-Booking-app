import React from 'react'
import "./toprating.css"

function Toprating() {
  return (
    <div className='Toprate'>
     <div className='tophotels'>
        <h1>Top rated hotels!</h1>
        <div className='tophotelitems'>
            <div className='Hoteltop'>
                    <img src='https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='Top rated hotel pic'/>
                    <div className='Hotdesctop'>
                        <h3>Hotel Name</h3>
                        <p>City</p>
                        <p>Price</p>
                        <div className='Rating'>
                            <span className='num'>10.0</span>
                            <span>Excellent</span>
                        </div>
                    </div>
            </div>
            <div className='Hoteltop'>
                    <img src='https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='Top rated hotel pic'/>
                    <div className='Hotdesctop'>
                        <h3>Hotel Name</h3>
                        <p>City</p>
                        <p>Price</p>
                        <div className='Rating'>
                            <span className='num'>10.0</span>
                            <span>Excellent</span>
                        </div>
                    </div>
            </div>
            <div className='Hoteltop'>
                    <img src='https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='Top rated hotel pic'/>
                    <div className='Hotdesctop'>
                        <h3>Hotel Name</h3>
                        <p>City</p>
                        <p>Price</p>
                        <div className='Rating'>
                            <span className='num'>10.0</span>
                            <span>Excellent</span>
                        </div>
                    </div>
            </div>
            <div className='Hoteltop'>
                    <img src='https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='Top rated hotel pic'/>
                    <div className='Hotdesctop'>
                        <h3>Hotel Name</h3>
                        <p>City</p>
                        <p>Price</p>
                        <div className='Rating'>
                            <span className='num'>10.0</span>
                            <span>Excellent</span>
                        </div>
                    </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Toprating
