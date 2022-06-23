import React from 'react';
import addPage from './addPage'

const Navbar=({brand})=>{
  
    return(
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
      <a class="nav-item nav-link active" href="#" id="navigation">
      
        Add telemetry<span class="sr-only"> (current)</span></a>

      <a class="nav-item nav-link" href="#">Get telemetry</a>
    </div>
  </div>
        </nav>
        
    )
    
}

export default Navbar;