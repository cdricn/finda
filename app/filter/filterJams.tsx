'use client';

import styles from './filterJams.module.css';
import useSWR from 'swr'
import { FetchJams } from '../api/fetch/dataFetcher';
import { GameJam } from '../lib/interface';
import { useParams, useRouter } from 'next/navigation';
import SelectMessage from '../skeleton/selectMessage';

export default function FilterJams() {
  const router = useRouter();
  const params = useParams();
  const excessUrl = 20;
  
  const { data, isLoading, error } = useSWR<GameJam>(`/api/jams`, FetchJams, {
    errorRetryCount: 5,
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error.status === 404) return;
      if (retryCount >= 5) return;
      setTimeout(() => revalidate({ retryCount }), 5000);
    }
  });
  
  if(isLoading) return <SelectMessage text={'Fetching game jams...'}/>;
  if(error) return <SelectMessage text={"Couldn't fetch data..."}/>;

  function handleChange(e:React.ChangeEvent<HTMLSelectElement>) {
    if (data) {
      const newSelectedJam = data.upcoming.concat(data.ongoing).find(
        (item)=>item.title === e.target.value
      );
      // e.target values are from data, so technically, item should never return undefined
      if (newSelectedJam) {
        const newUrl = newSelectedJam.url.slice(excessUrl); // isolate directory from the itch.io link to make ours look pretty
        router.replace("/"+newUrl);
      };
    }
  }

  function setSelectDefault() {
    if (data) {
      // if link is outdated, it's possible that params value isn't in item anymore
      // so we still check if entry is undefined 
      const entry = data.upcoming.concat(data.ongoing).find(
        (item)=>item.url.slice(excessUrl) === params.id
      );
      return entry ? entry.title : 'default';
    }
    return 'default';
  }

  return (
    <div className={styles['select-container']}>
      {data && data.upcoming.length > 0 && data.ongoing.length > 0? 
        <select id="gamejams" className={styles['gamejams-select']} onChange={handleChange} 
          defaultValue={setSelectDefault()}>
          <option value="default" disabled>--Choose a gamejam--</option>
          <optgroup label="Ongoing">
            {data.ongoing.map((entry, index)=>{
              return (
                <option 
                  key={index} 
                  id={entry.title}
                  value={entry.title}
                  >
                    {entry.title} ({entry.members})
                </option>
              )
            })}
          </optgroup>
          <optgroup label="Upcoming">
            {data.upcoming.map((entry, index)=>{
              return (
                <option 
                  key={index} 
                  id={entry.title}
                  value={entry.title}
                  >
                    {entry.title} ({entry.members})
                </option>
              )
            })}
          </optgroup>
        </select> :
        <SelectMessage text={"Couldn't fetch data..."}/>
      }
    </div>
  )
}