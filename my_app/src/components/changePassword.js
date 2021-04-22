import React, { useState } from 'react';
import { BrowserRouter as Router,Route,Link, NavLink , Switch, Redirect} from "react-router-dom";
import ReactDOM from 'react-dom';
import Users from './Users'


const Changepassword = () => {
  const [email, setEmail] = useState("Karthik Kalyanapu");
  const [newPassword, setNewPassword] = useState(" ");
  
  const [allEntry, setNewEntry] = useState([]);

  const submitForm=(e) =>{
    e.preventDefault();
     const name = "hello";
    // console.log(name);
     return name;
     
  
  }
 
  return (
    <div style={{margin:"70px", textAlign:"center" }}>
       <form action="" onSubmit={submitForm}>
          <div>
            <label htmlFor="email" style={{'padding':'10px','font-size':'20px','paddingLeft':'40px'}}>Username:</label>
            <input type="text" name="email" id="email" 
             style={{'border':'none','font-size':'20px'}}
            value={email} 
            required
          //  onChange={(e) => setEmail(e.target.value) } 
          />
          </div>
          <div>
            <label htmlFor="password" style={{'padding':'10px','font-size':'20px'}}>New Password:</label>
            <input type="password" name="password" id="password" 
             style={{'border':'none','font-size':'20px'}}
        //    value={password}
            required
            //onChange={(e) => setPassword(e.target.value)}
             />
          </div>
          <div style={{textAlign: 'center',marginRight:'70px'}}>
          <button type="submit" style={{margin:'10px',padding:'3px',fontWeight:'600'}}>Save Password</button>

         <button type="submit" style={{margin:'10px',padding:'3px',fontWeight:'600',width:'10%'}}>Logout</button></div>
          
        </form>
      </div>
   
   
 
  )


}

export default Changepassword;
