import styles from './filter.module.css';
import { FaFilter } from "react-icons/fa6";
import Tag from './tag';
import type { TagType } from '../lib/interface';

export default function FilterTags({tags, handleClick}:{tags:TagType, handleClick:Function}) {
  
  return (
    <div className={styles['filter-section']}>
      <FaFilter />
      <Tag tag={'all'} isActive={tags.all} handleClick={handleClick}/>
      <Tag tag={'developer'} isActive={tags.developer} handleClick={handleClick}/>
      <Tag tag={'artist'} isActive={tags.artist} handleClick={handleClick}/>
      <Tag tag={'composer'} isActive={tags.composer} handleClick={handleClick}/>
    </div>
  )
}