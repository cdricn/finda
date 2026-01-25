'use client';

import styles from './posts.module.css'
import PostCard from './postCard';
import PageMessage from '../components/pageMessage';
import PostsLoadingSkeleton from '../skeleton/postsLoadingSkeleton';
import useSWR from 'swr'
import { FetchPosts } from '../api/fetch/dataFetcher';
import { ForumPosts } from '../lib/interface';
import { useParams, useSearchParams } from 'next/navigation';

export default function Posts() {
  const params = useParams();
  const searchParams = useSearchParams(); //for filter

  const { data, isLoading, error } = useSWR<ForumPosts[]>(`/api/${params.id}`, FetchPosts, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error.status === 404) return;
      if (retryCount >= 10) return;
      setTimeout(() => revalidate({ retryCount }), 5000);
    }
  });

  if(isLoading) return <PostsLoadingSkeleton />; 
  if(error) return <PageMessage mainText='Error 404.' subText='Something went wrong.'/>;

  return (
    <>
      {!isLoading && data && Object.keys(data).length > 0 ? 
        <ul className={styles['posts-container']}>
          {data.map((item, index)=>{
            if(searchParams.get("tags")==='all') {
              return <PostCard entry={item} key={item.title+index}/>
            }
            if(searchParams.getAll("tags").find((element)=>item.tags[element])) {
              return <PostCard entry={item} key={item.title+index}/>
            }
          })}
        </ul> :
        <PageMessage 
          mainText='No results found.'
          subText='Try looking in another gamejam.'
        />
      }
    </>
  )
}