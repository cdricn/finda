async function GetJams() {
  const response = await fetch('https://itch-jamcommunity-api.vercel.app/jams', { method: "GET"});
  const data = await response.json();
  return data;
}

export default GetJams;