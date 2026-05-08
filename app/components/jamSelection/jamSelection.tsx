import { fetchData } from '@/app/api/fetch/fetchData';
import JamDropdown from './jamDropdown';

export default async function JamSelection() {

  let data = await fetchData.getJams('gamejams/minMembers', 300);

  return (
    <>
      {data && Object.keys(data).length > 0 ?
        <JamDropdown data={data}/> :
        <></>
      }
    </>
  )
}