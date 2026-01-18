// import { MdViewList, MdViewQuilt  } from "react-icons/md";
import styles from './posts.module.css';
import PostCard from './postCard';
import PostCardSkeleton from '../skeleton/postCardSkeleton';
import PlaceholderNoResult from '../skeleton/placeholderNoResult';
import PlaceholderErrorFetch from '../skeleton/placeholderErrorFetch';
import PlaceholderError404 from '../skeleton/placeholderError404';
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

  //there's a better way to check this bruh ong
  if(data) if(Object.keys(data).length <= 0) return <PlaceholderErrorFetch /> 
  if(isLoading) return <PostCardSkeleton />; 
  if(error) return <PlaceholderError404 />;

  return (
    <>
      {!isLoading && data && Object.keys(data).length > 0 ? 
        <ul className={styles['posts-container']}>
          {data.map((item, index)=>{
            return <PostCard entry={item} key={item.title+index}/>
          })}
        </ul> :
        <PlaceholderNoResult />
        //<PostCardSkeleton /> // for testing
      }
    </>
  )
}