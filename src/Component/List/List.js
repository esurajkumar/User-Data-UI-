import React, { useEffect } from 'react';
import "./List";
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";





function List() {

    const navigatingToUpdate = useNavigate();

let[ getData , setGetData] = useState([]);

useEffect( ()=> {
    getApi();
}   , []);


    const getApi = () => {
        axios.get("http://localhost:9090/getUserData")
            .then(
                (res) => { 
                    console.log(res.data);  
                    setGetData(res.data);   }
            )
            .catch(
                (error) => { 
                    console.log(error); alert("Error!");    }
            )
    };
    let int = 0;

    return (

        

        <div>

<br/> <br/> <br/>
           
            {/* <button style={{ "background": "lightgreen" }} onClick={getApi}>Get Data</button> */}


            {/* //creating table */}
            <table className="table table-hover" >

                   {/* table head */}
                <thead className="table-dark text-white">

                    <tr>
                        <th>Serial No</th>
                        <th>Identity</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Password</th>
                      
                    </tr>

                </thead>

 {/* table body */}
                <tbody>
                    {getData.length > 0  &&  getData.map ( (element, index) => { 
                        return (  

 
                            <tr key={element.id}>

                                <td> {int += 1} </td>
                                <td> {element.id} </td>
                                <td> {element.firstName} </td>
                                <td> {element.lastName} </td>
                                <td> {element.phone} </td>
                                <td> {element.dob} </td>
                                <td> {element.gender} </td>
                                <td> {element.email} </td>
                                <td> {element.password} </td>
                                
                            </tr>

                        );



                     })}

                </tbody>

            </table>

            <button className='btn  btn-outline-primary' onClick={() => {navigatingToUpdate("/update")}}>Update List</button>

        </div>
    );
};

export default List;