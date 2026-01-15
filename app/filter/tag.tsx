'use client';
import styles from './filter.module.css';

type TagType = {
  tag: string;
  isActive:boolean;
  handleClick: (func: string) => void;
}

export default function Tag({ tag, isActive, handleClick }: TagType ) {
  
  return (
    <div className={styles['tag']} onClick={()=>handleClick(tag)}
      style={isActive ? {backgroundColor: 'var(--tag-bgcolor-active)'} : undefined}>
      <span>{tag}</span>
    </div>
  )
}