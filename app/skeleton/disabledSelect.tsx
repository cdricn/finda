import styles from './skeleton.module.css';

export default function DisabledSelect() {
  return (
    <select className={styles['select-disabled']} defaultValue="default" >
      <option value="default" disabled>--Choose a gamejam--</option>
    </select>
  )
}