import React from 'react'
import { lehngacholiPage2 } from '../data/lehanga'
import { Link } from 'react-router-dom'

const Lehanga = () => {
  return (
    <div className='container'>
    <div className='row'>
      {
        lehngacholiPage2.map((x)=>{
          return(
            <div className='col-md-4 col-lg-3 col-sm-6 col-12 my-3'>
              <div className='card'>
                    <Link to={`/lehanga/${x.id}`}>
                    <img src={x.image} className='card-img-top' alt={x.name} style={{aspectRatio:2/3, cursor:"pointer"}} /></Link>
                <div className='card-body'>
                  <h5 className='card -title'>{x.title}</h5>
                  <p className='card-text'>{x.brand}</p>
                  <p className='card-text'>Price: {x.price}</p>
                </div>
                <div className='card-footer'>
                  <a href='#' className='btn btn-primary'>Add to Cart</a>
                </div>
                </div>
                
              </div>
          )
        })
      }
    </div>
  
  </div>
  )
}

export default Lehanga
