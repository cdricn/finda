import styles from '../components/header.module.css'

export default function HeaderSkeleton() {
  return (
    <>
      <h1 className={styles['header']}>
        <span>Find a team!</span>
      </h1>
      <div className={styles['gamejam-info']}>
        <span>Hosted by: --- </span>
        <span>Members: --- </span>
      </div>
      <div className={styles['select-container']}>
        <select name="gamejams" id="gamejams-select" className={styles['gamejams-select']}>
          <option value="" disabled>--Choose a gamejam--</option>
        </select>
      </div>
    </>
  )
}