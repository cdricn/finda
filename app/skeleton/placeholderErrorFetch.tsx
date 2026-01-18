import styles from './placeholders.module.css'

export default function PlaceholderErrorFetch() {
  return (
    <div className={styles['no-result-placeholder']}>
      <span>An error occured during fetching.</span><br/>
      <span>Please try again later.</span>
    </div>
  )
}