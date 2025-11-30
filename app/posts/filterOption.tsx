import styles from './filter.module.css';

export default function FilterOption({
  id, name, label }:
{
  id: string,
  name: string,
  label: string
}) {

  return (
    <ul className={styles['tag-option']}>
      <input type="checkbox" id={id} name={name}/>
      <label>{label}</label>
    </ul>
  )
}