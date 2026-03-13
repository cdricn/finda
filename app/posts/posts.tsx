'use client';

import styles from './posts.module.css';
import { useParams, useSearchParams } from 'next/navigation';
import { fetchWithSWR } from '../hooks/fetchWithSWR';
import { ForumPosts } from '../lib/interface';
import PostCard from './postCard';
import PageMessage from '../components/pageMessage';
import LoadingPosts from '../components/loadingPosts';
import PostFooter from './postFooter';

export default function Posts() {
  const params = useParams();
  const searchParams = useSearchParams();
  const {data, isLoading, error} = fetchWithSWR<ForumPosts[]>(String(params.id));

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