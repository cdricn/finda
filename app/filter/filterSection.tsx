'use client';

import styles from './filter.module.css';
import { FaFilter } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import FilterTag from './filterTag';

interface TagType {
  [tag:string] : boolean;
}

export default function FilterSection() {
  const [tags, setTags] = useState<TagType>({
    all: true,
    developer: false,
    artist: false,
    composer: false
  })
  const router = useRouter();

  useEffect(()=>{
    const routerTagsArray = [];
    // Push active tags into the router tags array
    for(const item in tags) {
      if(tags[item]) {
        routerTagsArray.push(item);
      } 
    }

    // Push tags into router
    if(tags.all || routerTagsArray.length==0) {
      router.push("/");
    } 
    else {
      router.push("?tags="+ routerTagsArray)
    }
  }, [tags])

  function handleClick(tag:string) {
    setTags(prev=>{
      if(tag === 'all') {
        return {
          all: true,
          developer: false,
          artist: false,
          composer: false
        }
      }
      else {
        return {...prev, all: false, [tag]:!tags[tag]}
      }
    })
  }

  return (
    <div className={styles['filter-section']}>
      <FaFilter />
      <FilterTag tag={'all'} isActive={tags.all} handleClick={handleClick}/>
      <FilterTag tag={'developer'} isActive={tags.developer} handleClick={handleClick}/>
      <FilterTag tag={'artist'} isActive={tags.artist} handleClick={handleClick}/>
      <FilterTag tag={'composer'} isActive={tags.composer} handleClick={handleClick}/>
    </div>
  )
}