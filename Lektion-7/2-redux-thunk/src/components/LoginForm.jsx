import { useState } from 'react'

const LoginForm = ({setLogin}) => {
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

  return (
    <div className='card'>
      <h2>Login</h2>
      <form>
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
          <button className='btn'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm