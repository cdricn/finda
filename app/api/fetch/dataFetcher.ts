//Link to API: https://itch-jamcommunity-api.vercel.app/jams
//Replace in prod
import { TagType } from "@/app/lib/interface";
const apiLink = process.env.API_ENDPOINT;

export async function FetchJams() {
  try {
    const minMemberCount = 300;
    const link = `${apiLink}/gamejams/minMembers/${minMemberCount}`;
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

  try {
    const response = await fetch(link, { method: "GET"});
    const data = await response.json();
    return data;
  }
  catch (error) {
    return error;
  }
}
