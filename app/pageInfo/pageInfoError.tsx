import styles from './pageInfoError.module.css'

export default function PageInfoError() {
  return (
    <div className={styles['page-info-container']}>
      <h1 className={styles['page-title']}>Page does not exist.</h1>
    </div> 
  )
}