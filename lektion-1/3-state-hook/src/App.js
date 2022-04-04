import { useState } from 'react';
import './App.css';

function App() {

  // let counter = 0
  const [counter, setCounter] = useState(0)

  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Post 1',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nam repudiandae natus exercitationem pariatur incidunt adipisci omnis dolor sed alias.'
    },
    {
      id: 2,
      title: 'Post 2',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nam repudiandae natus exercitationem pariatur incidunt adipisci omnis dolor sed alias.'
    },
    {
      id: 3,
      title: 'Post 3',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nam repudiandae natus exercitationem pariatur incidunt adipisci omnis dolor sed alias.'
    },
  ])

  // console.log(counter, 'direkt i komponenten')

  const increment = () => {
    // counter += 1;
    setCounter(previousCounterValue => previousCounterValue +1)
    console.log(counter, 'inne i funktionen')
  }

  return (
    <div className="App">
      { isLoggedIn ? <h1 className='text-center mb-2'>Posts</h1> : <h1 className='text-center mb-2'>Please Login!</h1> }

      <h1>{ counter }</h1>
      <button onClick={increment}>inrement</button>

      <div className="container">



      </div>


      <button onClick={() => setIsLoggedIn(prev => !prev)}>{isLoggedIn ? 'Logout' : 'Login'}</button>

    </div>
  );
}

export default App;
