// components/Footer.js

import styles from './footer.module.css';
import utilStyles from '../styles/utils.module.css';

function Footer() {
  return (
    <div className={utilStyles.lightSec}>
      <footer className={styles.footer}>
        <div className={styles.contactDetails}>
            <div className={utilStyles.headingMd}>
                <p>Contact me:</p>
            </div>
          <p>Phone: 07465 992898</p>
          <p>Email: <a href="mailto:jamieholroyde@gmail.com">jamieholroyde@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/jamieholroyde/" target="_blank" rel="noopener noreferrer">jamieholroyde</a></p>
          <p>GitHub: <a href="https://github.com/JamieHol-ai" target="_blank" rel="noopener noreferrer">JamieHol-ai</a></p>
        </div>
        <p className={styles.sourceCode}>Source Code: <a href="https://github.com/JamieHol-ai/resume" target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
      </footer>
    </div>
  );
}

export default Footer;