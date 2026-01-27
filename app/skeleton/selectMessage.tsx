import styles from './selectMessage.module.css';

export default function SelectMessage({text}:{text:string}) {
  return (
    <select className={styles['select-disabled']} defaultValue="default">
      <option value="default" disabled>{text}</option>
    </select>
  )
}