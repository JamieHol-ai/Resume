// components/experience-timeline.js
import styles from './timeline.module.css'; // import CSS module
import utilStyles from '../styles/utils.module.css';

export default function Timeline({ timelineData }) {
  return (
    <div className={styles.timeline}>
      {timelineData.map(({ id, title, 'start-date': startDate, 'end-date': endDate, description, url }, index) => (
        <div key={id} className={`${styles.container} ${index % 2 === 0 ? styles.left : styles.right}`}>
          <div className={`${styles.content} ${utilStyles.darkText}`}>
            <h2>{title}</h2>
            <h3>From {startDate} to {endDate}</h3>
            <p>{description}</p>
            {url && url !== '' && <a href={url}>Read more</a>}
          </div>
        </div>
      ))}
    </div>
  );
}