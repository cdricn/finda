import styles from './postsSkeleton.module.css';

export default async function PostsSkeleton() {

  return (
    <div className={styles['page-info-container']}>
      <div className={[styles['body-width'], styles['animate'], styles['body-shimmer']].join(' ')}>
        <p className={styles['loading']}>Loading...</p>
      </div>
    </div> 
  )
}