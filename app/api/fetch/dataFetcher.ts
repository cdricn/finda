//Link to API: https://itch-jamcommunity-api.vercel.app/jams
//Replace in prod
import { TagType } from "@/app/lib/interface";
const apiLink = process.env.API_ENDPOINT;

export async function FetchJams() {
  try {
    const minMemberCount = 300;
    const link = `${apiLink}/gamejams/minMembers/${minMemberCount}`;
    console.log(link)
    const response = await fetch(link, { method: "GET"});
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
  const link = `${apiLink}/gamejam/posts/${newUrl}`;
  
  // can't check wrong spelling; maybe address it later
  const definedTags : TagType = {
    programmer: "developer", 
    developer: "developer",
    dev: "developer",
    coder: "developer",
    sound: "music",
    audio: "music",
    musician: "music",
    music: "music",
    composer: "music", 
    sfx: "music",
    artist: "artist", 
    voice: "voice actor", 
    actor: "voice actor",
    va: "voice actor",
    narrative: "writer",
    writer: "writer",
    playtester: "playtester"
  };

  try {
    const response = await fetch(link, { method: "GET"});
    const data = await response.json();

    //loop through data to get each entry
    for(const i in data) {
      //split array based on space to get words
      const titleArray = data[i].title.split(" ");
      //add an empty object to data to store tags as key/value
      data[i].tags = {};
      //loop through new array
      for (const word in titleArray) {
        let title = titleArray[word].toLowerCase();
        //if word is plural, remove s
        if (title[title.length-1] === 's') title=title.slice(0,title.length-1);
        
        if (definedTags.hasOwnProperty(title)) {
          //remove special chars
          title = title.replace(/[^a-zA-Z0-9]/g, '');
          data[i].tags[definedTags[title]] = definedTags[title];
        }
        //if the word has a slash, we split again; ex: "musician/composer"
        else if (titleArray[word].includes("/")) {
          //split first, then remove remaining special characters
          let [firstWord, secondWord] = title.split("/");
          firstWord = firstWord.replace(/[^a-zA-Z0-9]/g, '');
          secondWord = secondWord.replace(/[^a-zA-Z0-9]/g, '');
          
          if (definedTags.hasOwnProperty(firstWord)) {
            data[i].tags[definedTags[firstWord]] = definedTags[firstWord];
          }
          if (definedTags.hasOwnProperty(secondWord)) {
            data[i].tags[definedTags[secondWord]] = definedTags[secondWord];
          }
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
