import { fetchData } from '@/app/api/fetch/fetchData';
import Posts from './components/posts';

export default async function PagePosts({params}:{params:string}) {
  
  let data = await fetchData.getResource(params, 'gamejam/posts');

  return (
    <>
      {data && Object.keys(data).length > 0 ?
        <Posts data={data}/> :
        <></>
      }
    </>
  )
}