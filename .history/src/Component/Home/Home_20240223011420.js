import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";

import { useState } from "react";



function Home() {


    let [image, setImage] = useState("https://t3.ftcdn.net/jpg/03/67/35/72/360_F_367357209_BG07SVnnB4HSHSaMiHajfZhrZZAE859A.jpg"); // by default welcome image show


    function changeToBen() {
        setImage("https://i.ytimg.com/vi/YR2UERM5Gm0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD3CJMQYQMpv25fiPeRG1ryMCEAvQ")  // Ben image show
    }


    function changeToTom() {
        setImage("https://w0.peakpx.com/wallpaper/483/599/HD-wallpaper-tom-and-jerry-cartoon-cat-jerry-mouse-tom.jpg")  //Tom image show

    }


    return (

        <div>


            <div id="Main">
                <br />        <br /> 

                <img src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8074230_b_v9_ak.jpg" width={285} height={300} />

                <h3 style={{ color: "blue" }}>Ben Tennyson</h3>

                <p style={{ color: "GrayText" }}>Ben Tennyson is now 15 and becoming a leader wearing his powerful Omnitrix again. Grandpa Max is missing and Ben needs the help of Gwen and Kevin to find him.</p>

                {/* <button> Hero time!</button> */}

                <Link  target="_blank" to="https://www.youtube.com/watch?v=xY1FEsAGP74"> <button style={{"background-color": "lightgreen"}}>Hero time!</button> </Link>
                {/* target="_blank"  -- it mean open in different/new browser */}
            </div>



            <div style={{ marginTop: "50px", textAlign: "center" }}>
                <br />        <br />  <br />
                <img src={image} width={500} height={300} />

                <br /> <br />

                <button style={{"background-color": "lightgreen"}} onClick={changeToBen}>Shaktimaan</button>   &nbsp; &nbsp;

                <button style={{"background-color": "lightgreen"}} onClick={changeToTom}>Tom</button>

            </div>



            <br />        <br />  <br />
            <div id="Footer">

                <h2> All rights are reserved! </h2>
                <p>This is the footer part of the page. If you need any assistence please reach out us, we will be glad to help you out under any circusstances.</p>


            </div>

        </div>

    );
};

export default Home;

