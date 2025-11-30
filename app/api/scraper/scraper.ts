async function FetchJams() {
  const response = await fetch('http://localhost:8000/jams', { method: "GET"});
  const data = await response.json();
  return data;
}
export default FetchJams;

//
//https://itch-jamcommunity-api.vercel.app/jams