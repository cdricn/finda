'use client';

import styles from './posts.module.css'
import PostCard from './postCard';
import PageMessage from '../components/pageMessage';
import useSWR from 'swr'
import { FetchPosts } from '../api/fetch/dataFetcher';
import { ForumPosts } from '../lib/interface';
import { useParams, useSearchParams } from 'next/navigation';
import LoadingPosts from '../components/loadingPosts';
import PostFooter from './postFooter';

export default function Posts() {
  const params = useParams();
  const searchParams = useSearchParams();

  const { data, isLoading, error } = useSWR<ForumPosts[]>(
    `/api/posts/${params.id}`, FetchPosts, {
      revalidateOnFocus: false,
      errorRetryCount: 5,
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.status === 404) return;
        if (retryCount >= 5) return;
        setTimeout(() => revalidate({ retryCount }), 5000);
      }
  });
  
  if(isLoading) return <LoadingPosts />; 
  if(error) return <PageMessage mainText='Error 404.' subText="Page could not be loaded."/>;
  
  return (
    <>
      {!isLoading && data && Object.keys(data).length > 0 ?
        <>
          <ul className={styles['posts-container']}>
            {data.map((item, index)=>{
              if(searchParams.get("tags")==='all') {
                return <PostCard entry={item} key={item.title+index}/>
              }
              if(searchParams.getAll("tags").find((element)=>item.tags[element])) {
                return <PostCard entry={item} key={item.title+index}/>
              }
            })}
          </ul>
          <PostFooter text="Can't find what you're looking for?" link={params.id}/>
        </> :
        <PostFooter text="No results found." link={params.id}/>
      }
    </>
  )
}