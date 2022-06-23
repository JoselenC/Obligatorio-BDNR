import NavBar from "../components/Navbar"
import { Fragment } from "react";
import React from "react";

class addPage extends React.Component {
   

    constructor(){

    }
 
    render() {
        return(
            
            <Fragment>
              <NavBar brand='Vehicle telemetry'/>
             
              </Fragment>
        )
    }
  }

  export default addPage;
