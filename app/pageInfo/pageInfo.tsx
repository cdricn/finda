'use client';

import styles from './pageInfo.module.css';
import { GameJamInfo } from '@/app/lib/interface';
import { useParams } from 'next/navigation';
import useSWR from 'swr';
import { FetchInfo } from '../api/fetch/dataFetcher';

export default function PageInfo() {
  const params = useParams();

  const { data, isLoading, error } = useSWR<GameJamInfo>(
    `/api/info/${params.id}`, ()=>FetchInfo(params.id), {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.status === 404) return;
        if (retryCount >= 10) return;
        setTimeout(() => revalidate({ retryCount }), 5000);
      }
  });

  if(isLoading) console.log('loadin') 
  if(error) console.log('eerrr')
  if(data)console.log('nice',data)


  return (
    <>
      {!isLoading && data && Object.keys(data).length > 0 ?
        <div className={styles['page-info-container']}>
          <h1 className={styles['page-title']}>{data.title}</h1>
          <span>{data.host}</span>
          <span>Members: {data.members}</span>
          <div className={styles['page-info']}>
          </div>
        </div> :
        <></>
      }
    </>
  )
}