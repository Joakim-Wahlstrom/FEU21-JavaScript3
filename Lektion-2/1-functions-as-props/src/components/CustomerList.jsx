import CustomerRow from './CustomerRow'

const CustomerList = ({ customers, removeCustomer }) => {

  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Customer Name</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        
        {
          customers && customers.map(customer => <CustomerRow removeCustomer={removeCustomer} key={customer.id} customer={customer} />)
        }

        {
          !customers.length && (
            <tr>
              <td>No customers to show</td>
              <td></td>
              <td></td>
            </tr>
          )
        }

        
            
      </tbody>
    </table>
  )
}

export default CustomerList