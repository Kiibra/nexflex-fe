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
                <source src="/assets/hero-vid.mp4" type="video/mp4" 
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
            <div className={styles.strangerThings}>
              <img src="/assets/stranger-things-lg.png" alt="Stranger Things img" />
              <div className={styles.lowerBanner}>
              <div className={styles.smImage}>
                <img src="/assets/stranger-things-sm.png" alt="image" />
              </div>
              <div className={styles.bannerSpans}>
                  <span className={styles.firstSpan}>Stranger Things</span>
                  <span className={styles.secSpan}>Downloading...</span>
              </div>
                <img className={styles.downloadIcon} src="/assets/download-icon.gif" alt="icon" />
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

       {/* 3rd section */}
      <div className={styles.sectionContainer}>
        <div className={styles.contents}>
          <div className={styles.leftHalf}>
            {/* Left half content here */}
            <h1>Watch everywhere</h1>
            <p>Stream unlimited movies and TV shows on your phone tablet, laptop, and TV.</p>
          </div>
          <div className={styles.rightHalf}>
            {/* Right half content here */}
            <div className={styles.imgContainer}>
              <img src="/assets/device-pile.png" alt="TV image" className={styles.tvImage} />
              <div className={styles.videoContainer}>
                <video autoPlay muted>
                <source src="/assets/video-devices.mp4" type="video/mp4" 
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
