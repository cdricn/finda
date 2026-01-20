import styles from './filterLayout.module.css'
import FilterJams from "./filterJams";
import FilterTags from "./filterTags";

export default function FilterLayout() {
  return (
    <section className={styles['layout-container']}>
      <FilterJams />
      <FilterTags />
    </section>
  )
}
        