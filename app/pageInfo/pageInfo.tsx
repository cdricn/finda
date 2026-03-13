'use client';

import styles from './pageInfo.module.css';
import { useParams } from 'next/navigation';
import { fetchWithSWR } from '../hooks/fetchWithSWR';
import { GameJamInfo } from '@/app/lib/interface';
import PageInfoError from './pageInfoError';

export default function PageInfo() {
  const params = useParams();
  const link = params.id ? 
  'https://itch.io/jam/'+params.id.toString() : '/';

  const { data, isLoading, error } = fetchWithSWR<GameJamInfo>(String(params.id));

  if(isLoading) return <PageInfoError />;
  if(error) return <PageInfoError />;

  function dateFormatter(date:string) {
    if (date) {
      const newDate = new Date(date).toString();
      const month = newDate.slice(3, 7)+'.';
      const day = newDate.slice(7, 10)+',';
      const year = newDate.slice(10, 15);
      return month+day+year;
    } else return '';
  }

  return (
    <>
      {!isLoading && data && Object.keys(data).length > 0 ?
        <div className={styles['page-info-container']}>
          <a href={link} target='_blank' className={styles['page-title']}>{data.title}</a>
          <span>{data.host}</span>
          <div className={styles['page-info']}>
            <span>{dateFormatter(data.startDate)}</span> - 
            <span>{dateFormatter(data.endDate)}</span>
          </div>
        </div> :
        <PageInfoError />
      }
    </>
  )
}