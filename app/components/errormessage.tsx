import styles from './errormessage.module.css'

export default function ErrorMessage() {
  return (
    <span className={styles['error-message']}>
      Data fetching failed. API might be down 😥
    </span>
  )
}