import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function Add() { 
    const navigatingToList = useNavigate();

    let [data, setData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        dob: "",
        gender: "",
        email: "",
        password: "",
    });


    function addData() {
        
        axios.post("http://localhost:9090/createUserData", data)
            .then((res) => {
                console.log(res.data);
                alert("Data Added!")
                navigatingToList("/list")
            })
            .catch((error) => {
                console.log(error);
                alert("Data not Added, Please check!")
            })
    }

    return (

        <div style={{  padding: "50px",width:"500px", textAlign: "centre", margin: "10px auto" }}>
            <h2 className='text-primary'> Add User</h2>

            <div>
           
                <input   
                    onChange={(e) => { setData({ ...data, firstName: e.target.value, }); }}
                    className='form-control' type="text" placeholder='Enter First Name' />
            
                <br />

                

                <input
                    onChange={(e) => { setData({ ...data, lastName: e.target.value, }); }}
                    className='form-control' type="text" placeholder='Enter Last Name' />


                <br />

                <input
                    onChange={(e) => { setData({ ...data, phone: e.target.value, }); }}
                    className='form-control' type="text" placeholder='Enter Phone' />


                <br />

                <input
                    onChange={(e) => { setData({ ...data, dob: e.target.value, }); }}
                    className='form-control' type="text" placeholder='Enter DOB' />


                <br />

                <input
                    onChange={(e) => { setData({ ...data, gender: e.target.value, }); }}
                    className='form-control' type="text" placeholder='Enter Gender' />


                <br />

                <input
                    onChange={(e) => { setData({ ...data, email: e.target.value, }); }}
                    className='form-control' type="text" placeholder='Enter Email' />


                <br />


                <input
                    onChange={(e) => { setData({ ...data, password: e.target.value, }); }}
                    className='form-control' type="text" placeholder='Enter Password' />


                <br />
                <button className='btn  btn-outline-primary' onClick={addData}>
                    Submit
                </button>

            </div>

      </div>
    );
};

export default Add;