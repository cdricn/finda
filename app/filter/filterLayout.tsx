'use client';

import Header from '../components/header';
import FilterJams from './filterJams';
import FilterTags from './filterTags';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { TagType, GameJam } from '../lib/interface';

type FilterLayoutType = {
  handleJamChange: (func: string) => void;
}

export default function FilterLayout({handleJamChange}:FilterLayoutType) {
  const [tagFilter, setTagFilter] = useState<TagType>({
    all: true,
    developer: false,
    artist: false,
    composer: false
  })
  const [selectedJam, setSelectedJam] = useState<GameJam>({
    title: '',
    url: '',
    members: 0,
    deadline: '',
    host: ''
  });
  const router = useRouter();

  useEffect(()=>{
    const routerTagsArray = [];
    // Push active tags into the router tags array
    for(const item in tagFilter) {
      if(tagFilter[item]) {
        routerTagsArray.push(item);
      } 
    }

    // Push tags into router
    if(tagFilter.all || routerTagsArray.length==0) {
      router.push("/");
    } 
    else {
      router.push("?tags="+ routerTagsArray)
    }

    handleJamChange(selectedJam.url);
  }, [selectedJam, tagFilter, router]);

  function setTags(tags:TagType) {
    setTagFilter(tags);
  }

  function onChange(newSelectedJam:GameJam) {
    setSelectedJam(newSelectedJam);
  }

  return (
    <div>
      <Header jamDetails={selectedJam}/>
      <FilterJams onChange={onChange}/>
      <FilterTags setTags={setTags}/>
    </div>
  )
}