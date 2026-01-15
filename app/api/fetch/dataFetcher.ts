//Link to API: https://itch-jamcommunity-api.vercel.app/jams

export async function FetchJams() {
  try {
    const response = await fetch('http://localhost:8000/jams', { method: "GET"});
    const data = await response.json();
    return data;
  }
  catch (error) {
    return error;
  }
}

export async function FetchPosts(url:string) {
  if(!url) return;

  const newUrl = url.slice(25);

  try {
    const response = await fetch(`http://localhost:8000/posts/${newUrl}`, { method: "GET"});
    const data = await response.json();
    
    return data;
  }
  catch (error) {
    return error;
  }
}