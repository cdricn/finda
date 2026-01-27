import styles from './disabledSelect.module.css';

export default function DisabledSelect() {
  return (
    <select className={styles['select-disabled']} defaultValue="default">
      <option value="default" disabled>Loading gamejams...</option>
    </select>
  )
}