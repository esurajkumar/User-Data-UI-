import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {

    const navigatingToHome = useNavigate();

    let [auth, setAuth] = useState({
        email: "",
        password: "",
    });


    return (


        <div style={{ padding: "40px", width: "400px", textAlign: "centre", margin: "10px auto" }}>
            <br /> <br />
            <h2 style={{ color: "rey" }}>Login Required!</h2>


            <input
                onChange={(e) => { setAuth({ ...auth, email: e.target.value, }); }}
                className='form-control' type="text" placeholder='Enter Email' />

            <br />
            <input
                onChange={(e) => { setAuth({ ...auth, password: e.target.value, }); }}
                className='form-control' type="text" placeholder='Enter Password' />


            <br />


            <button className='btn  btn-outline-primary' onClick={() => {

                axios.get(`http://localhost:9090/authentitaion?id=${auth.email}`)
                    .then(
                        (res) => {
                            console.log(res.data);

                            { auth.email === res.data.email && auth.password === res.data.password ? navigatingToHome("/home") : navigatingToHome("/logout") };

                        }

                    )
                    .catch(
                        (error) => {
                            console.log(error);
                            alert("Wrong Credential!");
                        }
                    )


            }}>Login</button>


        </div>

    )
}

export default Login;