import './App.css';
import { useState, useId } from 'react'
import Header from './components/Header';
import { AddCustomerForm } from './components/AddCustomerForm';
import CustomerList from './components/CustomerList'

function App() {

  const [customers, setCustomers] = useState([
    { id: '123456sdff', name: 'Joakim' },
    { id: '123asfdgfd', name: 'Hans' }
  ])

  const addCustomer = (customerName) => {
    setCustomers(oldCustomers => {
      return [...oldCustomers, { id: Date.now().toString(), name: customerName }]
    })
  }

  const removeCustomer = id => {
    setCustomers(oldCustomers => {
      return oldCustomers.filter(customer => customer.id !== id)
    })
  }

  return (
    <div>
      <Header title="Customer List" />
      <div className="container mt-5">
        <AddCustomerForm addCustomer={addCustomer} />
        <CustomerList customers={customers} removeCustomer={removeCustomer} />
      </div>
    </div>
  );
}

export default App;
