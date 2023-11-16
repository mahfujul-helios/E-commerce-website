import React, { useEffect, useState } from 'react';
import './product.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AddCard from '../add-to-card/AddCard';
const Product = () => {
    const {id} = useParams()
    const [product,setProduct]=useState([])
    const productUrl = import.meta.env.VITE_API_URL;

    useEffect(()=>{
        axios.get(`${productUrl}/pro/${id}/`)
        .then(res=>{
            setProduct(res.data)
        })
    },[])
   
    return (
       <div className="products-details-container">
         <div className="product-details">
           <div className="img-container">
           <img src={product.image} alt="" />
           </div>
            <h3>Name: <small>{product.name}</small></h3>
            <p> <span>price:</span> $ {product.price}</p>
            <p className='description'><span>Description:</span> {product.description}</p>
            {/* <button>add to cart</button> */}
        </div>
       
       </div>
    );
};

export default Product;