import styles from './page.module.css';
import FilterJams from '../filter/filterJams';
import FilterTags from '../filter/filterTags';
import Posts from '../posts/posts';
import PageInfo from '../pageInfo/pageInfo';
import { fetchData } from '../api/fetch/fetchData';
import { Suspense } from 'react';

export default async function PostsPage({params}:{params: Promise<{ id: string }>}) {
  const paramID = await params;

  let pageDetails = await fetchData.getResource(paramID.id, 'gamejam/details');
  let pagePostList = await fetchData.getResource(paramID.id, 'gamejam/posts');

  return (
    <>
      <main className={styles['main-container']}>
        <section className={styles['title-section']}>
          <Suspense fallback={<></>}>
            <PageInfo data={pageDetails} params={paramID.id}/>
          </Suspense>
          <Suspense fallback={<></>}>
            <FilterJams />
          </Suspense>
          <FilterTags />
        </section>
        <section className={styles['content-section']}>
          <Suspense fallback={<></>}>
            <Posts data={pagePostList}/>
          </Suspense>
        </section>
      </main>
    </>
  )
}