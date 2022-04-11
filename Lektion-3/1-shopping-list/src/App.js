import { useState } from 'react'
import './App.css';
import { v4 as uuidv4} from 'uuid'
import Header from './components/Header';
import ShoppingList from './components/ShoppingList';

function App() {

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

  return (
    <div className="App container">
      <Header title="Shopping List" />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
