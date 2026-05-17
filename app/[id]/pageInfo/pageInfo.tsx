import PageInfoSkeleton from '@/app/skeleton/pageInfoSkeleton';
import styles from './pageInfo.module.css';
import { fetchData } from '@/app/api/fetch/fetchData';

export default async function PageInfo({params}:{params:string}) {

  let data = await fetchData.getResource(params, 'gamejam/details');
  const link = params ? 'https://itch.io/jam/'+params.toString() : '/';

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
      {data && Object.keys(data).length > 0 ?
        <div className={styles['page-info-container']}>
          <a href={link} target='_blank' className={styles['page-title']}>{data.title}</a>
          <span>{data.host}</span>
          <div className={styles['page-info']}>
            <span>{dateFormatter(data.startDate)}</span> - 
            <span>{dateFormatter(data.endDate)}</span>
          </div>
        </div> :
        <PageInfoSkeleton />
      }
    </>
  )
}