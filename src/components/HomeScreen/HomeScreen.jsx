import { NavLink } from 'react-router-dom'

//css
import styles from './HomeScreen.module.css'
const HomeScreen = ({user, handleLogout}) => {
  return (
  
    <div className= {styles.links}>
    <p>Welcome, {user.name}</p>
    <h3><NavLink to="/profiles">Profiles</NavLink></h3>
    <h3><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></h3>
    <h3><NavLink to="/auth/change-password">Change Password</NavLink></h3>
    <h1>hello, {user ? user.name : 'friend'}</h1>
  </div>
  )
}

export default HomeScreen
