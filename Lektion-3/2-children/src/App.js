import { useState } from 'react'
import './App.css';
import BlogList from './components/BlogList/BlogList';
import Title from './components/Title/Title';

function App() {

  const [blogs, setBlogs] = useState([
    { id: 1, title: 'My first blog', body: 'bla blaha bla bla ingen aning om vad jag ska skriva'},
    { id: 2, title: 'How to use React', body: 'bla blaha bla bla ingen aning om vad jag ska skriva'},
    { id: 3, title: 'CSS wizardry', body: 'bla blaha bla bla ingen aning om vad jag ska skriva'},
  ])

  const subtitle = 'A inblick in my life'

  return (
    <div className="App">
      <Title title="My awesome blog!" subtitle={subtitle} />
      <div className="container">
        <BlogList blogs={blogs} />
        <div className="mt">
          <button>Show Modal</button>
        </div>
      </div>
    </div>
  );
}

export default App;
