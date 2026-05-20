import { fetchData } from '@/app/api/fetch/fetchData';
import Table from './components/table';

export default async function GameJamList({params}:{params:string}) {
  
  const upcoming = await fetchData.getJams('gamejams/upcoming/minMembers', 300);
  const ongoing = await fetchData.getJams('gamejams/ongoing/minMembers', 300);

  const data = {ongoing: ongoing, upcoming: upcoming}

  return (
    <>
      <Table data={data}/>
    </>
  )
}