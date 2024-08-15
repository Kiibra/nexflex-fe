import styles from './Landing.module.css'

// components
import HomeScreen from '../../components/HomeScreen/HomeScreen'
import AuthScreen from '../../components/AuthScreen/AuthScreen'

const Landing = ({ user, handleLogout }) => {
  return (
    <main className={styles.container}>
      <nav>
        <div>
          {user ? <HomeScreen user={user} handleLogout={handleLogout} /> : <AuthScreen />}
        </div>
      </nav>

      {/* separator */}
      <div className={styles.separator}> </div>

      {/* first section */}
      <div className={styles.firstSection}>
        <div className={styles.contents}>
          <div className={styles.leftHalf}>
            {/* Left half content here */}
            <h1>Enjoy on your TV</h1>
            <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray Players, and more.</p>
          </div>
          <div className={styles.rightHalf}>
            {/* Right half content here */}
            <div className={styles.tvContainer}>
              <img src="/assets/tv.png" alt="TV image" className={styles.tvImage} />
              <div className={styles.videoContainer}>
                <video autoPlay muted>
                <source src="/hero-vid.mp4" type="video/mp4" 
                />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* separator */}
      <div className={styles.separator}> </div>

    </main>
  )
}

export default Landing
