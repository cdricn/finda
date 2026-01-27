import styles from './postFooter.module.css';
import { ParamValue } from 'next/dist/server/request/params';

export default function PostFooter({text, link}:{text:string, link:ParamValue}) {

  const communityLink = link ? 
    'https://itch.io/jam/'+ link.toString() + '/community': '';

  return (
    <div className={styles['footer-container']}>
      <span className={styles['footer-text']}>{text}</span>
      <a href={communityLink} className={styles['button-container']} target='_'>
        <span className={styles['button-text']}>Make a post</span>
      </a>
    </div>
  )
}