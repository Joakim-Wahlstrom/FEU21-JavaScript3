import { useState } from 'react'

export const AddCustomerForm = () => {

  // const customerName = useRef()
  const [customerName, setCustomerName] = useState('')

  const addCustomer = (e) => {
    e.preventDefault()

    // lägg till kunden i listan
  }

  return (
    <form onSubmit={addCustomer}>
      <h2 className="text-center mb-4">Add Customer</h2>
      <div className="input-group">
        <input type="text" className="form-control" value={customerName} onChange={e => setCustomerName(e.target.value)} placeholder="Enter customer name" />
        <button className="btn btn-primary">Add Customer</button>
      </div>
    </form>
  )
}


