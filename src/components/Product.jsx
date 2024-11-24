import React from 'react'

import { Link } from 'react-router-dom'
import { product } from '../data/api'

const   Product = () => {
  return (
    <div className='container'>
      <div className='row'>
        {
          product.map((x)=>{
            return(
              <div className='col-md-4 col-lg-3 col-sm-6 col-12 my-3'>
                <div className='card'>
                 <Link to={`/product/${x.id}`}>
                 <img src={x.image} className='card-img-top' alt={x.name} style={{aspectRatio:2/3, cursor:"pointer"}} />
                 </Link>
                  <div className='card-body'>
                    <h5 className='card-title'>{x.title.slice(0,20)}</h5>
                    <p className='card-text'>{x.description}</p>
                    <p className='card-text'>Price: {x.price}</p>
                  </div>
                  <div className='card-footer'>
                    <a href='#' className='btn btn-primary'>Add to Cart</a>
                  </div>
                  {/* <a href='#' className='btn btn-warning'>Edit</a>
                  <a href='#' className='btn btn-danger'>Delete</a> */}
                  {/* <button className='btn btn-primary'>Add to Cart</button> */}
                  </div>


                </div>
            )
          })
        }
      </div>
      
    
    </div>
  )
}

export default Product

