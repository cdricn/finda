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