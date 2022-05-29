import {Bar} from 'react-chartjs-2';
import React, {useEffect,useState} from 'react'; 
import './App.css';
import axios from 'axios';
import img from './images.jpg'
import {Switch,Route,BrowserRouter} from 'react-router-dom'
import FULL_ANALYSIS from './FULL_ANALYSIS'
import FUNCT_1 from './function1.js'
import NAVBAR from './NAVBAR.js';
// import ChordDiagram from 'react-chord-diagram'
import ReactApexChart from 'react-apexcharts'



function App() {
  const [data_col,setdata]=useState()
  const [data_count,setcount]=useState()
  let Data=[];

  

  const [data101,setdata101]=useState()
  let Data101=[];
 
  const helloworld = async() =>{
    const res=await axios.post('http://localhost:8000/array_post');
     Data=res.data
     setdata(Data[0])
     setcount(JSON.parse(Data[1]))
   }
  
   const make_percnt = async() =>{
    const res=await axios.post('http://localhost:8000/make_percnt');
     Data101=res.data
    //  console.log(Data101)
     setdata101(Data101)
   }



  


 useEffect(()=>{
   helloworld()
   make_percnt()
  
},[])





// for make 
const series1 = [data101]
const options1 = {
  chart: {
    height: 350,
    type: 'radialBar',
    toolbar: {
      show: true,
      
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
       hollow: {
        margin: 0,
        size: '70%',
        background: "#FFB367",
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
     
     
      track: {
        background: '#fff',
        strokeWidth: '67%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },
  
      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '17px'
        },
        value: {
          formatter: function(val) {
            return parseFloat(val);
          },
          color: '#111',
          fontSize: '36px',
          show: true,
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ['#ABE5A1'],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: 'round'
  },
  labels: ['Make Percentage'],
  title:{
    text: ["Maruti Suzuki"],
    align: 'center'
},


  };









const series= [{
  name: "No. of Cars",
  data: data_count
}]

const options = {
  chart: {
  type: 'bar',
  height: 400
},
plotOptions: {
  bar: {
    
    dataLabels: {
     
      },
     
    borderRadius: 2,
    horizontal: true,
  }
},
colors: "#000000",

chart: {

},
dataLabels: {
  enabled: true,
  textAnchor: 'start',
},
xaxis: {
 
  categories: data_col,
  
}

};
  return (

  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <NAVBAR/>
    <div className="App">   
    <div className='head'>
      <div className="one">
        <div className="title1"><h2>Mass Car Manufacturer</h2></div>
    <div className="radialbar"><ReactApexChart options={options1} series={series1} type="radialBar" height={350} />

    </div>
    </div>
    <div className="two">
    <div className="title1"><h2>Most Expensive Car Manufacturers</h2></div>
    <div className="make_exp">
      
      <p>Bugatti, Rolls-Royce, Mercedes-Benz, Lamborghini, Aston Martin</p>
    </div>
    <div className="title1"><h2>Most Affordable Car Manufacturers</h2></div>
    <div className="make_chp">
      
      <p>Bajaj, Datsun, Premier, Maruti Suzuki, Fiat, Tata</p>
    </div>
    
    </div>
    <div className="three">
    <div className="title1"><h2>Most Common Features:</h2></div>
    <div className="common_feat">
     
      <ul >
      <li><b>Fuel Type:</b> Patrol</li>
      <li><b>Displacement:</b> 1197 CC</li>
      <li><b>No. of Cylinders:</b> 4</li>
      <li><b>Body Type:</b> Suv</li>
      <li><b>Seating Capacity:</b> Five</li>
      <li><b>Drivetrain:</b> FWD</li>
      <li><b>kerb weight:</b> 1785Kg</li>
    
      
</ul>
</div>
    </div>
  </div>
    
     <div className="image">
       {/* <img src={img}/> */}
       <div className="plot">
         <div className="make">
            
         </div>
       </div>
      <div className='car_company'>
        <div className="phead"><h2>Plot between # of Cars and Car Manufacturers</h2></div>
      <ReactApexChart options={options} series={series} type="bar" height={650} width={1200}/>
      </div>
      {/* <div className='button'>
        <button><a href="http://localhost:3000/Full_Analysis">Show Full Analysis</a></button>
        <button><a href="http://localhost:3000/funct">Bivariate analysis</a></button>
      </div> */}
      
      </div> 
      
      </div>
      </Route>
      <Route exact path="/Full_Analysis">
      <NAVBAR/>
        <FULL_ANALYSIS/>
      </Route>
      <Route exact path="/funct">
      <NAVBAR/>
        <FUNCT_1/>
      </Route>
      </Switch></BrowserRouter>
  );



}
export default App;
