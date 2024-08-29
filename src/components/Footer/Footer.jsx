// css
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Created by <a href="https://github.com/Kiibra" target="_blank" rel="noopener noreferrer" > Kibra Buluts.</a>
      </p>
      <p>
        The source code is available on - 
        <a href="https://github.com/Kiibra/nexflex-fe" target="_blank" > this repo</a>
      </p>
    </footer>
  );
}

export default Footer;
