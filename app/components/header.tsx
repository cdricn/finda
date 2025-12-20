'use client';

import styles from './header.module.css';
import { GameJam } from '@/app/lib/interface';
import { Suspense } from 'react';
import { useState } from 'react';

export default function Header({
  gamejams = [] 
}:{ 
  gamejams: Array<GameJam> 
}) {
  const [selectedJam, setSelectedJam] = useState<GameJam>({
    title: '',
    url: '',
    members: 0,
    deadline: '',
    host: ''
  });

  function handleChange(e:any) {
    const newSelected = gamejams.find((item)=>item.title === e.target.value);
    if (newSelected) setSelectedJam(newSelected);
  }

  const dropdownFallback = 
    <select name="gamejams" id="gamejams-select" className={styles['gamejams-select']}>
      <option value="">--Choose a gamejam--</option>
    </select>

  return (
    <>
      <h1 className={styles['header']}>
        {
          selectedJam.title==='' ? <span>Find a team!</span> :
          <a href={selectedJam.url}>{selectedJam.title}</a>
        }
      </h1>
      <div className={styles['gamejam-info']}>
        <span>Hosted by: <span className={styles['gamejam-info-colored']}>
          {selectedJam.host==='' ? '---' : selectedJam.host}</span>
        </span>
        <span>Members: <span className={styles['gamejam-info-colored']}>
          {selectedJam.members}</span>
        </span>
      </div>
      <div className={styles['select-container']}>
        <Suspense fallback={dropdownFallback}>
          <select id="gamejams" className={styles['gamejams-select']} onChange={handleChange}>
            {
              selectedJam.host==='' ? <option value="">--Choose a gamejam--</option> :
              <option value="" disabled>--Choose a gamejam--</option>
            }
            {gamejams.map((jam, index)=>{
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
        </Suspense>
      </div>
    </>
  )
}