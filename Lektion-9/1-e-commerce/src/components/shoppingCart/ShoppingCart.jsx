import React from 'react'

const ShoppingCart = () => {
  return (
    <div>
        shoppingcartproduct

        <div className="dropdown-divider"></div>
        <div className="d-flex justify-content-between align-items-center p-2">
            <div>
                <div>Total Price: 0</div>
                <small className='text-muted'>ink. vat</small>
            </div>
            <div>
                <button className='btn btn-warning'>Clear Cart</button>
                <button className='btn btn-info ms-2'>Checkout</button>
            </div>
        </div>
    </div>
  )
}

export default ShoppingCart