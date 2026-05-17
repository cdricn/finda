import styles from './tableError.module.css';

export default function TableError() {
  const griditems = [1, 1, 1];

  return (
    <>
      <div className={styles['button']}>
        <span>Ongoing</span>
      </div>
      <div className={styles['table']}>
        <div className={styles['table-header']}>
          <h2>Title</h2>
          <h2 className={styles['remove-mobile']}>Members</h2>
          <h2 className={styles['remove-mobile']}>Ends in</h2>
        </div>
        <div className={styles['table-body']}>
          <p>An error occured! Could not fetch data.</p>
        </div>
      </div>
    </>
  )
}