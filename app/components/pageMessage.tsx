import styles from './pageMessage.module.css'

export default function PageMessage({mainText, subText}:{mainText: string, subText: string}) {
  return (
    <div className={styles['no-result-placeholder']}>
      <span>{mainText}</span><br/>
      <span>{subText}</span>
    </div>
  )
}