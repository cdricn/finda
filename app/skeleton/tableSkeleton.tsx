import styles from './tableSkeleton.module.css';

export default function TableSkeleton() {

  return (
    <>
      <div className={styles['dropdown']}>

      </div>
      <div className={styles['table']}>
        <div className={styles['table-header']}>
          <h2>Title</h2>
          <h2 className={styles['remove-mobile']}>Members</h2>
          <h2 className={styles['remove-mobile']}>Ends in</h2>
        </div>
        <div className={styles['table-body']}>
          
        </div>
      </div>
    </>
  )
}