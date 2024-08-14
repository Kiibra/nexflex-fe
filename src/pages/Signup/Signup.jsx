// npm modules
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// services
import * as authService from '../../services/authService'

// css
import styles from './Signup.module.css'

const Signup = ({ handleAuthEvt }) => {
  const navigate = useNavigate()

  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = evt => {
    setMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      if (!import.meta.env.VITE_BACK_END_SERVER_URL) {
        throw new Error('No VITE_BACK_END_SERVER_URL in front-end .env')
      }
      setIsSubmitted(true)
      await authService.signup(formData)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      console.log(err)
      setMessage(err.message)
      setIsSubmitted(false)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <main className={styles.container}>
      <p className={styles.message}>{message}</p>

      <div className={styles.formContainer}>
        <h2>Sign Up</h2>
        <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Name
            <input 
              type="text"  
              placeholder='John Doe' 
              value={name} 
              name="name" 
              onChange={handleChange} 
            />
          </label>
          <label className={styles.label}>
            Email
            <input
              type="text"
              value={email}
              name="email"
              placeholder="you@example.com"
              onChange={handleChange}
            />
          </label>
          <label className={styles.label}>
            Password
            <input
              type="password"
              value={password}
              name="password"
              onChange={handleChange}
            />
          </label>
          <label className={styles.label}>
            Confirm Password
            <input
              type="password"
              value={passwordConf}
              name="passwordConf"
              onChange={handleChange}
            />
          </label>
          <div>
            <button
              className={styles.button}
              disabled={isFormInvalid() || isSubmitted}
            >
              {!isSubmitted ? 'Sign Up' : '🚀 Sending...'}
            </button>
          </div>
          <div className={styles.members}>
            Already a member? 
            <Link to={"/auth/login"}> Sign in</Link>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Signup
