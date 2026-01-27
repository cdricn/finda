'use client';

import styles from './pageInfo.module.css';
import { GameJamInfo } from '@/app/lib/interface';
import { useParams } from 'next/navigation';
import useSWR from 'swr';
import { FetchInfo } from '../api/fetch/dataFetcher';
import PageInfoError from './pageInfoError';

export default function PageInfo() {
  const params = useParams();
  const link = params.id ? 
  'https://itch.io/jam/'+params.id.toString() : '/';

  const { data, isLoading, error } = useSWR<GameJamInfo>(
    `/api/details/${params.id}`, FetchInfo, {
      revalidateOnFocus: false,
      errorRetryCount: 5,
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.status === 404) return;
        if (retryCount >= 5) return;
        setTimeout(() => revalidate({ retryCount }), 5000);
      }
  });

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