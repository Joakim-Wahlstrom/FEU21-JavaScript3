import { useState } from 'react'
import './App.css';
import BlogList from './components/BlogList/BlogList';
import Modal from './components/Modal/Modal';
import SplitModal from './components/Modal/SplitModal';
import Title from './components/Title/Title';

function App() {

  const [showModal, setShowModal] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  const [showModal3, setShowModal3] = useState(false)

  const handleClose = () => {
    setShowModal(false)
    setShowModal2(false)
    setShowModal3(false)
  }

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
          <button onClick={() => setShowModal(true)}>Show Modal</button>
          <button onClick={() => setShowModal2(true)}>Show Modal2</button>
          <button onClick={() => setShowModal3(true)}>Show Modal3</button>
        </div>
      </div>

      { showModal && 
        <Modal handleClose={handleClose}>
          <h2>Cookies</h2>
          <p>this site uses cookis and the are very tasty</p>
        </Modal> 
      }
      { showModal2 && 
        <Modal handleClose={handleClose} sales={true}>
          <h2>Sale</h2>
          <p>Buy my stuff!</p>
        </Modal> 
      }
      {
        showModal3 &&
        <SplitModal left={
          <div>Det här ligger till vänster</div>
        } right={
          <div>det här ligger till höger</div>
        } />
      }

    </div>
  );
}

export default App;
