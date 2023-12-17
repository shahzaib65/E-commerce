import React, { useEffect, useState } from 'react'
import axios from "axios"
const Categories = () => {
    const [categories,setCategories] = useState([])

    useEffect(()=>{
    apiCall()
    },[])
  
      const apiCall = async() =>{
     axios.get("https://dummyjson.com/products/categories")
     .then((res)=>{
      setCategories(res.data)
     }).catch((err)=>{
      console.log(err.message)
     })   
      }
    


  return (
    <div className='row'>
     {
        categories.map((e)=>(
            <div key={e} className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{e}</h5>
                       
                    </div>
                  

                </div>
            </div>
        </div>
           
        ))
     }   
    </div>
  )
}

export default Categories
