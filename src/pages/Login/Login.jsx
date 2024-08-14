import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// services
import * as authService from '../../services/authService'

// css
import styles from './Login.module.css'

const LoginPage = ({ handleAuthEvt }) => {
  const navigate = useNavigate()

  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

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
      await authService.login(formData)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      console.log(err)
      setMessage(err.message)
    }
  }

  const { email, password } = formData

  const isFormInvalid = () => {
    return !(email && password)
  }

  return (
    <main className={styles.container}>

      <div className={styles.formContainer}>
        <p className={styles.message}>{message}</p>
        <h2>Log In</h2>
        <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
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
        <div>
          <button className={styles.button} disabled={isFormInvalid()}>
            Log In
          </button>
        </div>
        <div className={styles.nonmember}>
            Don't have an account? 
            <Link to={"/auth/signup"}> Sign Up</Link>
          </div>
      </form>
      </div>
    </main>
  )
}

export default LoginPage
