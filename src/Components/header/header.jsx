import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBed, faCalendar, faCar, faFaceDizzy, faPlane, faTaxi, faTimeline, faUser}  from "@fortawesome/free-solid-svg-icons"
import "./header.css"
import {useState} from "react"
import { useNavigate } from 'react-router-dom'

function Header(props) {

let navigate = useNavigate()

 
    
    let type = props.type;
    let [place,setPlace]=useState("")
    let [people,setPeople] = useState(
        {
            Adult:2,
            Childres:0,
            Room:1
        }
    )
 
    let checkpeople=(peoples,action)=>
{
setPeople((prev)=>
{

    return {
        ...prev,[peoples]:action==="i" ? people[peoples]+1 :people[peoples]-1
    }
})
}

// suubmit button
let submitbtn=()=>
 {
navigate("/hotels",{state:{people:people,place:place}})
 }



    let [flag,setFlag] = useState(false)

  return (
    <div className='header'>
      <div className="headerlist">
        <div className="headerliitems active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
        </div>
        <div className="headerliitems">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
        </div>
        <div className="headerliitems">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
        </div>
        <div className="headerliitems">
            <FontAwesomeIcon icon={faFaceDizzy} />
            <span>Attractions</span>
        </div>
        <div className="headerliitems">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
        </div>
      </div>

     {type!=="list" && <div className="description">
        <h1>A lifetime of discounts? it's Genius</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id fugiat cumque incidunt consequatur rem accusamus recusandae aut magni repudiandae eveniet?</p>
        <button className="descbutton" onClick={()=>{navigate("/login")}}>Sign in/Register</button>

        <div className="Searchbar">
            <div className="destport  yellobg">
            <FontAwesomeIcon icon={faBed}/><input type="text" placeholder= "where are you going to?" onChange={(e)=>{
                setPlace(e.target.value) 
                }}/> 
            </div >
            <div className="checkindate yellobg">
            <FontAwesomeIcon icon={faCalendar}/>
            <p>check in date - check out date</p>
            </div>



            {/* peopleeeee */}
            <div className="people yellobg"  >
            <div className="peeps" onClick={()=>
            {
                setFlag(!flag)
            }}>
            <FontAwesomeIcon icon={faUser}/>
            <p>{people.Adult} adults . {people.Childres} childern . {people.Room} room </p>
            </div>

           { flag && <div className="setpeople">

                <div className="Adult  setpeps">
                    <h4>Adult</h4>
                    <div className="buttonset">
                    
                    <button className='set' onClick={()=>
                    {
                        checkpeople("Adult","i")
                    }}>+</button>
                    <p>{people.Adult}</p>
                    <button className='set' onClick={()=>
                    {
                        checkpeople("Adult","d")
                    }}>-</button>
                </div>
                </div>
                <div className="children setpeps">
                <h4>Children</h4>
                <div className="buttonset">
                    
                    <button className='set' onClick={()=>
                    {
                        checkpeople("Childres","i")
                    }}>+</button>
                    <p>{people.Childres}</p>
                    <button className='set'  onClick={()=>
                    {
                        checkpeople("Childres","d")
                    }}>-</button>
                </div>
                </div>
                <div className="room setpeps">

                <h4>Room</h4>
                <div className="buttonset">
                    
                    <button className='set'  onClick={()=>
                    {
                        checkpeople("Room","i")
                    }}>+</button>
                    <p>{people.Room}</p>
                    <button className='set'  onClick={()=>
                    {
                        checkpeople("Room","d")
                    }}>-</button>
                </div>
                </div>
            </div>
            }
            </div>
            <button className="search yellobg" onClick={()=>
            {
                submitbtn()
            }}>
                Search
            </button>
        </div>
      </div>}

    </div>
  )
}

export default Header
