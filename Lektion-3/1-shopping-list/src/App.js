import { useState } from 'react'
import './App.css';
import { v4 as uuidv4} from 'uuid'
import Header from './components/Header';
import ShoppingList from './components/ShoppingList';
import AddItemForm from './components/AddItemForm';
import Modal from './components/Modal';

function App() {
  
  const [showModal, setShowModal] = useState(false)
  const [items, setItems] = useState([
    {
      id: uuidv4(),
      product: 'milk',
      completed: false
    },
    {
      id: uuidv4(),
      product: 'bread',
      completed: true
    },
    {
      id: uuidv4(),
      product: 'butter',
      completed: false
    }
  ])


  const clearList = () => {
    setItems([])
    setShowModal(false)
  }

  const addItem = (product) => {
    setItems(prevItems => {
      return [{ id: uuidv4(), product, completed: false }, ...prevItems]
    })
  }

  return (
    <div className="App container">
      <Header title="Shopping List" setShowModal={setShowModal} />
      <ShoppingList items={items} />
      <AddItemForm addItem={addItem} />
      { showModal && <Modal clearList={clearList} setShowModal={setShowModal} /> }
    </div>
  );
}

export default App;
