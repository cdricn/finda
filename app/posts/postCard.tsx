import styles from './postCard.module.css';
import { ForumPosts } from '../lib/interface';

export default function PostCard({entry}:{entry:ForumPosts}) {

  const date = entry.datePosted.slice(3, -16) + entry.datePosted.slice(0, 3);
  const replies = entry.replies > 0 ? `${entry.replies} replies`: 'No replies';

  return (
    <li className={styles['card-container']}>
      <a href={entry.url} target='_' className={styles['card-wrapper']}>
        <div className={styles['card-content']}>
          <h2 className={styles['card-title']}>{entry.title}</h2>
          <span className={styles['card-author']}>by {entry.author}</span>
          <p>{entry.content}</p>
        </div>
        <div className={styles['card-details']}>
          <span className={styles['card-date']}>{date}</span><br/>
          <span className={styles['card-replies']}>{replies}</span>
        </div>
      </a>
    </li>
  )
}