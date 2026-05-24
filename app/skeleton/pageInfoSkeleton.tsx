import styles from './pageInfoSkeleton.module.css';

export default async function PageInfoSkeleton() {

  return (
    <div className={styles['page-info-container']}>
      <div className={[styles['animate'], styles['title-shimmer']].join(' ')}></div>
      <div className={[styles['body-width'], styles['animate'], styles['body-shimmer']].join(' ')}></div>
      <div className={[styles['sub-width'], styles['animate'], styles['body-shimmer']].join(' ')}></div>
    </div> 
  )
}