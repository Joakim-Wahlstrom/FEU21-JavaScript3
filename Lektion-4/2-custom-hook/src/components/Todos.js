import { useRef, useState } from 'react'
import { useFetch } from '../hooks/useFetch'

const Todos = () => {

  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos')
  // const { data, loading, error } = useFetch({method: 'GET', url: 'https://jsonplaceholder.typicode.com/todos'})
  const { data, loading, error } = useFetch(url)
  

  return (
    <div className='todo-list'>

    <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos')}>all users</button>
    <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?userId=1')}>user1</button>
    <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?userId=2')}>user2</button>
    <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?userId=3')}>user3</button>
    <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?userId=4')}>user4</button>

    {loading && <p>Loading...</p>}
    {error && <p>{ error }</p>}

    { data &&
      data.map(todo => (
        <div className='todo' key={todo.id}>
          <p className='small'>User id: { todo.userId }</p>
          <p>{ todo.title }</p>
        </div>
      ))
    }
    </div>
  )
}

export default Todos