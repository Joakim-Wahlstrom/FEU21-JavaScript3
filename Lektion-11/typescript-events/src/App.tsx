import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddEventModal from './components/AddEventModal/AddEventModal';
import Navbar from './components/Navbar/Navbar';
import EventDetails from './Pages/EventDetails';
import EventsView from './Pages/EventsView';

const App:React.FC = () => {

  const [showModal, setShowModal] = React.useState(true)



  return (
    <div className="App">
      <Navbar setShowModal={setShowModal} />
      <div className="container">
        <Routes>
          <Route path='/' element={ <EventsView />} />
          <Route path='/event/:id' element={ <EventDetails />} />
        </Routes>
      </div>
      { showModal && <AddEventModal />}
    </div>
  );
}

export default App;
