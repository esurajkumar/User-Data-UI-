import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import axios from "axios";





function Edit() {

    let [updateData, setUpdateData] = useState({
        id: "",
        firstName: "",
        lastName: "",
        phone: "",
        dob: "",
        gender: "",
        email: "",
        password: "",
    });


    const navigatingToUpdate = useNavigate();


    const [appleQuerryParm] = useSearchParams();

    let userID = appleQuerryParm.get("id");


    let data = useSelector((storedata) => {

        // console.log("IAN");
        // console.log(storedata.USER);
        //console.log(storedata.USER.find(user => user.id == userID));

        const user = storedata.USER.find(user => user.id == userID);
        return user
    });

    
    // if no data found
    if (!data) {
        return <div>Data with this ID not available</div>;
    }





    function sendData() {

        axios.put("http://localhost:9090/updateUserData", updateData)
            .then((res) => {
                console.log(res.data);
                alert("Data Updated!")
                navigatingToUpdate("/update")
            })
            .catch((error) => {
                console.log(error);
                alert("Data not Updated, Please check!")
            })
    }

    return (

        <div style={{ padding: "50px", width: "500px", textAlign: "centre", margin: "10px auto" }}>
            <h2 className='text-primary'> Update User</h2>

            <div>

                <input
                    onChange={(e) => { setUpdateData({ ...updateData, id: e.target.value, }); }}

                    value={data.id} name="id"
                    className='form-control' type="text" placeholder='Enter ID' />

                <br />

                <input
                    onChange={(e) => { setUpdateData({ ...updateData, firstName: e.target.value, }); }}
                    name="firstName"
                    value={data.firstName}
                    className='form-control' type="text" placeholder='Enter First Name' />

                <br />



                <input
                    onChange={(e) => { setUpdateData({ ...updateData, lastName: e.target.value, }); }}

                    value={data.lastName} name="lastName"

                    className='form-control' type="text" placeholder='Enter Last Name' />


                <br />

                <input
                    onChange={(e) => { setUpdateData({ ...updateData, phone: e.target.value, }); }}

                    value={data.phone} name="phone"

                    className='form-control' type="text" placeholder='Enter Phone' />


                <br />

                <input
                    onChange={(e) => { setUpdateData({ ...updateData, dob: e.target.value, }); }}

                    value={data.dob} name="dob"

                    className='form-control' type="text" placeholder='Enter DOB' />


                <br />

                <input
                    onChange={(e) => { setUpdateData({ ...updateData, gender: e.target.value, }); }}

                    value={data.gender} name="gender"

                    className='form-control' type="text" placeholder='Enter Gender' />


                <br />

                <input
                    onChange={(e) => { setUpdateData({ ...updateData, email: e.target.value, }); }}

                    value={data.email} name="email"

                    className='form-control' type="text" placeholder='Enter Email' />


                <br />


                <input

                    onChange={(e) => { setUpdateData({ ...updateData, password: e.target.value, }); }}

                    value={data.password} name="password"

                    className='form-control' type="text" placeholder='Enter Password' />


                <br />
                <button className='btn  btn-outline-primary'
                    onClick={sendData}
                >
                    Submit
                </button>

            </div>


        </div>

    );
}

export default Edit;