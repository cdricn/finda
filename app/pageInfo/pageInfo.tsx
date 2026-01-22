import styles from './pageInfo.module.css';
import { GameJam } from '@/app/lib/interface';

export default function PageInfo() {
  return (
    <div className={styles['page-info-container']}>
      <h1 className={styles['page-title']}>Find a team!</h1>
      <div className={styles['page-info']}></div>
    </div>
  )
}