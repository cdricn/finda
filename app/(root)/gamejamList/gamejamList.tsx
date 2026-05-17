import { fetchData } from '@/app/api/fetch/fetchData';
import Table from './components/table';
import TableError from '@/app/components/error/tableError';

export default async function GameJamList({params}:{params:string}) {
  
  let upcoming = await fetchData.getJams('gamejams/upcoming/minMembers', 300);
  let ongoing = await fetchData.getJams('gamejams/ongoing/minMembers', 300);

  let data = {ongoing: ongoing, upcoming: upcoming}

  return (
    <>
      {data.ongoing === null && data.upcoming === null ? 
        <TableError />
        : <Table data={data}/>
      }
    </>
  )
}