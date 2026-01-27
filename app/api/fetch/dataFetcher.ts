//Link to API: https://itch-jamcommunity-api.vercel.app/jams

import { ParamValue } from "next/dist/server/request/params";

const apiLink = process.env.API_ENDPOINT;

class FetchError extends Error {
  status;
  constructor(message:string, status:number) {
    super(message);
    this.status = status;
  }
}

async function ResponseHandler(response: Response) {
  if (response.status === 404) {
    throw new FetchError('An error occured while fetching the data.', response.status);
  }
  if (response.ok) {
    const data = await response.json();
    return data;
  }
}

export async function FetchJams() {
  const minMemberCount = 300;
  const link = `${apiLink}/gamejams/minMembers/${minMemberCount}`;
  const response = await fetch(link, { method: "GET"});
  
  return ResponseHandler(response);
}

// combinable with fetchinfo
export async function FetchPosts(url:ParamValue) {
  if(!url) return;
  
  const excessString = 5;
  const link = `${apiLink}/gamejam/${url.slice(excessString)}`;
  const response = await fetch(link, { method: "GET"});

  return ResponseHandler(response);
}

export async function FetchInfo(url:ParamValue) {
  if(!url) return;

  const excessString = 5;
  const link = `${apiLink}/gamejam/${url.slice(excessString)}`;
  const response = await fetch(link, { method: "GET"});

  return ResponseHandler(response);
}