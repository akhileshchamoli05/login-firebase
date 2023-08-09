import React from "react";
import {useState} from 'react';
const Completeprofile=(props)=>
{ 
   const [n,setName]=useState("");

    const updateHandler=()=>
    {

    setName("fill");
    }
    console.log(n);
   
    return (
        
        <div>
        <form>
        <label>Address</label>
        <input type="text" />
        <button onClick={updateHandler}>Update</button>
        <h1>{n}</h1>
        </form>
        </div>
    );
}
export default Completeprofile;