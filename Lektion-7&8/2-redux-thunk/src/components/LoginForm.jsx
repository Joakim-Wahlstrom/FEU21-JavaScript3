import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loginUser } from '../store/actions/authActions'

const LoginForm = ({setLogin}) => {
  
  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const onChange = e => {
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleSub = e => {
    e.preventDefault()
    dispatch(loginUser(formData))
  }

  return (
    <div className='card'>
      <h2>Login</h2>
      <form onSubmit={handleSub}>
        <div className="input-group">
          <label htmlFor="email">Email: </label>
          <input value={formData.email} onChange={onChange} type="email" id='email' name='email' className='form-control' />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password: </label>
          <input value={formData.password} onChange={onChange} type="password" id='password' name='password' className='form-control' />
        </div>
        <p>Not a member? <span className='link' onClick={() => setLogin(false)}>register</span></p>
        <div>
          <button className='btn'>{loading ? 'Loading...' : 'Login'}</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm