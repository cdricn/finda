import styles from './page.module.css';
import FilterJams from '../filter/filterJams';
import FilterTags from '../filter/filterTags';
import Posts from '../posts/posts';
import PageInfo from '../pageInfo/pageInfo';
import JamDetails from '../api/fetch/fetchData';
import { Suspense } from 'react';

export default async function PostsPage({params}:{params: Promise<{ id: string }>}) {
  const paramID = await params;

  let jamDetails = await JamDetails(paramID.id);

  return (
    <>
      <main className={styles['main-container']}>
        <section className={styles['title-section']}>
          <Suspense fallback={<></>}>
            <PageInfo data={jamDetails} params={paramID.id}/>
          </Suspense>
          <FilterJams />
          <FilterTags />
        </section>
        <section className={styles['content-section']}>
          <Posts />
        </section>
      </main>
    </>
  )
}