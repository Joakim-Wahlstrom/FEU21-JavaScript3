import { useEffect, useState } from 'react'
import './App.css';
import { v4 as uuidv4} from 'uuid'
import Header from './components/Header';
import ShoppingList from './components/ShoppingList';
import AddItemForm from './components/AddItemForm';
import Modal from './components/Modal';

function App() {
  
  const [showModal, setShowModal] = useState(false)
  const [items, setItems] = useState([])


  const clearList = () => {
    setItems([])
    setShowModal(false)
    // localStorage.setItem('itemsList', JSON.stringify(items))
  }

  const addItem = (product) => {
    setItems(prevItems => {
      return [{ id: uuidv4(), product, completed: false }, ...prevItems]
    })
    // localStorage.setItem('itemsList', JSON.stringify(items))
  }

  const removeItem = id => {
    setItems(prev => {
      return prev.filter(item => item.id !== id)
    })
    // localStorage.setItem('itemsList', JSON.stringify(items))
  }

  const changeItem = (item, newTitle) => {
    item.product = newTitle
    setItems(prev => [...prev])
    // localStorage.setItem('itemsList', JSON.stringify(items))
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
    // localStorage.setItem('itemsList', JSON.stringify(items))

  }

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('itemsList'))
    if(storedItems) {
      setItems(storedItems)
    }

  }, [])

  useEffect(() => {
    localStorage.setItem('itemsList', JSON.stringify(items))
  }, [items])


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
