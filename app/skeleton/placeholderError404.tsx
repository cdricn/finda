import styles from './placeholders.module.css'

export default function PlaceholderError404() {
  return (
    <div className={styles['no-result-placeholder']}>
      <span>Error 404.</span><br/>
      <span>Try selecting a different game jam.</span>
    </div>
  )
}