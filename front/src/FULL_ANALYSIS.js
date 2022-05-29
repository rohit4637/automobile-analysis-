
import ReactApexChart from 'react-apexcharts'
import {Bar, Doughnut, Pie, Scatter} from 'react-chartjs-2';
import { Line } from "react-chartjs-2";
//import { Violin, Box } from 'react-chartjs-2';         // for boxplot
//import "chartjs-chart-box-and-violin-plot/build/Chart.BoxPlot.js"; // for boxplot
import {Chart,CategoryScale,registerables} from 'chart.js';
import React, {useEffect,useState} from 'react'; 
import './FULL_ANALYSIS.css';
import axios from 'axios';
Chart.register(CategoryScale);
Chart.register(...registerables);


function Full_Analysis() {
  const [data_col,setdata]=useState()
  const [data_count,setcount]=useState()
  let Data=[];

  const [data_col1,setdata1]=useState()
  const [data_count1,setcount1]=useState()
  let Data1=[];

  const [data_col2,setdata2]=useState()
  const [data_count2,setcount2]=useState()
  let Data2=[];

  const [data_col3,setdata3]=useState()
  const [data_count3,setcount3]=useState()
  let Data3=[];
  
  const [data_col4,setdata4]=useState()
  const [data_count4,setcount4]=useState()
  let Data4=[];

  const [data_col5,setdata5]=useState()
  const [data_count5,setcount5]=useState()
  let Data5=[];
  
  const [data_col6,setdata6]=useState()
  const [data_count6,setcount6]=useState()
  let Data6=[];
  
  const [data_col7,setdata7]=useState()
  const [data_count7,setcount7]=useState()
  let Data7=[];
 
  const [data_col8,setdata8]=useState()
  const [data_count8,setcount8]=useState()
  let Data8=[];

  const [data_count19,setcount19]=useState()
  const [data_count29,setcount29]=useState()
  let Data9=[];

  const [data_col10,setdata10]=useState()
  const [data_count10,setcount10]=useState()
  let Data10=[];

  const [data_col11,setdata11]=useState()
  const [data_count11,setcount11]=useState()
  let Data11=[];

  const [data_col12,setdata12]=useState()
  const [data_count12,setcount12]=useState()
  let Data12=[];
  
  const [data_col13,setdata13]=useState()
  const [data_count13,setcount13]=useState()
  let Data13=[];

  const [data_col14,setdata14]=useState()
  const [data_count14,setcount14]=useState()
  let Data14=[];

  const [data_col15,setdata15]=useState()
  const [data_count15,setcount15]=useState()
  let Data15=[];

  const [data_col16,setdata16]=useState()
  const [data_count16,setcount16]=useState()
  let Data16=[];

  const [data_col17,setdata17]=useState()
  const [data_count17,setcount17]=useState()
  let Data17=[];

  const [data_col18,setdata18]=useState()
  const [data1_count18,set1count18]=useState()
  const [data2_count18,set2count18]=useState()
  const [data3_count18,set3count18]=useState()
  let Data18=[];


  const bar_make_freq_chart = async() =>{
    const res=await axios.post('http://localhost:8000/bar_make_freq_chart');
     Data=res.data
    //  console.log(Data)
     setdata(Data[0])
     setcount(JSON.parse(Data[1]))
   }
   const bar_chart = async() =>{
    const res=await axios.post('http://localhost:8000/bar_fueltype_chart');
     Data1=res.data
    //  console.log(Data1)
     setdata1(Data1[0])
     setcount1(JSON.parse(Data1[1]))
   }

   const bar_price_chart = async() =>{
    const res=await axios.post('http://localhost:8000/bar_price_chart');
     Data2=res.data
    //  console.log(Data2[0])
     setdata2(Data2[0])
     setcount2(Data2[1])
   }

   const bar_bodytype_chart = async() =>{
    const res=await axios.post('http://localhost:8000/bar_bodytype_chart');
     Data3=res.data
    //  console.log(Data3)
     setdata3(Data3[0])
     setcount3(JSON.parse(Data3[1]))
   }
   const do_seating_chart = async() =>{
    const res=await axios.post('http://localhost:8000/do_seating_chart');
     Data4=res.data
    //  console.log(Data4)
     setdata4(Data4[0])
     setcount4(JSON.parse(Data4[1]))
   }
   const bar_displacement_chart = async() =>{
    const res=await axios.post('http://localhost:8000/bar_displacement_chart');
     Data5=res.data
    //  console.log(Data5)
     setdata5(Data5[0])
     setcount5(Data5[1])
   }

   const do_Cylinders_chart = async() =>{
    const res=await axios.post('http://localhost:8000/do_Cylinders_chart');
     Data6=res.data
    //  console.log(Data6)
     setdata6(Data6[0])
     setcount6(Data6[1])
   }

   const do_Gears_chart = async() =>{
    const res=await axios.post('http://localhost:8000/do_Gears_chart');
     Data7=res.data
    //  console.log(Data7)
     setdata7(Data7[0])
     setcount7(Data7[1])
   }
 
   const bar_City_Mileage_chart = async() =>{
    const res=await axios.post('http://localhost:8000/bar_City_Mileage_chart');
     Data8=res.data
    //  console.log(Data8)
     setdata8(Data8[0])
     setcount8(Data8[1])
   }
    
   const make_avg_price = async() =>{
    const res=await axios.post('http://localhost:8000/make_avg_price');
     Data9=res.data
    //  console.log(Data9)
     setcount19(Data9[0])
     setcount29(Data9[1])
   }
  
   const cartype_avg_price = async() =>{
    const res=await axios.post('http://localhost:8000/cartype_avg_price');
     Data10=res.data
    //  console.log(Data10)
     setdata10(Data10[0])
     setcount10(Data10[1])
   }

   const fuel_avg_price = async() =>{
    const res=await axios.post('http://localhost:8000/fuel_avg_price');
     Data11=res.data
    //  console.log(Data11)
     setdata11(Data11[0])
     setcount11(Data11[1])
   }
	
   const Seating_Capacity = async() =>{
    const res=await axios.post('http://localhost:8000/Seating_Capacity');
     Data12=res.data
    //  console.log(Data12)
     setdata12(Data12[0])
     setcount12(Data12[1])
   }
   const Seating_avg_price = async() =>{
    const res=await axios.post('http://localhost:8000/Seating_avg_price');
     Data13=res.data
    //  console.log(Data13)
     setdata13(Data13[0])
     setcount13(Data13[1])
   }
   const pi_Drivetrain_chart = async() =>{
    const res=await axios.post('http://localhost:8000/pi_Drivetrain_chart');
     Data14=res.data
    //  console.log(Data14)
     setdata14(Data14[0])
     setcount14(JSON.parse(Data14[1]))
   }

   const make_avg_kerb = async() =>{
    const res=await axios.post('http://localhost:8000/make_avg_kerb');
     Data15=res.data
    //  console.log(Data15)
     setdata15(Data15[0])
     setcount15(Data15[1])
   }

   const make_mod_mileage= async() =>{
    const res=await axios.post('http://localhost:8000/make_mod_mileage');
     Data16=res.data
    //  console.log(Data16)
     setdata16(Data16[0])
     setcount16(Data16[1])
   }

   const fuel_avg_mileage= async() =>{
    const res=await axios.post('http://localhost:8000/fuel_avg_mileage');
     Data17=res.data
    //  console.log(Data17)
     setdata17(Data17[0])
     setcount17(Data17[1])
   }

   const stacked_avg_cartype= async() =>{
    const res=await axios.post('http://localhost:8000/stacked_avg_cartype');
     Data18=res.data
    //  console.log(Data18)
     setdata18(Data18[0])
     set1count18(Data18[1])
     set2count18(Data18[2])
     set3count18(Data18[3])
   }

  //  const corr_plot = async() =>{
  //   const res=await axios.post('http://localhost:8000/corr_plot');
  //    console.log(res.data)
  //  }
    
  //  const price_plot1 = async() =>{
  //   const res=await axios.post('http://localhost:8000/price_distr_plot');
  //    console.log(res.data)
  //  }


		


  //  const boxplotData = {                              // boxplot
  //   // define label tree
  //   labels: "price",
  //   datasets: [
  //     {
  //       label: "Dataset 1",
  //       backgroundColor: "rgba(255,0,0,0.5)",
  //       borderColor: "red",
  //       borderWidth: 1,
  //       outlierColor: "#999999",
  //       padding: 10,
  //       itemRadius: 0,
  //       data: data_col2
  //     }
  //   ]
  // };
  
  const series= [
    {
      type: 'boxPlot',
      data: [
        {
          x: 'Showroom Price',
          y: data_col2
        },
      ]
    }
  ];
  const options= {
    chart: {
      type: 'boxPlot',
      // height: 350

    },
    title: {
      text: 'Basic BoxPlot Chart',
      align: 'left'
    },
    yaxis:{
      max:60000
    },
    plotOptions: {
      boxPlot: {
        colors: {
          upper: '#5C4742',
          lower: '#A5978B'
        }
      }
    }
  };    //for boxplot


  const dataScatter= {                          //scatter plot
          datasets: [
                 {
                        label: 'millimeters',
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: 'rgba(0, 255, 100, 0.6)',
                        hoverBorderColor: 'rgba(255, 155, 100, 1)',
                        pointRadius: 15,
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        pointHoverBorderWidth: 15,
                        label: 'Population', 
                        data: [1,2,3,4,5,6]
                 }
          ]
   }


                          // stacked bar graph
  const series2= [{     
    name: 'Avg No. of Cylinder',
    data: data1_count18
  }, {
    name: 'Avg No. of Gear',
    data: data2_count18
  }, {
    name: 'Avg Seating Capacity',
    data: data3_count18
  }]
  const options2= {
    chart: {
      type: 'bar',
      height: 1000,
      stacked: true,
    },
    colors:["#003f5c","#ff6361","#bc5090","#ffa600"],
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    title: {
      text: 'A collection of characteristics from various types of automobiles'
    },
    xaxis: {
      categories: data_col18 ,
      labels: {
        formatter: function (val) {
          return val
        }
      }
    },
    yaxis: {
      title: {
        text: undefined
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val 
        }
      }
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40
    }
  }









 useEffect(()=>{
   bar_make_freq_chart()
   bar_chart()
   bar_bodytype_chart()
   bar_price_chart()
   do_seating_chart()
   bar_displacement_chart()
   do_Cylinders_chart()
   do_Gears_chart()
   bar_City_Mileage_chart()
   make_avg_price()
   cartype_avg_price()
   fuel_avg_price()
   Seating_Capacity()
   Seating_avg_price()
   pi_Drivetrain_chart()
   make_avg_kerb()
   make_mod_mileage()
   fuel_avg_mileage()
   stacked_avg_cartype()
},[])

  return (
    <div className="full_analysis">
      <h1 className='full'>FULL ANALYSIS</h1>
      <div className="grp1">
      <div className='row1'>
       <div className="head1"> <h2>Plot between comapnies and No. of cars(including model,varients) manufactured by company</h2>
       </div>
      <div className='make-count'>
      <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: data_col,
            datasets: [
              {
                // Label for bars
                label: "No. of Cars",
                // Data or value of your each variable
                data: data_count,
                // Color of each bar
                backgroundColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                // Border color of each bar
                borderColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={300}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
    
      </div>
      </div>
      <div className="row2">
        <div className="head1"><h2>Plot between Fuel Type and No. Cars</h2></div>
      <div className='fuel_type'>
      <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: data_col1,
            datasets: [
              {
                
                // Label for bars
                label: "No. of Cars",
                // Data or value of your each variable
                data: data_count1,
                // Color of each bar
                backgroundColor: ["#003f5c","#58508d"],
                // Border color of each bar
                borderColor: ["#003f5c","#58508d"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={300}
          options={{
            indexAxis: 'y',
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: false,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />    
      </div>
       </div>
       <div className="row3">
        <div className="head1"> <h2>Plot between Car Body Type and No. of Cars</h2></div>
      <div className='body_type'>
      <Pie
          data={{
            // Name of the variables on x-axies for each bar
            labels: data_col3,
            datasets: [
              {
                // Label for bars
                label: "No. of Cars",
                // Data or value of your each variable
                data: data_count3,
                // Color of each bar
                backgroundColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                // Border color of each bar
                borderColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={300}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
      </div>
      </div>
      <div className="inference1">
      <ul >
      <h2>Inference:</h2>
      <li>Maruti Suzuki is the make of the car which has the largest number of vehicles, with more than 12%. The 2nd highest is Hyundai.</li>
      <li>Patrol is the most popular fuel type, although there has been a recent surge in electric vehicles.</li>
      <li>The most popular car type is the SUV.</li>
    </ul>
      </div>
      </div>
      {/* <div className="row4">
      <div className='line-car-price'> // histogram
      <Bar
        data={{
          // x-axis label values
          labels: data_col2,
          datasets: [
            {
              label: "# of cars",
              // y-axis data plotting values
              data:data_count2,
              fill: false,
              borderWidth:4,
              backgroundColor: "rgb(255, 99, 132)",
              borderColor:'green',
              barPercentage: 1,
              categoryPercentage: 1,
              responsive:true
            },
          ],
        }}
      />
      </div>
    </div> */}
    {/* <div className="row5">
     <div className='boxplot-price'>
     <ReactApexChart options={options} series={series} type="boxPlot" height={500} width={600} />
     </div>
     </div> */}
     <div className="grp1">
     <div className="row6">
     <div className="head1"><h2>Plot between seating capacity and No. of Cars</h2></div>
     <div className='doughnut-seating'>
       
     <Doughnut
          data={{
            // Name of the variables on x-axies for each bar
            labels: data_col4,
            datasets: [
              {
                // Label for bars
                label: "Seating capacity of automobiles",
                // Data or value of your each variable
                data: data_count4,
                // Color of each bar
                backgroundColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                // Border color of each bar
                borderColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={300}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
     </div>
     </div>
     <div className="row7">
     <div className="head1"><h2>plot between Displacement(in CC) and No. of Cars</h2></div>
     <div className="bar_displacement">
     <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: data_col5,
            datasets: [
              {
                // Label for bars
                label: "Displacement(in CC)",
                // Data or value of your each variable
                data: data_count5,
                // Color of each bar
                backgroundColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                // Border color of each bar
                borderColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
     </div >
     </div>
     <div className="row8">
     <div className="head1"><h2>Plot between No. of Cylinder and No. of Cars</h2></div>
     <div className="doughnut_Cylinders" >
     <Doughnut
          data={{
            // Name of the variables on x-axies for each bar
            labels: data_col6,
            datasets: [
              {
                // Label for bars
                label: "No. of Cylinders",
                // Data or value of your each variable
                data: data_count6,
                // Color of each bar
                backgroundColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                // Border color of each bar
                borderColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={300}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
     
     </div>
     </div>
     <div className="row9">
     <div className="head1"><h2>Plot between No. of gears and No. of Cars</h2></div>
     <div className='doughnut-gears' >
     <Doughnut
          data={{
            // Name of the variables on x-axies for each bar
            labels: data_col7,
            datasets: [
              {
                // Label for bars
                label: "No. of gears in cars",
                // Data or value of your each variable
                data: data_count7,
                // Color of each bar
                backgroundColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                // Border color of each bar
                borderColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={300}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
        

      </div>
      </div>
      <div className="inference1">
      <ul >
      <h2>Inference:</h2>
      <li>Cars with five seats appeared to be the most frequent.</li>
      <li>The majority of automobiles have engines with a displacement of 1197CC.</li>
      <li>More than 60% of automobiles have four cylinders.</li>
      <li>5 gears are found in almost 47% of automobiles.</li>
    </ul>
      </div>
      </div>
       <div className="grp1">
      <div className="row10">
      <div className="head1"><h2>Plot between City mileage(Km/litre) of cars and No. of Cars</h2></div>
      <div className='line-mileage'>
      <Line
        data={{
          // x-axis label values
          labels: data_col8,
          datasets: [
            {
              label: "# of Cars",
              // y-axis data plotting values
              data:data_count8,
              fill: false,
              borderWidth:4,
              backgroundColor: "#ff6361",
              borderColor:"#ffa600",
              responsive:true
            },
          ],
        }}
      />
    </div>
    </div>
    <div className="row16">
      <div className="head1"><h2>plot between drivetrain and No. of cars</h2></div>
        <div className="pie_drivetrain">
        <Doughnut
          data={{
            // Name of the variables on x-axies for each bar
            labels: data_col14,
            datasets: [
              {
                // Label for bars
                label: "No. of Cars",
                // Data or value of your each variable
                data: data_count14,
                // Color of each bar
                backgroundColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                // Border color of each bar
                borderColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={300}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
        </div>
        </div>
   
        <div className="inference1">
        <ul >
      <h2>Inference:</h2>
      <li>The majority of cars have a mileage range of 8 to 22 kilometres per litre.</li>
      <li>Electric vehicles provide the maximum mileage(equal to or greater than 80Km/full charge).</li>
      <li>Front-wheel drive has the most cars, followed by rear-wheel drive and four-wheel drive. </li>
      <li>There aren't many four-wheel-drive cars.</li>
    </ul>
        </div>
        </div>
        <div className="grp1">
    <div className="row11">
      <div className="head1"><h2>The average price of automobiles from different manufacturers</h2></div>
    <div className='make_avg_price'>
      <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: data_count19,
            datasets: [
              {
                // Label for bars
                label: "average price(in Rs)",
                // Data or value of your each variable
                data: data_count29,
                // Color of each bar
                backgroundColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                // Border color of each bar
                borderColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={300}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: false,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
      </div>
      </div>
      <div className="row12">
        <div className="head1"><h2>Average cost of cars vs car body type</h2></div>
      <div className='cartype_avg_price'>
      <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: data_col10,
            datasets: [
              {
                // Label for bars
                label: "average price(in Rs)",
                // Data or value of your each variable
                data: data_count10,
                // Color of each bar
                backgroundColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                // Border color of each bar
                borderColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={300}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
      </div>
      </div>
      <div className="row13">
        <div className="head1"><h2>Average cost of cars vs fuel type</h2></div>
        <div className="fuel_avg_price">
      <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: data_col11,
            datasets: [
              {
                // Label for bars
                label: "average price(in Rs)",
                // Data or value of your each variable
                data: data_count11,
                // Color of each bar
                backgroundColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                // Border color of each bar
                borderColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={300}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
        </div>
        </div>
        
        <div className="row15">
          <div className="head1"><h2>Average cost of cars vs Seating Capacity</h2></div>
        <div className="Seating_avg_price">
        <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: data_col13,
            datasets: [
              {
                // Label for bars
                label: "average price(in Rs)",
                // Data or value of your each variable
                data: data_count13,
                // Color of each bar
                backgroundColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                // Border color of each bar
                borderColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={300}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
        </div>
        </div>
        <div className="inference1">
        <ul >
      <h2>Inference:</h2>
      <li>The most expensive cars appear to be Bugati, Rolls-Royce, and Ferrari.</li>
      <li>Bajaj, Datsun, Premier, and Maruti Suzuki make the most affordable automobiles.</li>
      <li>Sports and coupes are the most expensive automobile types. </li>
<li>Hybrid vehicles are the most expensive, followed by patrol vehicles.</li>
<li>The cost of a two-seater car is usually quite high.</li>
    </ul>
        </div>
        </div>
        <div className="grp1">
         <div className="row16">
           <div className="head1"><h2>Average Kerb(curb) weight cars vs car manufacturers</h2></div>
           <div className="bar_make_avg_kerb">
           <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: data_col15,
            datasets: [
              {
                // Label for bars
                label: "Avg Kerb Weight(in Kg)",
                // Data or value of your each variable
                data: data_count15,
                // Color of each bar
                backgroundColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                // Border color of each bar
                borderColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={300}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
           </div>
         </div>
          <div className="row17">
            <div className="head1"><h2>Average Mileage of cars vs Car Manufacturers</h2></div>
            <div className="make_mod_mileage">
            <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: data_col16,
            datasets: [
              {
                // Label for bars
                label: "Avg city mileage(in Km/L)",
                // Data or value of your each variable
                data: data_count16,
                // Color of each bar
                backgroundColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                // Border color of each bar
                borderColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={300}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
            </div>
          </div>
          <div className="row18">
          <div className="head1"><h2>Average Mileage of cars vs Fuel Type</h2></div>
          <div className="fuel_avg_mileage">
          <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: data_col17,
            datasets: [
              {
                // Label for bars
                label: "Avg city mileage(in Km/L)",
                // Data or value of your each variable
                data: data_count17,
                // Color of each bar
                backgroundColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                // Border color of each bar
                borderColor: ["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={300}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
        </div>
          </div>
          <div className="row19"> <div className="head1"><h2>Characteristics from various types of automobiles</h2></div>
          <div className="prop_cartype">
          <ReactApexChart options={options2} series={series2} type="bar" height={350} />
          </div></div>
          <div className="inference1">
      <ul>
      <h2>Inference:</h2>
      <li>The majority of Rolls-Royce vehicles have high kurb weights.</li>
      <li>The kerb weight of most Maruti Suzuki automobiles are modest.</li>
      <li>Among other cars, most Maruti Suzuki vehicles have the best mileage.</li>
      <li>The average City mileage(Km/Full charge) of electric vehicles is the greatest.</li>
     
    </ul>
          </div>
          </div>
         
        {/* <div className="correlation">
        <button onClick={()=>{corr_plot()}}>correlation_plot</button> 
        </div>
        <div className="price_distr">
        <button onClick={()=>{price_plot1()}}>price distribution _plot</button>
        </div> */}
        
      </div>
      
  );

}

export default Full_Analysis;