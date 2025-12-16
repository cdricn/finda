'use client';

import { Suspense } from 'react';
import styles from './filter.module.css';
import { GameJam } from '@/app/lib/interface';
import { submitFilterForm } from '../lib/actions';
import { useState } from 'react';

export default function FilterSection({ 
  gamejams = [] 
}:{ 
  gamejams: Array<GameJam> 
}) {
  
  const [selectedJam, setSelectedJam] = useState('');

  const dropdownFallback = 
    <select name="gamejams" id="gamejams-select" disabled>
      <option value="">--Choose a gamejam--</option>
    </select>

  const handleChange = (e:any) => {
    setSelectedJam(e.target.value);
    console.log('handleChange', e.options)
  }

  function formData(e:FormData) {
    e.set('gamejams', selectedJam) 
    submitFilterForm(e)
  }

  return (
    <section className={styles['filter-section']}>
      <form id='filterForms' action={formData}>
        <h3>Filters</h3>
        <label>Roles</label>
        <div>
          <div>
            <input type="checkbox" id="developer" name="developer" value="developer"/>
            <label>Developer</label>
          </div>
          <div>
            <input type="checkbox" id="artist" name="artist" value="artist"/>
            <label>Artist</label>
          </div>
          <div>
            <input type="checkbox" id="composer" name="composer" value="composer"/>
            <label>Composer</label>
          </div>
        </div>

        <Suspense fallback={dropdownFallback}>
          <select id="gamejams" onChange={handleChange}>
            <option value="">--Choose a gamejam--</option>
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
        <input type="submit" value="Search"/>
      </form>
    </section>
  )
}