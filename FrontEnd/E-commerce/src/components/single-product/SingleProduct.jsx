import React from 'react';
import './single.css'
import { Link } from 'react-router-dom';
const SingleProduct = ({product,cliclHandaler}) => {
   
    const {id,name,image,price}=product
    return (
        <div className='single-products'>
            
            <div  className='card' key={id}>
                <Link to={`/pro/${id}`}>
                <img src={image} alt="" />
                </Link>
         
                <Link to={`/pro/${id}`}> 
                <h3>Name: <small>{name}</small></h3>
                <p> <span>price: </span> $ {price}</p>
                </Link>
                
            <button className="button-85" role="button" onClick={()=> cliclHandaler(product.id)}> add to cart</button>
        </div>
        
        </div>
    );
};

export default SingleProduct;