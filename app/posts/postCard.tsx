import styles from './posts.module.css';
import { ForumPosts } from '../lib/interface';

export default function PostCard({entry, key}:{entry:ForumPosts, key:string}) {

  const date = entry.datePosted.slice(0, -17) 
  const replies = entry.replies > 0 ? 
    <span>{entry.replies} replies</span> : <span>No replies</span>

  return (
    <li className={styles['post-card']} key={key}>
      <div className={styles['card-content']}>
        <a href={entry.url} target='_'>
          <h2>{entry.title}</h2>
        </a>
        <span>by {entry.author}</span>
        <p>{entry.content}</p>
      </div>
      <div className={styles['card-details']}>
        <span>{date}</span><br/>
        <span>{replies}</span>
      </div>
    </li>
  )
}