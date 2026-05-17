import styles from './pageInfoSkeleton.module.css';

export default async function PageInfoSkeleton() {

  return (
    <div className={styles['page-info-container']}>
      <div className={styles['title-shimmer']}>title</div>
      <div className={styles['body-shimmer']}>host name</div>
      <div className={styles['body-shimmer']}>date</div>
    </div> 
  )
}