import styles from './placeholders.module.css'

export default function PlaceholderNoResult() {
  return (
    <div className={styles['no-result-placeholder']}>
      <span>Nothing here!</span><br/>
      <span>Try looking in a different game jam.</span>
    </div>
  )
}