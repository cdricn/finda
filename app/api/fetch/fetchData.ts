const apiLink = process.env.API_ENDPOINT;

async function FetchApi(path:string) {
  const data = await fetch(`${apiLink}/${path}`);
  return data.json();
} 

export const fetchData = {
  getResource: (id:string, resource:string)=>
    FetchApi(`${resource}/${id}`),

  getJams: (id:string, resource:string, param:number)=>
    FetchApi(`${resource}/${param}/${id}`)
}