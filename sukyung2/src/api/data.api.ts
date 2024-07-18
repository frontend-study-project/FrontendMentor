const baseUrl = 'https://restcountries.com/v3.1';

export function getCountries() {
  const allUrl = new URL(`${baseUrl}/all/`);
  allUrl.searchParams.append(
    'fields',
    'cca2,flags,name,population,region,capital'
  );

  return fetch(allUrl.toString())
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch all countries data');
      }
      return res.json();
    })
    .then((data) => data);
}

export async function getCountry(name: string) {
  const detailUrl = new URL(`${baseUrl}/name/${name}`);
  detailUrl.searchParams.append(
    'fields',
    'cca2,flags,name,population,region,subregion,capital,tld,currencies,languages'
  );

  const response = await fetch(detailUrl.toString());

  if (!response.ok) {
    throw new Error('Failed to fetch country data');
  }
  return response.json();
}
