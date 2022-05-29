import React from 'react';
import {useState} from 'react';
import "./NAVBAR.css";

export default function NAVBAR(props) {
  const reload=()=>{
    window.location.reload();
}

  const [input,setinput]= useState({
start:"",
end:""
  });

let name,value;
  const handleInputs=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setinput({...input,[name]:value});};

    const{start,end}=input;

  return(
    <div id="topnav">
      <div className='left'>
      <a href="http://localhost:3000/"><b>Automobile Data Analysis</b></a>
       </div>
       <div className='center'>
       <button className='full1' type="submit" ><a href="http://localhost:3000/Full_Analysis"><b>Full Analysis</b></a></button>
       </div>
       <div className='reset'>
       <button align="right" className='full2' type="submit" ><a href="http://localhost:3000/funct"><b>Bivariate Analysis(Correlation)</b></a></button>
       </div>
    </div>
  );
}