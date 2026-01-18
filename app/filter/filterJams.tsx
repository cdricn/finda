'use client';

import styles from './filter.module.css';
import useSWR from 'swr'
import { FetchJams } from '../api/fetch/dataFetcher';
import { GameJam } from '../lib/interface';
import DisabledSelect from '../skeleton/disabledSelect';

type FilterJamsType = {
  onChange: (func:GameJam) => void;
}

export default function FilterJams({onChange}:FilterJamsType) {
  const { data, error } = useSWR<GameJam[]>('/api/jams', FetchJams, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error.status === 404) return;
      if (retryCount >= 10) return;
      setTimeout(() => revalidate({ retryCount }), 5000);
    }
  });

  if(!data) return <DisabledSelect />; //MAKE THIS UNSELECTABLE
  if(error) return <DisabledSelect />;
  
  function handleChange(e:React.ChangeEvent<HTMLSelectElement>) {
    if (data) {
      const newSelectedJam = data.find((item)=>item.title === e.target.value);
      if (newSelectedJam) onChange(newSelectedJam);
    }
  }

  return (
    <div className={styles['select-container']}>
      {data && Object.keys(data).length > 0 ? 
        <select id="gamejams" className={styles['gamejams-select']} 
        onChange={handleChange}
        defaultValue="default">
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
  )
}