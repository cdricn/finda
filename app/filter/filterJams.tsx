'use client';

import styles from './filter.module.css';
import useSWR from 'swr'
import { FetchJams } from '../api/fetch/dataFetcher';
import { GameJam } from '../lib/interface';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import DisabledSelect from '../skeleton/disabledSelect';
import FilterJamsSkeleton from '../skeleton/filterJamsSkeleton';

export default function FilterJams() {
  const [selectedJam, setSelectedJam] = useState<GameJam>({
    title: '',
    url: '',
    members: 0,
    deadline: '',
    host: ''
  });
  const router = useRouter();
  
  const { data, isLoading, error } = useSWR<GameJam[]>('/api/posts', FetchJams, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error.status === 404) return;
      if (retryCount >= 10) return;
      setTimeout(() => revalidate({ retryCount }), 5000);
    }
  });

  useEffect(()=>{
    if(!data) return;
    
    // isolate directory from the itch.io link to make ours look pretty
    const excessString = 20;
    const newUrl = selectedJam.url.slice(excessString);
    router.push("/"+newUrl);

  }, [selectedJam]);
  
  if(!data) return <DisabledSelect />;
  if(isLoading) return <FilterJamsSkeleton />;
  if(error) return <DisabledSelect />;

  function handleChange(e:React.ChangeEvent<HTMLSelectElement>) {
    if (data) {
      // e.target values are from data, so technically, item should never return undefined
      const newSelectedJam = data.find((item)=>item.title === e.target.value);
      if (newSelectedJam) {
        setSelectedJam(newSelectedJam);
      };
    }
  }

  return (
    <div className={styles['jam-info-container']}>
      <div className={styles['select-container']}>
        {data && Object.keys(data).length > 0 ? 
          <select id="gamejams" className={styles['gamejams-select']} onChange={handleChange} defaultValue="default">
            <option value="default" disabled>--Choose a gamejam--</option>
            {data.map((jam, index)=>{
              return (
                <option 
                  key={index} 
                  id={jam.title}
                  value={jam.title}
                  >
                    {jam.title} ({jam.members})
                </option>
              )
            })}
          </select> :
          <DisabledSelect />
        }
      </div>
    </div>
  )
}