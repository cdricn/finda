// import { MdViewList, MdViewQuilt  } from "react-icons/md";
import styles from './posts.module.css';
import useSWR from 'swr'
import { FetchPosts } from '../api/fetch/dataFetcher';
import { ForumPosts } from '../lib/interface';

export default function Posts({link}:{link: string}) {
  const { data, error } = useSWR<ForumPosts[]>(`/api/${link}`, FetchPosts, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error.status === 404) return;
      if (retryCount >= 10) return;
      setTimeout(() => revalidate({ retryCount }), 5000);
    }
  })

  if(!data) return <>Loading</>;
  if(error) return <>Error</>;

  return (
    <ul className={styles['entries-container']}>
      {data && Object.keys(data).length > 0 ? 
        data.map((entry, index)=>{
          return (
            <li className={styles['entry-card']}>
              <a href={entry.url} target='_'>
                <div>
                  <h2>{entry.title}</h2>
                  <span>{entry.author}</span>
                  <p>{entry.description}</p>
                </div>
                <div>
                  <span>{entry.datePosted}</span>
                  <span>{entry.replies}</span>
                </div>
              </a>
            </li>
          ) 
        }) : <></>
      }
    </ul>
  )
}