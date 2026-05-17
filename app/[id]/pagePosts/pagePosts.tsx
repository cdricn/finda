import { fetchData } from '@/app/api/fetch/fetchData';
import Posts from './components/posts';
import ErrorMessage from '@/app/components/error/errorMessage';

export default async function PagePosts({params}:{params:string}) {
  
  let data = await fetchData.getResource(params, 'gamejam/posts');

  return (
    <>
      {data !== null ?
        <Posts data={data}/> :
        <ErrorMessage />
      }
    </>
  )
}