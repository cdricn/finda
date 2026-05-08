'use client';

import styles from './JamDropdown.module.css';
import { useParams } from 'next/navigation';
import { GameJam } from '../../lib/interface';

export default function JamDropdown({data}:{data:GameJam}) {
  const params = useParams();

  return (
    <div className={styles['select-container']}>
    </div>
  )
}