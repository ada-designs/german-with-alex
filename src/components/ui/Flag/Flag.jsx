import styles from "./Flag.module.css";

export default function Flag({ style = {} }) {
  return (
    <div className={styles.flag} style={style}>
      <span className={`${styles.stripe} ${styles.black}`}></span>
      <span className={`${styles.stripe} ${styles.red}`}></span>
      <span className={`${styles.stripe} ${styles.gold}`}></span>
    </div>
  );
}
