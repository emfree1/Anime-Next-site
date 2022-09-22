export const getData = async (params: string | number = '', method: string = 'GET') => {


  const response = await fetch(`https://api.jikan.moe/v4/anime${params}`, {
      method: method,
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      referrerPolicy: 'no-referrer',
    }
  )

  return response.json().catch(e => console.log('error', e));
};
