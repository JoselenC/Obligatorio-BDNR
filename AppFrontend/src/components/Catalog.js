import React, {Nav, Fragment, useEffect, useState, Route } from 'react'
import ProductList from './ProductList.js'
import FormProduct from './FormProduct.js';


function Catalog(){


    const [showget, setShow] = useState(false);
    const [showAddProduct, setShowAdd] = useState(false);
  
    const [product,setProduct]= useState({
      Id:0,
      Name:'',
      Description:  '',                
      Price: 0,
      Type:'',                  
      ManufacturerId:0,
      Images:''
    })
  
    const [products,setProducts]= useState([])
    useEffect(()=>{
      const getProducts = () => {
      fetch('http://localhost:6069/catalog/product')
      .then (res=>res.json())
      .then(res=>setProducts(res.data))
    }
    getProducts()
  },[])
    return (
      <Fragment>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img src="https://cdn-icons-png.flaticon.com/512/1420/1420398.png" width="30" height="30" class="d-inline-block align-top" alt=""/>      
             Catalog
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <button className='btn btn-light'
                  type="button"
                  onClick={() => {
                  setShow(!showget);
                  {showAddProduct ? (setShowAdd(!showAddProduct)):(setShowAdd(showAddProduct))};}}>
                  Get all product 
              </button>
  
              <button className='btn btn-light'
                type="button"
                onClick={() => {
                setShowAdd(!showAddProduct);
                {showget ? (setShow(!showget)):(setShow(showget))}; }}>
                Add product 
              </button>  
      </div>
    </div>
          </nav>
         <div className='container'>
          <div className='row'>
            {showget ? (
                <div className='col-7'>
                <h2 style={{textAlign:'center'}}>Product list</h2>
                <ProductList products={products}/>
                </div>
            ) : (
                <div className='col-7'>
                </div>
            )}
  
            {showAddProduct ? (
                <div className='col-7'>
                <h2 style={{textAlign:'center'}}>Product Form</h2>
                <FormProduct product={product} setProduct={setProduct}/>
                </div>
            ) : (
                <div className='col-7'>
                </div>
            )}  
  
             {!showget && !showAddProduct ? (
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
  
  export default Catalog;