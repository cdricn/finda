'use client'

import styles from './posts.module.css';
import { useParams, useSearchParams } from 'next/navigation';
import { ForumPosts } from '../../lib/interface';
import Message from './components/message';

export default function Posts({data}:{data:ForumPosts[]}) {
  const params = useParams();
  const searchParams = useSearchParams();

  return (
    <>
      {data && Object.keys(data).length > 0 ?
        <>
          <ul className={styles['posts-container']}>
            {data.filter((item)=>
                searchParams.getAll("tags").some((param)=>
                  item.tags[param] !== undefined
                )
              ).map((item, index)=>{
                const date = item.datePosted.slice(3, -16) + item.datePosted.slice(0, 3);
                const replies = item.replies > 0 ? `${item.replies} replies`: 'No replies';

                return (
                  <li className={styles['card-container']} key={item.title+index}>
                    <a href={item.url} target='_' className={styles['card-wrapper']}>
                      <div className={styles['card-content']}>
                        <h2 className={styles['card-title']}>{item.title}</h2>
                        <span className={styles['card-author']}>by {item.author}</span>
                        <p>{item.content}</p>
                      </div>
                      <div className={styles['card-details']}>
                        <span className={styles['card-date']}>{date}</span><br/>
                        <span className={styles['card-replies']}>{replies}</span>
                      </div>
                    </a>
                  </li>
                )
              })
            }
          </ul>
          <Message text="Can't find what you're looking for?" link={params.id}/>
        </> :
        <Message text="No results found." link={params.id}/>
      }
    </>
  )
}