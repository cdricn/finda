//https://itch-jamcommunity-api.vercel.app/jams

export async function FetchJams() {
  //await new Promise((resolve) => setTimeout(resolve, 2000))
  const response = await fetch('http://localhost:8000/jams', { method: "GET"});
  const data = await response.json();
  return data;
}

