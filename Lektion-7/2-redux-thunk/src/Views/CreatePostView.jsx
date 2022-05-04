import { useEffect, useState } from 'react'
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../store/actions/postsAction'
import { useNavigate } from 'react-router-dom'

const CreatePostView = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loading = useSelector(state => state.posts.loading)

  const [addedPost, setAddedPost] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    body: ''
  })

  const onChange = e => {
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    // const res = await axios.post('http://localhost:8080/posts', formData)
    // console.log(res)

    dispatch(addPost(formData))
    setAddedPost(true)
  }

  useEffect(() => {
    if(!loading && addedPost) {
      navigate('/')
    }
  }, [loading, addedPost, navigate])

  return (
    <div className='create-post'>
      <h1>Create new post</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name='title' onChange={onChange} value={formData.title} placeholder='title' className='form-control' />
        <textarea name="body" onChange={onChange} value={formData.body} placeholder='please enter some text...' className='form-control' cols="30" rows="10"></textarea>
        <button className='btn'>{ loading ? 'Loading...' : 'Add post'}</button>
      </form>
    </div>
  )
}

export default CreatePostView