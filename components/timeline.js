// components/experience-timeline.js
import styles from './timeline.module.css'; // import CSS module
import utilStyles from '../styles/utils.module.css';

export default function Timeline({name}) {
  return (
    <div className={styles.timeline}>
        <div className={`${styles.container} ${styles.left}`}>
            <div className={`${styles.content} ${utilStyles.darkText}`}>
              <h2>2017</h2>
              <p>Lorem ipsum..</p>
            </div>
        </div>
        <div className={`${styles.container} ${styles.right}`}>
            <div className={`${styles.content} ${utilStyles.darkText}`}>
              <h2>2016</h2>
              <p>Lorem ipsum..</p>
            </div>
        </div>
    </div>
  );
}