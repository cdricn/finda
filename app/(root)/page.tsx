import styles from './page.module.css';
import FilterLayout from "../filter/filterLayout";
import PageMessage from '../skeleton/pageMessage';

export default function Main() {

  return (
    <>
      <main className={styles['main-container']}>
        <FilterLayout />
        <PageMessage 
          mainText='Nothing here.' 
          subText='Select a game jam to discover groups or members.'
        />
      </main>
    </>
  )
}