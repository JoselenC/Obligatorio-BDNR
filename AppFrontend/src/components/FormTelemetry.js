import React from 'react';

const FormTelemetry = ({vehicle, setVehicle}) => {
  

    const handleChange = e => {
        setVehicle({
            ...vehicle,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = () => {
        if ( vehicle.vehicleid === 0 ||
            vehicle.temperature === 0 || vehicle.waves === 0 
        || vehicle.vibration === 0 || vehicle.pressure===0 || vehicle.voltage===0 
        || vehicle.speed===0 ) {
            alert('All fields are required')
            return
        }
        console.log(vehicle)

        //consulta
        const requestInit = {
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(vehicle)
        }
        console.log(requestInit)

        fetch('http://localhost:8080/telemetry', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setVehicle({
            vehicleid:0,
            waves:0,
            temperature:  0,                
            vibration: '',
            pressure:0,                  
            voltage:0,
            speed:0
        })
        alert('Telemetry added successfully')
    }

    return ( 
        <form onSubmit={handleSubmit}>     
            <div className="mb-3">
            <label htmlFor="vehicleid" className="form-label">Vehicle id</label>
            <input value={vehicle.vehicleid}  name="vehicleid" onChange={handleChange} type="text" id="vehicleid" className="form-control"/>
            </div>   
            <div className="mb-3">
                <label htmlFor="waves" className="form-label">Waves</label>
                <input value={vehicle.Waves}  name="waves" onChange={handleChange} type="number" id="waves" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="temperature" className="form-label">Temperature</label>
                <input value={vehicle.temperature}  name="temperature" onChange={handleChange} type="number" id="temperature" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="vibration" className="form-label">Vibration</label>
                <input value={vehicle.vibration}  name="vibration" onChange={handleChange} type="number" id="vibration" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="voltage" className="form-label">Voltage</label>
                <input value={vehicle.voltage}  name="voltage" onChange={handleChange} type="number" id="voltage" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="pressure" className="form-label">Pressure</label>
                <input value={vehicle.pressure}  name="pressure" onChange={handleChange} type="number" id="pressure" className="form-control"/>
            </div>
          
            <div className="mb-3">
                <label htmlFor="speed" className="form-label">Speed</label>
                <input value={vehicle.speed}  name="speed" onChange={handleChange} type="number" id="speed" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-dark">Submit</button>
        </form>
    );
}
 
export default FormTelemetry;