import React, { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import userActionCreator from "../Redux/UserActionCreator"
import myStore from "../Redux/Store"



function Update() {

const navigatingToEdit = useNavigate();

let[ getData , setGetData] = useState([]);

//Redux
// const sendData = () => {
//     var actionObject = userActionCreator(getData);

//     myStore.dispatch(actionObject)
// };




useEffect( ()=> {
    getApi();
    
} , []);

 
let int = 0;


    const getApi = () => {
        axios.get("http://localhost:9090/getUserData")
            .then(
                (res) => { 
                    console.log(res.data);  
                    setGetData(res.data);

                    // Redux
                    var actionObject = userActionCreator(res.data);
                    myStore.dispatch(actionObject);
                    
                      }
            )
            .catch(
                (error) => { 
                    console.log(error); 
                    alert("Error!");    }
            )
    };
   
const deleteApi = (id) => {
    axios.delete(`http://localhost:9090/deleteUserData?id=${id}`)
    .then( 
        (res) => {
            console.log(res.data);
             setGetData(res.data);
            alert("Deleted!");
        }

    )
    .catch(
        (error) => { 
            console.log(error); 
            alert("Error while Deletion!");    }
    )

};

    return (

        

        <div>

<br/> <br/> <br/>
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
                        <th colSpan={2}>Action</th>
                      
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
                                <td> <button className='btn  btn-outline-primary' onClick={() => { 
                                navigatingToEdit(`/edit?id=${element.id}`) ; }}>Update</button> </td>
                                <td> <button className='btn  btn-outline-secondary'  onClick={() => {deleteApi(element.id);}}>Delete</button> </td>
                                
                            </tr>


                        );



                     })}

                </tbody>

            </table>

        </div>
    );
};

export default Update;