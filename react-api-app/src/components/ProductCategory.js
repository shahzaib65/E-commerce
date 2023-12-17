import React, { useEffect, useState } from 'react'
import axios from "axios"

const ProductCategory = () => {

    const [products,setProducts] = useState([])

    useEffect(()=>{
        apiCall()
        },[])
      
          const apiCall = async() =>{
         axios.get("https://dummyjson.com/products/category/smartphones")
         .then((res)=>{
          setProducts(res.data.products)
         console.log()
         }).catch((err)=>{
          console.log(err.message)
         })   
          }


  return (
    <div className='row'>
    {
       products.map((e)=>(
           <div key={e.id} className="col-md-3">
           <div className="card my-3">
               <div className="card-body">
                   <div className="d-flex align-items-center">
                       <h5 className="card-title">{e.title}</h5>
                   </div>
                   <p className=''>Price:{e.price}</p>
                   <p className=''>Discount:{e.discountPercentage}</p>
                   <p className="card-text">{e.description}</p>
                   
               </div>
           </div>
       </div>
          
       ))
    } 
   </div>
  )
}

export default ProductCategory
