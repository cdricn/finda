'use client'

import styles from './filter.module.css';
import { FaFilter } from "react-icons/fa6";
import Tag from './tag';
import type { TagType } from '../lib/interface';
import { useState, useEffect } from 'react';

type FilterTagsType = {
  setTags: (func: TagType) => void
}

export default function FilterTags({setTags}:FilterTagsType) {
  const [activeTags, setActiveTags] = useState<TagType>({
    all: true,
    developer: false,
    artist: false,
    composer: false
  });

  useEffect(()=>{
    setTags(activeTags);
  }, [activeTags]);

  function handleClick(tag:string) {
    const defaultTags = {
      all: true,
      developer: false,
      artist: false,
      composer: false
    };
    let tempTags = activeTags;
    
    //Check first which one is clicked
    if(tag==='all') {
      tempTags = defaultTags;
    }
    else {
      tempTags = {...tempTags, all:false, [tag]:!activeTags[tag]};
    }

    //Then check if all are empty
    if (Object.values(tempTags).every(bool=>bool===false)) {
      tempTags = defaultTags;
    }

    //Finally, set the actual state with the result 
    setActiveTags(tempTags);
  }
  
  return (
    <div className={styles['filter-section']}>
      <FaFilter />
      <Tag tag={'all'} isActive={activeTags.all} handleClick={handleClick}/>
      <Tag tag={'developer'} isActive={activeTags.developer} handleClick={handleClick}/>
      <Tag tag={'artist'} isActive={activeTags.artist} handleClick={handleClick}/>
      <Tag tag={'composer'} isActive={activeTags.composer} handleClick={handleClick}/>
    </div>
  )
}