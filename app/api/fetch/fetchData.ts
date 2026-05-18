const apiLink = process.env.API_ENDPOINT;

async function FetchApi(path:string) {
  try {
    const response = await fetch(`${apiLink}/${path}`, { method: "GET"});

    if (response.status === 404) {
      throw new Error('An error occured while fetching the data.');
    }
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  }
  catch {
    return null
  }
} 

export const fetchData = {
  getResource: (id:string, resource:string)=>
    FetchApi(`${resource}/${id}`),

  getJams: (resource:string, param:number)=>
    FetchApi(`${resource}/${param}`),

  getPosts: (id:string, resource:string, tags:string)=>
    FetchApi(`${resource}/${id}?tags=${tags}`),
}