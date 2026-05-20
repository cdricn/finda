import styles from './pagePosts.module.css';
import { fetchData } from '@/app/api/fetch/fetchData';
import Posts from './components/posts';

export default async function PagePosts({
  params, 
  searchParams
}:{
  params: string, 
  searchParams: Array<string>
}) {

  const data = await fetchData.getPosts(params, 'gamejam/posts', searchParams.join('&tags='));

  return (
    <>
      {data !== null ?
        <Posts data={data}/> :
        <div className={styles['message-container']}>
          <p>An error occured! Could not fetch data.</p>
        </div>
      }
    </>
  )
}