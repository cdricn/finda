import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles['header-container']}>
      <span className={styles['header-title']}>finda</span>
      <div className={styles['github-icon']}></div>
    </header>
  )
}