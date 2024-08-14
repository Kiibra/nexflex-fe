import { NavLink } from 'react-router-dom'
// css
import styles from './Landing.module.css'

const Landing = ({ user, handleLogout}) => {
  return (
    <main className={styles.container}>
      <nav className={styles.container}>
      {user ?
      <div className= {styles.links}>
          <p>Welcome, {user.name}</p>
          <h3><NavLink to="/profiles">Profiles</NavLink></h3>
          <h3><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></h3>
          <h3><NavLink to="/auth/change-password">Change Password</NavLink></h3>
          <h1>hello, {user ? user.name : 'friend'}</h1>
        </div>
          :
          <div>
            <p><NavLink to="/auth/login">Log In</NavLink></p>
            <p><NavLink to="/auth/signup">Sign Up</NavLink></p>
          </div>
        }
    </nav>
    </main>
  )
}


export default Landing
