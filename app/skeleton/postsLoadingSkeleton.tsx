import styles from './postsLoadingSkeleton.module.css'

export default function postsLoadingSkeleton() {

  return (
    <ul className={styles['skeleton-container']}>
      <li className={styles['skeleton-card']}>
        <div className={styles['skeleton-content']}></div>
      </li>
      <li className={styles['skeleton-card']}>
        <div className={styles['skeleton-content']}></div>
      </li>
      <li className={styles['skeleton-card']}>
        <div className={styles['skeleton-content']}></div>
      </li>
    </ul>
  )
}