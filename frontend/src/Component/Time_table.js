import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./Time.css"
import { Modal } from 'antd';
// import { Link } from 'react-router-dom';

function Time_table() {
  const [time, setTime] = useState("Time");
  const array=["day",1,2,3,4,5,6,7,8];


  setTimeout(()=>{
    setTime(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
  },1000)

  // useEffect(() => {
  //   const timerInterval = 10000; // 10 seconds
  //   let a=0;
  //   const recurringFunction = () => {
  //     if(a<4){
  //     message();
  //     setTimeout(recurringFunction, timerInterval);
  //     }
  //     a++;
  //   };
  //   recurringFunction();
  //   return () => clearTimeout(timerInterval);
  // }, []);
  const [pop,setPop]=useState(false)
  const change=(name,subject,email)=>{
    setPop(!pop);
    setName(name)
    setSubject(subject)
    setEmail(email)
  }
  const update =async(e)=>{
    e.preventDefault();
    const response=await axios.put("http://localhost:8080/mail/update",{name,subject,email})
    change();
  }

  const data = {
    "email":"agilkumar995@gmail.com"
  }

  const [content, setContent] = useState([])
  const message = async () => {
    try {
      const response = await axios.post("http://localhost:8080/mail/get", data)
      console.log("Response data:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
   const getAllData = async () => {
      const response = await axios.get("http://localhost:8080/mail/getValue")
      .then((response) => (setContent(response.data)))
      .catch((err) => console.log(err))
   }
   useEffect(() => {
    getAllData();
   },[])
   const [name,setName]=useState();
   const [subject,setSubject]=useState();
   const [email,setEmail]=useState();
  //  console.log(name);

  return ( 
    <div>
   

      <h2 align="center" onClick={message}>{time}</h2>
      <div className='table_container'>
        
      <table border={1} className='table'>
        <tr>
         {array.map((f)=>(
              <th key={f}>{f}</th>
         ))}
        </tr>
        <tr>
        {content.map((data,index) => ( 
             <td key={index} onClick={()=>change(data.name,data.subject,data.email)}>Faculty : {data.name}<br></br>Subject : {data.subject}</td>
          ))}
        </tr>
      </table>
      </div>
      {pop &&(
        <div className='model'>
        <div className='overlay'></div>
        <div className='model_contain'>
          <h1>Change the period</h1>
         Name : <input
                   type='text'
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                  />
         Subject : <input
                      type='text'
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
          <button onClick={change}>close</button>
          <button onClick={update}>submit</button>
        </div> 
          
      </div>

      )}
      
     
    </div>
  );
}

export default Time_table;
