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

  const removeItem = id => {
    setItems(prev => {
      return prev.filter(item => item.id !== id)
    })
  }

  const changeItem = (item, newTitle) => {
    item.product = newTitle
    setItems(prev => [...prev])
  }

  const toggleComplete = item => {
    // setItems(prevItems => {
    //   const newItems = prevItems.map(_item => {
    //     if(_item.id === item.id) {
    //       _item.completed = !_item.completed
    //       return _item
    //     }

    //     return _item
    //   })

    //   return newItems
    // })

    // const newItems = items.map(_item => {
    //   if(_item.id === item.id) {
    //     _item.completed = !_item.completed
    //     return _item
    //   }

    //   return _item
    // })
    // setItems(newItems)

    item.completed = !item.completed
    setItems(prev => {
      prev.sort((a, b) => a.completed - b.completed) 
      return [...prev]
    })

  }

  return (
    <div className="App container">
      <Header title="Shopping List" setShowModal={setShowModal} />
      <ShoppingList items={items} removeItem={removeItem} changeItem={changeItem} toggleComplete={toggleComplete} />
      <AddItemForm addItem={addItem} />
      { showModal && <Modal clearList={clearList} setShowModal={setShowModal} /> }
    </div>
  );
}

export default App;
