import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PostsContext } from '../contexts/PostsContext'
import { ThemeContext } from '../contexts/ThemeContext'
import actiontypes from '../reducers/actiontypes'

const CreatePost = () => {

  // const { addPost } = useContext(PostsContext)
  const { dispatch } = useContext(PostsContext)
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const onSub = e => {
    e.preventDefault()
    // addPost(title, body)
    dispatch({
      // type: 'ADD_POST',
      type: actiontypes().posts.addPost,
      post: { title, body }
    })
    navigate("/")
  }

  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark


  return (
    <form className="create-post" onSubmit={onSub} style={{color: theme.text}}>
      <h2 className='title'>Create new post</h2>
      <div className="input-group">
        <label htmlFor="title" className='input-label'>Title: </label>
        <input type="text" style={{ background: theme.bg, color: theme.text }} className='form-control' id='title' value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div className="input-group">
        <label htmlFor="body" className='input-label'>Body: </label>
        <textarea id="body" className='form-control' value={body} onChange={e => setBody(e.target.value)}></textarea>
      </div>
      <button className='btn btn-form'>Create Post</button>
    </form>
  )
}

export default CreatePost