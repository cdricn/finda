//Link to API: https://itch-jamcommunity-api.vercel.app/jams

import { ParamValue } from "next/dist/server/request/params";

//Replace in prod
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

export async function FetchPosts(url:ParamValue) {
  if(!url) return;
  const link = `${apiLink}/gamejam/posts/${url}`;

  try {
    const response = await fetch(link, { method: "GET"});
    const data = await response.json();
    return data;
  }
  catch (error) {
    return error;
  }
}

export async function FetchInfo(url:ParamValue) {
  if(!url) return;

  const link = `${apiLink}/gamejam/details/${url}`;

  try {
    const response = await fetch(link, { method: "GET"});
    const data = await response.json();
    return data;
  }
  catch (error) {
    return error;
  }
}