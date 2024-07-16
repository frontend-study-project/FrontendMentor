const url = new URL('https://restcountries.com/v3.1/all');

export function getCardData() {
  url.searchParams.append('field', 'flags,name,population,region,capital');
  console.log(url);

  return fetch(url.toString())
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch all countries data');
      }
      return res.json();
    })
    .then((data) => data);
}
