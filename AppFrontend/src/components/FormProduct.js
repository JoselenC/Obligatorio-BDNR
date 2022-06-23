import React from 'react';

const FormProduct = ({product, setProduct}) => {
  

    const handleChange = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = () => {
        if ( product.Id === 0 ||
            product.Name === 0 || product.Description === 0 
        || product.Price === 0 || product.Type===0 || product.ManufacturerId===0 
        || product.Images===0 ) {
            alert('All fields are required')
            return
        }
        console.log(product)

        //consulta
        const requestInit = {
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(product)
        }
        console.log(requestInit)

        fetch('http://localhost:6069/catalog/product', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setProduct({
            Id:0,
            Name:'',
            Description:  '',                
            Price: 0,
            Type:'',                  
            ManufacturerId:0,
            Images:''
        })
        alert('Product added successfully')
    }

    return ( 
        <form onSubmit={handleSubmit}>     
            <div className="mb-3">
            <label htmlFor="Id" className="form-label">Id</label>
            <input value={product.Id}  name="Id" onChange={handleChange} type="number" id="Id" className="form-control"/>
            </div>   
            <div className="mb-3">
                <label htmlFor="Name" className="form-label">Name</label>
                <input value={product.Name}  name="Name" onChange={handleChange} type="text" id="Name" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="Description" className="form-label">Temperature</label>
                <input value={product.Description}  name="Description" onChange={handleChange} type="text" id="Description" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="Price" className="form-label">Price</label>
                <input value={product.Price}  name="Price" onChange={handleChange} type="number" id="Price" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="Type" className="form-label">Type</label>
                <input value={product.Type}  name="Type" onChange={handleChange} type="text" id="Type" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="ManufacturerId" className="form-label">ManufacturerId</label>
                <input value={product.ManufacturerId}  name="ManufacturerId" onChange={handleChange} type="number" id="ManufacturerId" className="form-control"/>
            </div>
          
            <div className="mb-3">
                <label htmlFor="Images" className="form-label">Images</label>
                <input value={product.Images}  name="Images" onChange={handleChange} type="text" id="Images" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-dark">Submit</button>
        </form>
    );
}
 
export default FormProduct;