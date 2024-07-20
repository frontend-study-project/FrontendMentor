const baseUrl = 'https://restcountries.com/v3.1';

export async function getCountries() {
  const allUrl = new URL(`${baseUrl}/all/`);
  allUrl.searchParams.append(
    'fields',
    'cca2,flags,name,population,region,capital'
  );

  const response = await fetch(allUrl.toString());

  if (!response.ok) {
    throw new Error('Failed to fetch all countries data');
  }
  return response.json();
}

export async function getCountry(name: string) {
  const detailUrl = new URL(`${baseUrl}/name/${name}`);
  detailUrl.searchParams.append(
    'fields',
    'cca2,flags,name,population,region,subregion,capital,tld,currencies,languages,borders'
  );

  const response = await fetch(detailUrl.toString());

  if (!response.ok) {
    throw new Error('Failed to fetch country data');
  }
  return response.json();
}
