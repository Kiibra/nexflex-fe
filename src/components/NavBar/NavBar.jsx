import { Link, NavLink } from 'react-router-dom'

import styles from './NavBar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img src="/assets/nexflex-logo.png" alt="Nexflex logo" className={styles.logo} />
      </Link>
      <div className={styles.spacer}></div> {/* to push the signIn to the right */}
      <div className={styles.signIn}>
        <NavLink to="/auth/login">Sign In</NavLink>
      </div>
    </nav>
  )
}

export default Navbar