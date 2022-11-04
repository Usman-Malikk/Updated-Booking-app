import React from 'react'
import "./login.css"
import axios from 'axios'
function Login() {
  let logiin=async()=>
  {
    let form=    document.getElementById('formlogin')
    console.log(document.getElementById("Password").value)
   
await axios.post("http://localhost:8800/Auth/login",
{Email:document.getElementById("Email").value,
Password:document.getElementById("Password").value
}).then((res)=>{
  console.log(res.data)

}).catch(e=>{console.log("user not found") })
  }
  return (
    <div className='logincont'>
      <div className="logcenter">
    <h1>Sign in or Create an account</h1>
    <form id='formlogin' onSubmit={(e)=>{ e.preventDefault();logiin()}}>

        
        <label >Email address</label>
        <input type="text" name='Email' id='Email' placeholder='enter your email' />
        <label >password</label>
        <input type="password" name='Password' id='Password' placeholder='enter your password' />
        <button type='submit'>Login</button>
    </form>

      </div>
    </div>
  )
}

export default Login
