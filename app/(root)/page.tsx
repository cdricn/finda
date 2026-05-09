import styles from './page.module.css';
import JamSelection from '../components/jamSelection/jamSelection';
import { Suspense } from 'react';

export default async function Main() {

  return (
    <main className={styles['main-container']}>
      <div className={styles['page-header']}>
        <h1>Find a team!</h1>
        <p>
          Aggregating all forum posts looking for teams or members from popular itch.io game jams.
        </p>
      </div>
      <section className={styles['gamejams-category']}>
        
        <div className={styles['category-container']}>
          <h2>Ongoing Game Jams</h2>
          <ul className={styles['category-list']}>
            <Suspense fallback={<></>}>
              <li className={styles['card-container']}>
                <div className={styles['top']}>
                  <div className={styles['card-image-container']}>
                    <img src=''/>
                  </div>
                  <div className={styles['card-main-details']}>
                    <h3 className={styles['title']}>Game Jam Title</h3>
                    <span className={styles['host']}>Hosted by:</span>
                    <p className={styles['description']}>Short description:</p>
                  </div>
                </div>
                <div className={styles['bottom']}>
                  <span className={styles['duration']}></span>
                  <span className={styles['stat']}></span>
                </div>
              </li>
            </Suspense>
          </ul>
        </div>

        <div className={styles['category-container']}>
          <h2>Upcoming Game Jams</h2>
          <ul className={styles['category-list']}>
            <Suspense fallback={<></>}>
              <li></li>
            </Suspense>
          </ul>
        </div>

      </section>
    </main>
  )
}