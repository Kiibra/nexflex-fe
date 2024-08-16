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

      {/* 1st section */}
      <div className={styles.sectionContainer}>
        <div className={styles.contents}>
          <div className={styles.leftHalf}>
            {/* Left half content here */}
            <h1>Enjoy on your TV</h1>
            <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray Players, and more.</p>
          </div>
          <div className={styles.rightHalf}>
            {/* Right half content here */}
            <div className={styles.imgContainer}>
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

      {/* 2nd section */}
      <div className={styles.sectionContainer}>
        <div className={styles.contents}>
          <div className={styles.leftHalf}>
            {/* Left half content here */}
            <div className={styles.imgContainer}>
              <img src="/assets/stranger-things-lg.png" alt="TV image"  className={styles.tvImage}/>
              <div className={styles.secondImage}>
                <img src="/assets/stranger-things-sm.png" alt="image" />
              </div>
              <div className={styles.items}>
                <div>
                  <span>Stranger Things</span>
                  <span>Downloading...</span>
                </div>
                <img src="/assets/download-icon.gif" alt="icon" />
              </div>
              
            </div>
          </div>
          <div className={styles.rightHalf}>
            {/* Right half content here */}
            <h1>Download your shows to watch offline</h1>
            <p>Save your favorites easily and always have something to watch.</p>
          </div>
        </div>
      </div>

      {/* separator */}
      <div className={styles.separator}> </div>

    </main>
  )
}

export default Landing
