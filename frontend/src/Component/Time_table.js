
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./Time.css"
function Time_table() {
  const [time, setTime] = useState("");
  const array = [ 1, 2, 3, 4, 5, 6, 7, 8];
  const [pop, setPop] = useState(false);
  const [name, setName] = useState();
  const [subject, setSubject] = useState();
  const [email, setEmail] = useState();
  const data = {
    "email": "agilkumar995@gmail.com"
  };
  const [content, setContent] = useState([]);
  const array_name=[];
  

  useEffect(() => {
    const timerInterval = 1000; // 1 second

    const recurringFunction = () => {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();
      setTime(`${hours}:${minutes}:${seconds}`);
      if (hours === 8 && minutes === 30 && seconds === 0) {
        message();
      }
      if (hours === 9 && minutes === 20 && seconds === 0) {
        message();
      }
      if (hours === 10 && minutes === 30 && seconds === 0) {
        message();
      }
      if (hours === 11 && minutes === 20 && seconds === 0) {
        message();
      }
      if (hours === 12 && minutes === 50 && seconds === 0) {
        message();
      }
      if (hours === 1 && minutes === 40 && seconds === 0) {
        message();
      } if (hours === 2 && minutes === 45 && seconds === 0) {
        message();
      } if (hours === 3 && minutes === 35 && seconds === 0) {
        message();
      }
      setTimeout(recurringFunction, timerInterval);
    };

    recurringFunction();

    return () => {
      // Clear the timer when the component unmounts
      clearTimeout(timerInterval);
    };
  }, []);

  const change = (name, subject, email) => {
    setPop(!pop);
    setName(name);
    setSubject(subject);
    setEmail(email);
  };

  const update = async (e) => {
    e.preventDefault();
    const response = await axios.put("http://localhost:8080/mail/update", { name, subject, email });
    change();
  };

  const message = async () => {
    try {
      const response = await axios.post("http://localhost:8080/mail/get", data);
      console.log("Response data:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getAllData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/mail/getValue");
      setContent(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);


  return (
    <div>
       <h2 align="center" onClick={message}>{time}</h2>
             <div className='title'>
                  <h1>College Name</h1>
                  <h2>Address of the College</h2>
              </div>
      
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
                        {/* Name : <input
                                  type='text'
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                  /> */}
                                  NAME : <select onChange={(e) => setName(e.target.value)}>
                                    {content.map((data,index)=>(
                                      <option key={index}  >{data.name}</option>
                                    ))}
                                  </select>
                                  SUBJECT : <select onChange={(e) => setSubject(e.target.value)}>
                                    {content.map((data,index)=>(
                                      <option key={index}  >{data.subject}</option>
                                    ))}
                                  </select>
                        {/* Subject : <input
                                      type='text'
                                      value={subject}
                                      onChange={(e) => setSubject(e.target.value)}
                                    /> */}
                          <button onClick={change}>close</button>
                          <button onClick={update}>submit</button>
                   </div> 
          </div>
        
             )}
        </div>
  )
}


export default Time_table;
