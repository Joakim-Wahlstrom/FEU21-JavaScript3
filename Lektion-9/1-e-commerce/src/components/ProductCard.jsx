import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className="col">
        <div className="card h-100">
            <div className="img-container">
                <img src={product.imgURL} className="image" />  
            </div>
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">
            {product.description.slice(0,50)}...
            </p>
            <div className='d-flex justify-content-between align-items-center'>
                <button className='btn btn-info'>Add To Cart</button>
                <p className='text-danger h5 m-0'>{product.price}</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProductCard