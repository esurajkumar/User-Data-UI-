import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";

function Navbar (){
    return (
       <div id='nav'  >
        <div className="flexcontainer" style={{width : "30%"}} >

        <Link target="_blank" to="https://www.youtube.com/watch?v=CyqD7mlYxdA" > <h2> User Details</h2></Link>
        </div>

        <div className="flexcontainer" style={{width : "70%"}} >

       <Link to = "/home"> <h3>Home</h3>  </Link> 
       <Link to = "/list"> <h3>List</h3>  </Link> 
       <Link to = "/add">   <h3>Add</h3>  </Link> 
       <Link to = "/update"> <h3>Update</h3>  </Link> 
       <Link to = "/openAIRequest"> <h3>OpenAI</h3>  </Link> 
       <Link to = "/logout"> <h3>Logout</h3>  </Link> 
        </div>
        
       </div>
    
       
    );
};

export default Navbar;