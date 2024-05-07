import styles from './Loader.module.scss';

export default function ProductLoader() {
  return (
    <div className={styles.productLoader}>
      {
        [...Array(10)].map((_, index) => (
          <div key={index} className={styles.productItem}>
            <div className={styles.productImg}></div>
            <div className={styles.productText}></div>
          </div>
        ))
      }
    </div>
  );
};