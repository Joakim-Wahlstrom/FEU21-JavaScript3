import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import EventDetails from './Pages/EventDetails';
import EventsView from './Pages/EventsView';

const App:React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={ <EventsView />} />
          <Route path='/event/:id' element={ <EventDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
