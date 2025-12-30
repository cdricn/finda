'use client';

import styles from './header.module.css';
import { use } from 'react';
import { GameJam } from '@/app/lib/interface';
import { Suspense } from 'react';
import { useState } from 'react';
import HeaderSkeleton from '../skeleton/headerSkeleton';
import { useFetchJamsContext } from '../lib/fetchJamsContextProvider';

export default function Header() {
  const { fetchJamsPromise } = useFetchJamsContext();
  const fetchedJamEntries = use(fetchJamsPromise);

  const [selectedJam, setSelectedJam] = useState<GameJam>({
    title: '',
    url: '',
    members: 0,
    deadline: '',
    host: ''
  });

  function handleChange(e:any) {
    const newSelected = fetchedJamEntries.find((item)=>item.title === e.target.value);
    if (newSelected) {setSelectedJam(newSelected)};
  }

  return (
      <Suspense fallback={<HeaderSkeleton />}>
        <h1 className={styles['header']}>
          <a href={selectedJam.url}>{selectedJam.title==''?'Select a gamejam!':selectedJam.title}</a>
        </h1>
        <div className={styles['gamejam-info']}>
          <span>Hosted by: {selectedJam.host}</span>
          <span>Members: {selectedJam.members}</span>
        </div>
        <div className={styles['select-container']}>
            <select id="gamejams" className={styles['gamejams-select']} onChange={handleChange}>
              <option defaultValue="" disabled selected>--Choose a gamejam--</option>
              {fetchedJamEntries.map((jam, index)=>{
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
            </select>
        </div>
      </Suspense>
  )
}