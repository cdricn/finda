'use client'

import styles from './table.module.css';
import { GameJamEntries } from '@/app/lib/interface';
import { useState } from 'react';
import SelectJamType from './selectJamType';

type JamType = 'ongoing' | 'upcoming';

export default function Table({data}:{data:{ongoing: GameJamEntries[], upcoming:GameJamEntries[]}}) {
  const [tableData, setTableData] = useState(data.ongoing);

  function numToMonth(num:string) {
    const months = {
      '01': 'Jan',
      '02': 'Feb',
      '03': 'Mar',
      '04': 'Apr',
      '05': 'May',
      '06': 'Jun',
      '07': 'Jul',
      '08': 'Aug',
      '09': 'Sep',
      '10': 'Oct',
      '11': 'Nov',
      '12': 'Dec',
    };

    return months[num as keyof typeof months];
  }

  function changeJamType(type:JamType) {
    setTableData(data[type]); // assign type
  }

  function checkData() {
    if(tableData !== null) {
      return true;
    }
  }

  return (
    <>
      <div className={styles['select-container']}>
        <SelectJamType changeData={changeJamType}/>
      </div>
      <div className={styles['table']}>
        <div className={styles['table-header']}>
          <h2>Title</h2>
          <h2 className={styles['remove-mobile']}>Members</h2>
          <h2 className={styles['remove-mobile']}>Ends in</h2>
        </div>
        <div className={styles['table-body']}>

          {checkData() ? 
            tableData.map((item:GameJamEntries, index)=>{
              const year = item.deadline.slice(0, 4); 
              const month = numToMonth(item.deadline.slice(5, 7)); //map this to actual month name
              const day = item.deadline.slice(8, 10); 
              const url = 'https://findateam.vercel.app/'+item.url.slice(20); //change to vercel 
              return (
                <a href={url} className={styles['table-row']} key={item.title+index} target='_'>
                  <p>{item.title}</p>
                  <p className={styles['remove-mobile']}>{item.members}</p>
                  <p className={styles['remove-mobile']}>{month+' '+day+' '+year}</p>
                </a>
              )
            }) :
            <div className={styles['error-message']}>
              <p>An error occured! Could not fetch data.</p>
            </div>
          }
        </div>
      </div>
    </>
  )
}