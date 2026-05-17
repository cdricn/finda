import styles from './errorMessage.module.css';

export default function ErrorMessage() {

  return (
    <div className={styles['message-container']}>
      <p>An error occured! Could not fetch data.</p>
    </div>
  )
}