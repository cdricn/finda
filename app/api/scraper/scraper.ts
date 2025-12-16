async function FetchJams() {
  try {
    const response = await fetch('http://localhost:8000/jams', { method: "GET"});
    const data = await response.json();
    return data;
  }
  catch (e) {
    console.log("Data fetch failed. ", e)
  }
}

export default FetchJams;
//https://itch-jamcommunity-api.vercel.app/jams

