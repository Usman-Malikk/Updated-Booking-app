import React from 'react'
import Navbar from "../../Components/Navbar/Navabr"
import Header from "../../Components/header/header"
import Search from '../../Components/Searchhome/search'
import './extrahome.css'
import Homelist from '../../Components/Homelist/homelist'
import { useLocation } from 'react-router-dom'
import { useContext ,useState } from 'react'
import {context} from "../../app.js"

function Hotels() {
  let all = useContext(context) 
  let [search,setSearch] = useState('')
  all.search=search

  return (
    <div>
     <Navbar/>
    <Header type="list"/>
    <div className='Searchhotels'>
      <div className='seachandhotel'>
      <Search setSearch={setSearch}/>
      <Homelist/>
      </div>
    </div>

  
    </div>
  )
}

export default Hotels
