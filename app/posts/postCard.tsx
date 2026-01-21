import styles from './postCard.module.css';
import { ForumPosts } from '../lib/interface';

export default function PostCard({entry}:{entry:ForumPosts}) {

  const date = entry.datePosted.slice(3, -16) + entry.datePosted.slice(0, 3);
  const replies = entry.replies > 0 ? 
    <span className={styles['card-replies']}>
      <span>{entry.replies}</span> replies
    </span> : 
    <span>No replies</span>;

  return (
    <li className={styles['card-container']}>
      <div className={styles['card-content']}>
        <a href={entry.url} target='_' className={styles['card-title']}>
          <h2>{entry.title}</h2>
        </a>
        <span className={styles['card-author']}>by {entry.author}</span>
        <p>{entry.content}</p>
      </div>
      <div className={styles['card-details']}>
        <span className={styles['card-date']}>{date}</span><br/>
        {replies}
      </div>
    </li>
  )
}