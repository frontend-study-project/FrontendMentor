import { CountryListResponse, CountryResponse } from '../types/country.type';
import countries from './countries.json';

export interface GetCountriesProps {
  filter: string;
  search: string;
}

export const getCountries = ({ filter = '', search = '' }: GetCountriesProps): Promise<CountryListResponse[]> => {
  const { resolve, promise } = Promise.withResolvers<CountryListResponse[]>();

  setTimeout(() => {
    resolve(countries
      .filter(({ name, region }) => (
        name.toLowerCase().includes(search.toLowerCase()) && region.toLowerCase().includes(filter.toLowerCase())
      ))
      .map(({ name, alpha3Code, population, region, capital = '', flag }) => ({
        id: alpha3Code,
        name,
        population,
        region,
        capital,
        flag
      })));
  }, 500);

  return promise;
};

export const getCountry = (id: string): Promise<CountryResponse> => {
  const { resolve, promise, reject } = Promise.withResolvers<CountryResponse>();

  setTimeout(() => {
    const country = countries.find((country) => country.alpha3Code === id);

    if (!country) return reject('Country not found');

    const {
      alpha3Code,
      name,
      population,
      region,
      capital = '',
      flag,
      nativeName,
      subregion,
      topLevelDomain,
      currencies = [],
      languages = [],
      borders = [],
    } = country;

    resolve({
      id: alpha3Code,
      name,
      population,
      region,
      capital,
      flag,
      nativeName,
      subregion,
      topLevelDomain,
      currencies,
      languages,
      borders,
    });
  }, 500);

  return promise;
};