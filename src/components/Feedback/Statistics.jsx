import styles from "./Feedback.module.css";

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div>
          <span className={styles.statsItem}>Good: {good}</span>
          <span className={styles.statsItem}>Neutral: {neutral}</span>
          <span className={styles.statsItem}>Bad: {bad}</span>
          <span className={styles.statsItem}>Total: {total}</span>
          <span className={styles.statsItem}>Positive feedback: {positivePercentage} %</span>
        </div>
    )
}

export default Statistics