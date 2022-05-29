import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Select from 'react-select'
import ReactApexChart from 'react-apexcharts'
import './function1.css';
import { Redirect } from 'react-router-dom';

export default function FUNCTION_1() {
    const [col_1_name,setcol_1_name]=useState();
    const [col_2_name,setcol_2_name]=useState();
    const [data,setdata]=useState()
   
    const col_1=[
    {value:'Ex-Showroom_Price(in Rs)',label:'Ex-Showroom Price(in Rs)'},
    {value:'Cylinders',label:'Cylinders'},
    {value:'Displacement(in CC)',label:'Displacement(in CC)'},
    {value:'Fuel_Tank_Capacity(in litres)',label:'Fuel Tank Capacity(in litres)'},
    {value:'City_Mileage(Km/litre)',label:'City Mileage(Km/litre)'},
    {value:'Kerb_Weight(in Kg)',label:'Kerb Weight(in Kg)'},
    {value:'Boot_Space(in litres)',label:'Boot Space(in litres)'},
    {value:'Seating_Capacity',label:'Seating Capacity'},
    {value:'Gears',label:'Gears'},
   

]

const bar_chart = async() =>{
    let data_post={col_1_name,col_2_name}
    const res=await axios.post('http://localhost:8000/scatter_plot',data_post);
     let Data=res.data
    //  console.log(Data)
     setdata(Data) 
  }

const series= [{
    name: "SAMPLE A",
    data: data
  }];
  const options= {
   
    chart: {
      height: 350,
      type: 'scatter',
      zoom: {
        enabled: true,
        type: 'xy'
      }
    },
    xaxis: {
      tickAmount: 10,
      labels: {
        formatter: function(val) {
          return parseFloat(val).toFixed(1)
        }
      }
    },
    yaxis: {
      tickAmount: 7
    }
  };

const handle_1=(e)=>{
setcol_1_name(e.value)
}
const handle_2=(e)=>{
    setcol_2_name(e.value)
    }

    return(
   <div className='main'>
     <div className="headd"><h1>Correlation Plot</h1></div>
     <div className="headd1"><h3>Bivariate Analysis</h3></div>
  <div className="scatter">
    <div className="topic"><p>Select the variables in which you want to find the relationship.</p></div>
     <Select options={col_1} onChange={handle_1} />
   <Select options={col_1} onChange={handle_2} />
   <div className="buttonf"><button class="button1" onClick={()=>{bar_chart()}}>Plot Scatter</button></div>
   <ReactApexChart options={options} series={series} type="scatter" height={350} />
   </div>
   <div className="inference21">
   <h2>Inference:</h2>
      <li>city mileage seem to have a significant negative correlation with price(in).</li>
      <li>The number of cylinders appears to have a significantly positive correlation with price.</li>
      <li>The number of cylinders appears to have a significantly positive correlation with Displacement(in CC).</li>
      <li>There appears to be a considerable negative association between city mileage(Km/L) and displacement(in CC).</li>
      </div>
   </div>
    )}
