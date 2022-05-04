import './App.css';
import Navbar from './components/Navbar';
import Views from './Views/Views';

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from './store/actions/postsAction'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Views />
      </div>
    </div>
  );
}

export default App;
