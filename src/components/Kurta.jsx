import React from 'react'
import { kurtaPage1 } from '../data/kurta'
import { Link } from 'react-router-dom'

const Kurta = () => {
  return (
    <div className='container'>
      <div className='row'>
        {
          kurtaPage1.map((x)=>{
            return(
              <div className='col-md-4 col-lg-3 col-sm-6 col-12 my-3'>
                <div className='card'>
                 <Link to={`/kurtaPage1/${x.id}`}>
                 <img src={x.image} className='card-img-top' alt={x.name} style={{aspectRatio:2/3, cursor:"pointer"}} />
                 </Link>
                  <div className='card-body'>
                    <h5 className='card-title'>{x.title}</h5>
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

export default Kurta
