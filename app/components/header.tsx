import styles from './header.module.css';
import { GameJam } from '@/app/lib/interface';

export default function Header({jamDetails}:{jamDetails : GameJam}) {
  return (
    <>
      <h1 className={styles['header']}>
        {jamDetails.url == ''? 
          <p>Select a gamejam!</p> :
          <a href={jamDetails.url} target='_'>{jamDetails.title}</a>
        }
      </h1>
      <div className={styles['header-info']}>
        <span>Hosted by: {jamDetails.host ? jamDetails.host : '--'}</span>
        <span>Members: {jamDetails.members}</span>
      </div>
    </>
  )
}