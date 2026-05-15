import styles from './page.module.css';
import JamSelection from '../components/jamSelection/jamSelection';
import { Suspense } from 'react';
import GameJamList from './gamejamList/gamejamList';
import TableSkeleton from '../skeleton/tableSkeleton';

export default async function Main({params}:{params: Promise<{ id: string }>}) {
  const paramID = await params;

  return (
    <main className={styles['main-container']}>
      <div className={styles['wrapper']}>
        <div className={styles['page-header']}>
          <h1>Find a team!</h1>
          <p> 
            Aggregating all forum posts looking for teams or members 
            from popular itch.io game jams.
          </p>
        </div>
        <section className={styles['table-container']}>
          <Suspense fallback={<TableSkeleton />}>
            <GameJamList params={paramID.id}/>
          </Suspense>
        </section>
      </div>
    </main>
  )
}