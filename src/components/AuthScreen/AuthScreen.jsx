// import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

import styles from './AuthScreen.module.css'

const AuthScreen = () => {
  const [email, setEmail] = useState("")

  return (
    <main className={styles.main}>
      <div className={styles.mainContent}>
        <div className={styles.intro}>
          <h1>Unlimited movies, TV shows, and more.</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
        <form className={styles.authForm}>
          <input
            type="email"
            value={email}
            name="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className={styles.button}>
            Get Started
            <ChevronRight />
          </button>
        </form>
      </div>
    </main>
  )
}

export default AuthScreen
