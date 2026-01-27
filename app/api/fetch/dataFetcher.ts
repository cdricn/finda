//Link to API: https://itch-jamcommunity-api.vercel.app/jams

import { ParamValue } from "next/dist/server/request/params";

// Change this to a class?
const apiLink = process.env.API_ENDPOINT;

export async function FetchJams() {
  const minMemberCount = 300;
  const link = `${apiLink}/gamejams/minMembers/${minMemberCount}`;

  const response = await fetch(link, { method: "GET"});
  const data = await response.json();
  return data;
}

export async function FetchPosts(url:ParamValue) {
  if(!url) return;

  const excessString = 5;
  const link = `${apiLink}/gamejam/${url.slice(excessString)}`;

  const response = await fetch(link, { method: "GET"});
  const data = await response.json();

  return data;
}

export async function FetchInfo(url:ParamValue) {
  if(!url) return;

  const excessString = 5;
  const link = `${apiLink}/gamejam/${url.slice(excessString)}`;

  const response = await fetch(link, { method: "GET"});
  const data = await response.json();

  return data;
}