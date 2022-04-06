import './App.css';
import Header from './components/Header';
import { AddCustomerForm } from './components/AddCustomerForm';
import CustomerList from './components/CustomerList'

function App() {
  return (
    <div>
      <Header title="Customer List" />
      <div className="container mt-5">
        <AddCustomerForm />
        <CustomerList />
      </div>
    </div>
  );
}

export default App;
