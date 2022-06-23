import React from "react";

const VehicleList =({vehicles})=>{
    return (
        
        <table className="table">
            <thead>
                <tr>
                    <th>Vehicle id</th>
                    <th>Register time</th>
                    <th>Waves</th>
                    <th>Temperature</th>
                    <th>Vibration</th>
                    <th>Voltage</th>
                    <th>Pressure</th>
                    <th>Speed</th>
                </tr>
                </thead>
                <tbody>
                {vehicles.map( vehicle => (
                <tr key={vehicle.vehicleid}>
                    <th>{vehicle.vehicleid}</th>
                    <th>{vehicle.registertime}</th>
                    <th>{vehicle.waves}</th>
                    <th>{vehicle.temperature}</th>
                    <th>{vehicle.vibration}</th>
                    <th>{vehicle.voltage}</th>
                    <th>{vehicle.pressure}</th>
                    <th>{vehicle.speed}</th>
                </tr> 
                ))}              
            </tbody>
        </table>
    )
}

export default VehicleList;