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
    <div>
      {data && Object.keys(data).length > 0 ? 
        data.map((entry, index)=>{
          return (
            <></>
          ) 
        }) : <></>
      }
    </div>
  )
}