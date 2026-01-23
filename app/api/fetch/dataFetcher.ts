//Link to API: https://itch-jamcommunity-api.vercel.app/jams
//Replace in prod

import { TagType } from "@/app/lib/interface";

export async function FetchJams() {
  try {
    const minMemberCount = 300;
    const response = await fetch(`http://localhost:8000/jams/minMembers/${minMemberCount}`, { method: "GET"});
    const data = await response.json();
    return data;
  }
  catch (error) {
    return error;
  }
}

export async function FetchPosts(url:string) {
  if(!url) return;
  // dumbass band aid fix
  // url string is passed with a /api/ in front, so we're just removing that
  // we're already slicing in filterJams.tsx, but that's just to make the link pretty
  // idk how I can exclude /api/, I'm p sure I missed something. Get back to it later
  // console.log(url) // Check if url changed 
  const excessString = 5;
  const newUrl = url.slice(excessString); 
  const tags : TagType = {
    programmer: "programmer", 
    developer: "programmer",
    coder: "programmer",
    musician: "composer",
    composer: "composer", 
    artist: "artist", 
    artists: "artist",
    voice: "voice actor", 
    actor: "voice actor",
    va: "voice actor",
    writer: "writer",
    producer: "generic",
    designer: "generic",
    playtester: "playtester"
  };

  try {
    const response = await fetch(`http://localhost:8000/posts/${newUrl}/teams`, { method: "GET"});
    const data = await response.json();

    //loop through data to get each entry
    for(const i in data) {
      //split array based on space to get words
      const titleArray = data[i].title.split(" ");
      //add an empty array to data
      data[i].tags = [];
      //loop through new array
      for (const str in titleArray) {
        //if there's a slash, we split again; ex: "musician/composer"
        //though since we're categorizing the tags, like musician and composer goes to category of composer
        //maybe it's better to just get the first instance?
        //but this could fail if the post is finding 2 different things 
        if (titleArray[str].includes("/")) {
          const separatedWords = titleArray[str].split("/");
          if (tags.hasOwnProperty(separatedWords[0].toLowerCase())) {
            data[i].tags.push(tags[separatedWords[0].toLowerCase()]);
          }
          if (tags.hasOwnProperty(separatedWords[1].toLowerCase())) {
            data[i].tags.push(tags[separatedWords[1].toLowerCase()]);
          }
        }
        //else just push it in if it matches the key
        if (tags.hasOwnProperty(titleArray[str])) {
          data[i].tags.push(tags[titleArray[str].toLowerCase()]);
        }
      }
    }
    console.log('data fetched',data);
    return data;
  }
  catch (error) {
    return error;
  }
}
