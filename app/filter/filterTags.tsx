'use client'

import styles from './filterTags.module.css';
import { FaFilter } from "react-icons/fa6";
import Tag from './tag';
import type { TagState } from '../lib/interface';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';


export default function FilterTags() {
  const [activeTags, setActiveTags] = useState<TagState>({
    all: true,
    developer: false,
    artist: false,
    music: false,
    writer: false,
    playtester: false
  });
  const router = useRouter();
  const params = useParams();

  useEffect(()=>{
    const routerTagsArray = [];
    // Push active tags into the router tags array
    for(const item in activeTags) {
      if(activeTags[item]) {
        routerTagsArray.push(item);
      } 
    }

    // Push tags into router
    if(Object.keys(params).length > 0) {
      router.push(`?tags=`+ routerTagsArray.join('&tags='));
    } else {
      router.push(``);
    }
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
    <div className={styles['filtertags-section']}>
      <FaFilter />
      <Tag tag={'all'} isActive={activeTags.all} handleClick={handleClick}/>
      <Tag tag={'developer'} isActive={activeTags.developer} handleClick={handleClick}/>
      <Tag tag={'artist'} isActive={activeTags.artist} handleClick={handleClick}/>
      <Tag tag={'music'} isActive={activeTags.music} handleClick={handleClick}/>
      <Tag tag={'writer'} isActive={activeTags.writer} handleClick={handleClick}/>
      <Tag tag={'playtester'} isActive={activeTags.playtester} handleClick={handleClick}/>
    </div>
  )
}