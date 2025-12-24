'use client';

import styles from './filter.module.css';
import { submitFilterForm } from '../lib/actions';

export default function FilterSection() {

  function formData(e:FormData) {
    submitFilterForm(e)
  }

  return (
    <form id='filterForms' action={formData} className={styles['filter-form']}>
      <h3>Filters</h3>
      <label>Roles</label>
      <div className={styles['roles-container']}>
        <div className={styles['role-option']}>
          <label>
            <input type="checkbox" id="developer" name="developer" value="developer"/>
              Developer
          </label>
        </div>
        <div className={styles['role-option']}>
          <label>
            <input type="checkbox" id="artist" name="artist" value="artist"/>
            Artist
          </label>
        </div>
        <div className={styles['role-option']}>
          <label>
            <input type="checkbox" id="composer" name="composer" value="composer"/>
            Composer
          </label>
        </div>
      </div>

      <input type="submit" className={styles['filter-forms-button']} value="Search"/>
    </form>
  )
}