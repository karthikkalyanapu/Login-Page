import React, { useState } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';



const Form = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const [allEntry, setNewEntry] = useState([]);

  const submitForm=(e) =>{
    e.preventDefault();
    if(email && password){
      const newEntry = {email:email, password:password};
      console.log(email, password);
    props.setUser({email, password});
    setSubmitted(true)
   setNewEntry([...allEntry,newEntry]);
  //  console.log(allEntry)
  console.log(submitted);
   setTimeout(() => {
    setEmail(""); 
    setPassword("");
    setSubmitted(false);
   }, 3000);

    }else{
      setSubmitted(false);
      alert('please fill the data');
    }  
 }
  if(submitted) {
    console.log(submitted);
    return (
      
        <Redirect to='/home' />
    )
  }
  else {
    return (
    <div className="parent">
       <h1>Please Login</h1>
      <div className="child">
       
        <form action="" onSubmit={submitForm}>
          <div style={{paddingBottom:"15px"}}>
            <label htmlFor="email" style={{fontSize:"30px" ,color:"white"}}>Email</label><br />
            <input type="email" name="email" id="email" 
            value={email} 
            required
            onChange={(e) => setEmail(e.target.value) } />
          </div>
          <div>
            <label htmlFor="password"  style={{fontSize:"30px" , color:"white"}}>Password</label>< br />
            <input type="password" name="password" id="password" 
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}   />
          </div>
          <button type="submit" style={{fontSize:"20px" ,marginTop:"20px",paddingLeft:"20px",paddingRight:"20px", backgroundColor:"#2f86ff",color:"white", paddingBottom:"5px"}}>Login</button>
        </form>
      </div>
    </div>
    )
    }
}

export default Form;


