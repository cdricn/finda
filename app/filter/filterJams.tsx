'use client';

import styles from './filter.module.css';
import useSWR from 'swr'
import { FetchJams } from '../api/fetch/dataFetcher';
import { GameJam } from '../lib/interface';
import { useEffect } from 'react';

export default function FilterJams({onChange}:{onChange:Function}) {
  const { data, error } = useSWR<GameJam[]>('/api/jams', FetchJams, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error.status === 404) return
      if (retryCount >= 10) return
      setTimeout(() => revalidate({ retryCount }), 5000)
    }
  })

  if(!data) {console.log(typeof data); return <>Loading</>}
  if(error) {console.log(typeof data === undefined); return <>Error</>}
  
  function handleChange(e:any) {
    if (data) {
      const newSelectedJam = data.find((item)=>item.title === e.target.value);
      if (newSelectedJam) onChange(newSelectedJam);
    }
  }

  function mapEntries() {
    let selectables;
    let fetchedEntries : GameJam[] = []
    if (data) 
    if (Object.keys(data).length > 0) {
      console.log("wtf", data)
      console.log("wtf type", typeof data)
      fetchedEntries = data;
      selectables = fetchedEntries.map((jam, index)=>{
        return (
          <option 
            key={index} 
            id={jam.title}
            value={jam.title}
            >
              {jam.title} ({jam.members})
          </option>
        )
      })
    }
    return selectables;
  }

  return (
    <div className={styles['select-container']}>
      <select id="gamejams" className={styles['gamejams-select']} 
        onChange={handleChange}
        defaultValue="default">
          <option value="default" disabled>--Choose a gamejam--</option>
          {mapEntries()}
      </select>
    </div>
  )
}