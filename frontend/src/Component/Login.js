import React, { useState } from 'react'
import "./Login.css"
import axios from 'axios'
export default function Login() {
    const [info,setInfo]=useState({
        name:"",
        email:"",
        subject:""
    });
      const apply=(data)=>{
        setInfo({
            ...info,
            [data.target.name]: data.target.value
          });
      }
    const login=async()=>{
        
         const response=await axios.post("http://localhost:8080/mail/timetable",info)
        console.log(info.name)
    }
  return (
    <div className='main_login'>
        <div className='login_container'>
            <h1>Login</h1>
        <p className='title_input'>Name</p>
        <input type='text' name='name' placeholder='Name of the faculty' className='info' onChange={(data)=>{apply(data)}}/>
        <p className='title_input'>Email</p>
        <input type='text'name='email' placeholder='Email of faculty' className='info' onChange={(data)=>{apply(data)}}/> 
        <p className='title_input'>Subject</p>
        <input type='text' placeholder='Subject Handle' name='subject' className='info' onChange={(data)=>{apply(data)}}/>
        <button className='buttons_login' onClick={login}>Submit</button>
       <button className='buttons_cancel' >Cancel</button>
        </div>  
    </div>
  )
}
