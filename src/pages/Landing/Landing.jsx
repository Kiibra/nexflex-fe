import styles from './Landing.module.css'

// components
import HomeScreen from '../../components/HomeScreen/HomeScreen'
import AuthScreen from '../../components/AuthScreen/AuthScreen'

const Landing = ({ user, handleLogout }) => {

  return (
    <main className={styles.container}>
      <nav >
        <div>
          {user ? <HomeScreen user={user} handleLogout={handleLogout} /> : <AuthScreen />}
        </div>
      </nav>
    </main>
  )
}

export default Landing
