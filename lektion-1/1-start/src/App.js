import './App.css';
import Header from './components/Header';
import Person from './components/Person';

function App() {




  return (
    <div>
      <Header />
      <br />
      <Person name="Joakim" age="35" />
      <Person name="Jeanette" age="34" />
      <Person name="Hans" age="37" />
    </div>
  )
}

export default App;
