import React, { useEffect, useState } from 'react';
 import './card.css'
import axios from 'axios';
import AddCard from '../add-to-card/AddCard';
import SingleProduct from '../single-product/SingleProduct';


const Card = () => {
    const [products,setProducts]=useState([])
    const [cartItems,setCartItems]=useState([])
    const productUrl = import.meta.env.VITE_API_URL;
    useEffect(()=>{
        axios.get(`${productUrl}/pro/`)
        .then(res=> {
            setProducts(res.data)
        })
     
    },[])

    const cartFun=()=>{
        axios.get(`${productUrl}/proCart/`)
        .then(res=>{
            setCartItems(res.data);
        })
    }

    useEffect(()=>{
        cartFun()
        
    },[])

    const cliclHandaler=(product)=>{
        const data={
            'product':product,
            'quantity':1,
            
        }

        axios({
            method: 'post',
            url: `${productUrl}/proCart/`,
            headers: {}, 
            data: data
          }).then(res =>{
            cartFun()
          })
       
    }
    return (
   
<div className="list-products-container">
<div className="cards">

{
    products.map((product)=><SingleProduct 
    product={product}
    key={product.id}
    cliclHandaler={cliclHandaler}
    >

    </SingleProduct>
          
    )
}

</div>

<div className="add-to-card">
<AddCard 
cartItems={cartItems}
/>
</div> 
</div>  
    );
};

export default Card;