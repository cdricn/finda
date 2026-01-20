'use client';

import styles from './filterJams.module.css';
import useSWR from 'swr'
import { FetchJams } from '../api/fetch/dataFetcher';
import { GameJam } from '../lib/interface';
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import DisabledSelect from '../skeleton/disabledSelect';

export default function FilterJams() {
  const [selectedJam, setSelectedJam] = useState<GameJam>({
    title: '',
    url: '',
    members: 0,
    deadline: '',
    host: ''
  });
  const router = useRouter();
  const params = useParams();
  const excessUrl = 20;
  
  const { data, isLoading, error } = useSWR<GameJam[]>('/api/posts', FetchJams, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error.status === 404) return;
      if (retryCount >= 10) return;
      setTimeout(() => revalidate({ retryCount }), 5000);
    }
  });

  useEffect(()=>{
    if(!data) return;
    const newUrl = selectedJam.url.slice(excessUrl); // isolate directory from the itch.io link to make ours look pretty
    router.replace("/"+newUrl);

  }, [selectedJam]);
  
  if(!data) return <DisabledSelect />;
  if(isLoading) return <DisabledSelect />;
  if(error) return <DisabledSelect />;

  function handleChange(e:React.ChangeEvent<HTMLSelectElement>) {
    if (data) {
      const newSelectedJam = data.find((item)=>item.title === e.target.value);
      // e.target values are from data, so technically, item should never return undefined
      if (newSelectedJam) {
        setSelectedJam(newSelectedJam);
      };
    }
  }

  function setSelectDefault() {
    if (data) {
      // if link is outdated, it's possible that params value isn't in item anymore
      // so we still check if entry is undefined 
      const entry = data.find((item)=>item.url.slice(excessUrl) === params.id);
      return entry ? entry.title : 'default';
    }
    return 'default';
  }

  return (
    <div className={styles['select-container']}>
      {data && data.length > 0 ? 
        <select id="gamejams" className={styles['gamejams-select']} onChange={handleChange} 
          defaultValue={setSelectDefault()}>

          <option value="default" disabled>--Choose a gamejam--</option>
          {data.map((entry, index)=>{
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
        </select> :
        <DisabledSelect />
      }
    </div>
  )
}