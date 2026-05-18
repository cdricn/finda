import styles from './pagePosts.module.css';
import { fetchData } from '@/app/api/fetch/fetchData';
import Posts from './components/posts';

export default async function PagePosts({
  params, 
  searchParams
}:{
  params: string, 
  searchParams: Array<string> | undefined
}) {

  let data = await fetchData.getResource(params, 'gamejam/posts');

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