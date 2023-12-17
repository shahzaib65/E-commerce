import React, { useEffect, useState } from 'react'
import axios from "axios"

const ProductDetails = () => {

    const [product,setProduct] = useState({})

    useEffect(()=>{
        apiCall()
        },[])
      
          const apiCall = async() =>{
         axios.get("https://dummyjson.com/products/1")
         .then((res)=>{
          setProduct(res.data)
         
         }).catch((err)=>{
          console.log(err.message)
         })   
          }


  return (
  <div className=' container'>
<div class="card">
  <img src={product.thumbnail} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{product.title}</h5>
    <p class="card-text">{product.description}</p>
    <p class="card-text">Price:{product.price}</p>
  </div>
</div>
  </div>
  )
}

export default ProductDetails
