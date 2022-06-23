import React, {Nav, Fragment, useState, Route } from 'react'

import Telemetry from './components/Telemetry';
import Catalog from './components/Catalog';



function App(){
  const [show, setShow] = useState(false);
    const [showAdd, setShowAdd] = useState(true);
return(
  <Fragment>
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img src="https://cdn-icons-png.flaticon.com/512/1420/1420398.png" width="30" height="30" class="d-inline-block align-top" alt=""/>      
           Menu
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
                  Telemetry
              </button>
  
              <button className='btn btn-light'
                type="button"
                onClick={() => {
                setShowAdd(!showAdd);
                {show ? (setShow(!show)):(setShow(show))}; }}>
             Catalog
              </button>  
      </div>
    </div>
          </nav>
         <div className='container'>
          <div className='row'>
            {show ? (
               <Telemetry></Telemetry>
            ) : (
                <div className='col-7'>
                </div>
            )}
  
            {showAdd ? (
             <Catalog></Catalog>
            ) : (
                <div className='col-7'>
                </div>
            )}  
  
             {!show && !showAdd ? (
                <div className='col-7'>
                </div>
            ) : (
                <div className='col-7'>
                </div>
            )}
  
          </div>
         </div>
        </Fragment>
)

}

export default App;
