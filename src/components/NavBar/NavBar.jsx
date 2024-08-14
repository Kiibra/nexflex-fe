import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img src="/assets/nexflex-logo.png" alt="Nexflex logo" className={styles.logo} />
      </Link>
    </nav>
  )
}

export default Navbar
