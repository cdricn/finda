import styles from './pagePosts.module.css';
import { fetchData } from '@/app/api/fetch/fetchData';
import Posts from './components/posts';
import ErrorMessage from '@/app/components/error/errorMessage';

export default async function PagePosts({params}:{params:string}) {
  
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