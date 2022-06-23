import React, {Nav, Fragment, useEffect, useState, Route } from 'react'
import VehicleList from './VehicleList'
import FormTelemetry from './FormTelemetry'


function Telemetry(){


    const [show, setShow] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
  
    const [vehicle,setVehicle]= useState({
      vehicleid:0,
      waves:0,
      temperature:  0,                
      vibration: '',
      pressure:0,                  
      voltage:0,
      speed:0
    })
  
    const [vehicles,setVehicles]= useState([])
    useEffect(()=>{
      const getVehicles = () => {
      fetch('http://localhost:8080/telemetry')
      .then (res=>res.json())
      .then(res=>setVehicles(res.data))
    }
    getVehicles()
  },[])
    return (
      <Fragment>
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img src="https://cdn-icons-png.flaticon.com/512/1420/1420398.png" width="30" height="30" class="d-inline-block align-top" alt=""/>      
             Vehicle telemetry
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <button className='btn btn-light'
                  type="button"
                  onClick={() => {
                  setShow(!show);
                  {showAdd ? (setShowAdd(!showAdd)):(setShowAdd(showAdd))};}}>
                  Get all vehicle telemetry
              </button>
  
              <button className='btn btn-light'
                type="button"
                onClick={() => {
                setShowAdd(!showAdd);
                {show ? (setShow(!show)):(setShow(show))}; }}>
                Add vehicle telemetry
              </button>  
      </div>
    </div>
          </nav>
         <div className='container'>
          <div className='row'>
            {show ? (
                <div className='col-7'>
                <h2 style={{textAlign:'center'}}>Vehicle telemetry list</h2>
                <VehicleList vehicles={vehicles}/>
                </div>
            ) : (
                <div className='col-7'>
                </div>
            )}
  
            {showAdd ? (
                <div className='col-7'>
                <h2 style={{textAlign:'center'}}>Vehicle Form</h2>
                <FormTelemetry vehicle={vehicle} setVehicle={setVehicle}/>
                </div>
            ) : (
                <div className='col-7'>
                </div>
            )}  
  
             {!show && !showAdd ? (
                 <img src="https://cdn.pixabay.com/photo/2021/01/21/11/09/tesla-5937063_960_720.jpg"
                  width="2500"class="d-inline-block align-top" alt=""/>      
            ) : (
                <div className='col-7'>
                </div>
            )}
  
          </div>
         </div>
        </Fragment>
    );
  
    
  }
  
  export default Telemetry;