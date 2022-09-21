export const getData = async (params: string | number = '', method: string = 'GET', data = {}) => {
  const response = await fetch(`https://api.jikan.moe/v4/anime${params}`, {
    method: method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    referrerPolicy: 'no-referrer',
  });
  return response.json();
};
