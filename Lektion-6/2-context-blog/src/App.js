import { useState } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import PostsView from './views/PostsView';
import CreatePost from './views/CreatePost';

function App() {

  const [posts, setPosts] = useState([
    {
      id: 'akjhsb23jknb',
      title: 'My first post',
      body: 'This is my first post ever!'
    },
    {
      id: 'akjasfgf3fcds',
      title: 'My second post',
      body: 'This is my second post!'
    },
    {
      id: 'akjasdf3sdcf2',
      title: 'My third post',
      body: 'This is my third post!'
    }
  ])

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <Routes>
          <Route path='/' element={<PostsView posts={posts} /> } />
          <Route path='/create' element={<CreatePost />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
