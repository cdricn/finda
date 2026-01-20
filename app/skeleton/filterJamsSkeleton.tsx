import styles from './skeleton.module.css'
import DisabledSelect from "./disabledSelect";

export default function FilterJamsSkeleton() {
  return (
    <div className={styles['jam-info-container']}>
      <h1 className={styles['jam-title']}>
        <p>Find a team!</p>
      </h1>
      <div className={styles['jam-info']}></div>
      <div className={styles['select-disabled']}>
        <DisabledSelect />
      </div>
    </div>
  )
}