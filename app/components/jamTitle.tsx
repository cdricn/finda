import styles from './jamTitle.module.css';
import { GameJam } from '@/app/lib/interface';

export default function JamTitle({jamDetails}:{jamDetails : GameJam}) {
  return (
    <div className={styles['jam-info-container']}>
      <h1 className={styles['jam-title']}>
        {jamDetails.url == ''? 
          <p>Select a gamejam!</p> :
          <a href={jamDetails.url} target='_'>{jamDetails.title}</a>
        }
      </h1>
      <div className={styles['jam-info']}>
        <span>Hosted by: {jamDetails.host ? jamDetails.host : '--'}</span>
        <span>Members: {jamDetails.members}</span>
      </div>
    </div>
  )
}