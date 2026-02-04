import Link from 'next/link';
import styles from './header.module.css'
import { DiGithubBadge } from "react-icons/di";

export default function Header() {
  return (
    <header className={styles['header-container']}>
      <Link href={'https://findateam.vercel.app/'} className={styles['header-title']}>
        findateam
      </Link>
      <a href='https://github.com/cdricn/finda' target='_' 
        className={styles['github-icon']}>
          <DiGithubBadge />
      </a>
    </header>
  )
}