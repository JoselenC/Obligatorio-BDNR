import React from "react";

const ProductList =({products})=>{
    return (
        
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Type</th>
                    <th>ManufacturerId</th>
                    <th>Images</th>
                </tr>
                </thead>
                <tbody>
                {products.map( product => (
                <tr key={product.Id}>
                    <th>{product.Id}</th>
                    <th>{product.Name}</th>
                    <th>{product.Description}</th>
                    <th>{product.Price}</th>
                    <th>{product.Type}</th>
                    <th>{product.ManufacturerId}</th>
                    <th>{product.Images}</th>
                </tr> 
                ))}              
            </tbody>
        </table>
    )
}

export default ProductList;