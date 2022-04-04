import React from 'react'

const Header = () => {

    const handleClick = (name) => {
        console.log('yaay, ' + name + ' tryckte på knappen')
      }

  return (
    <> 
        <h1>hej</h1>
        <button onClick={ () => handleClick('Joakim') }>Tryck här</button>
    </>
  )
}

export default Header