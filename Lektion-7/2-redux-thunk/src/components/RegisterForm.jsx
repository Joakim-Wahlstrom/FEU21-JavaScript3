import { useState } from 'react'

const RegisterForm = ({setLogin}) => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
      <h2>Register</h2>
      <form>
        <div className="input-group">
          <label htmlFor="firstName">First Name: </label>
          <input value={formData.firstName} onChange={onChange} type="text" id='firstName' name='firstName' className='form-control' />
        </div>
        <div className="input-group">
          <label htmlFor="lastName">Last Name: </label>
          <input value={formData.lastName} onChange={onChange} type="text" id='lastName' name='lastName' className='form-control' />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email: </label>
          <input value={formData.email} onChange={onChange} type="email" id='email' name='email' className='form-control' />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password: </label>
          <input value={formData.password} onChange={onChange} type="password" id='password' name='password' className='form-control' />
        </div>
        <p>Already a member? <span onClick={() => setLogin(true)} className='link'>login</span></p>
        <div>
          <button className='btn'>Sign up</button>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm