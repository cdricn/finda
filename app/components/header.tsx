import styles from './header.module.css'
import { DiGithubBadge } from "react-icons/di";

export default function Header() {
  return (
    <header className={styles['header-container']}>
      <span className={styles['header-title']}>findateam</span>
      <a href='https://github.com/cdricn/finda' target='_' 
        className={styles['github-icon']}>
          <DiGithubBadge />
      </a>
    </header>
  )
}