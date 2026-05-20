import styles from './header.module.css'
import { DiGithubBadge } from "react-icons/di";

export default function Header() {
  return (
    <a href='https://github.com/cdricn/finda' target='_' 
      className={styles['github-icon']}>
        <DiGithubBadge />
    </a>
  )
}