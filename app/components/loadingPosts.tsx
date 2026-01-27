import styles from './loadingPosts.module.css'

export default function LoadingPosts() {
  return (
    <div className={styles['loading-container']}>
      <span className={styles['loading-message']}>Loading posts</span>
      <div className={styles['spinner-container']}>
        <div className={styles['spinner']}></div>
      </div>
    </div>
  )
}