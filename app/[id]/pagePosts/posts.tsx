'use client'

import styles from './posts.module.css';
import { useParams, useSearchParams } from 'next/navigation';
import { ForumPosts } from '../../lib/interface';
import Card from './components/card';
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
                return <Card entry={item} key={item.title+index}/>
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