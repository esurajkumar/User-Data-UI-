import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Home/Home";
import List from "../List/List";
import Add from "../Add/Add";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Update from "../Update/Update";
import OpenAIRequest from "../OpenAI/OpenAIRequest";
import Edit from "../Edit/Edit";


export default function Routing(){

return(

<div>

<Routes>
    <Route path = {"/"} element = {<Login/>}/> 
    <Route path = {"/home"} element = {<Home/>}/> 
    <Route path = {"/add"} element = {<Add/>}/> 
    <Route path = {"/list"} element = {<List/>}/> 
    <Route path = {"/logout"} element = {<Login/>}/> 
    <Route path = {"/update"} element = {<Update/>}/> 
    <Route path = {"/edit"} element = {<Edit/>}/>
    <Route path = {"/openAIRequest"} element = {<OpenAIRequest/>}/> 
    <Route path = {"*"} element = {<PageNotFound/>}/> 

    
</Routes>

</div>

)}