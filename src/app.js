import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home/home.js"
import Erroe from "./Pages/Errorpage"
import Hotels from "./Pages/Hotel/hotels.js"
import Hotel from "./Pages/Singlehotel/Singlehotel"
import Login from "./Pages/loginpage/loginpage.js"

import {useContext, createContext } from 'react'

 export let context =createContext()

const App =()=>

{
    return( <context.Provider value={{}}>
        <BrowserRouter>
        <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path ="/hotels" element={<Hotels/>}/>
            <Route path ="/hotel/:id" element={<Hotel/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path ="*" element={<Erroe/>}/>
        </Routes>
        </BrowserRouter>
        </context.Provider>
    )
}

export default App