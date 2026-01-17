// import { MdViewList, MdViewQuilt  } from "react-icons/md";
import styles from './posts.module.css';
import PostCard from './postCard';
import useSWR from 'swr'
import { FetchPosts } from '../api/fetch/dataFetcher';
import { ForumPosts } from '../lib/interface';

export default function Posts({link}:{link: string}) {
  const { data, isLoading, error } = useSWR<ForumPosts[]>(`/api/${link}`, FetchPosts, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error.status === 404) return;
      if (retryCount >= 10) return;
      setTimeout(() => revalidate({ retryCount }), 5000);
    }
  })

  if(isLoading) return <>Loading</>;
  if(error) return <>Error</>;

  function mapData() {
    if(!isLoading && data && Object.keys(data).length > 0) {
      return data.map((item, index)=>{
        return (
          <PostCard entry={item} key={item.title+index}/>
        ) 
      })
    } else {
      return <>Nothing here!</>
    }
  }

  return (
    <ul className={styles['posts-container']}>
      {mapData()}
    </ul>
  )
}