import { useState, useEffect, useCallback } from 'react'
import TodoItem from './TodoItem'
import axios from 'axios'

// const getTodos = async (url) => {
//   const res = await axios.get(url)
//   console.log('data')
//   return res.data
// }

const TodoList = () => {

  const [todos, setTodos] = useState([])
  const [url, setUrl] = useState('http://localhost:8080/todos')

  const getTodos = useCallback(async () => {
    const res = await axios.get(url)
    console.log('data')
    setTodos(res.data)
  }, [url])


  // useEffect(() => {
  //   axios.get(url)
  //     .then(res => {
  //       console.log('data')
  //       setTodos(res.data)
  //     })
  // }, [url])

  useEffect(() => {
    // getTodos(url).then(setTodos)

    getTodos()

  },[getTodos])

  return (
    <div className='container todo-list'>
      {
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      }


      <button className='btn mr' onClick={() => setUrl('http://localhost:8080/todos')}>All users</button>
      <button className='btn' onClick={() => setUrl('http://localhost:8080/todos?user=1')}>user 1</button>
    </div>
  )
}

export default TodoList