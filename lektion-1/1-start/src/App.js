import './App.css';

function App() {

  const handleClick = (name) => {
    console.log('yaay, ' + name + ' tryckte på knappen')
  }


  return (
    <div>
      <h1>hej</h1>
      <button onClick={ (e) => handleClick('Joakim') }>Tryck här</button>
    </div>
  )
}

export default App;
