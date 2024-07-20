import { QueryClient, useQuery } from '@tanstack/react-query';
import { getCountries, getCountry } from '../api/data.api';

export const queryClient = new QueryClient();

export function useCountriesData(inputKey: string, regionKey: string) {
  return useQuery({
    queryKey: ['all', { filterInput: inputKey }, { filterRegion: regionKey }],
    queryFn: async () => {
      const countries = await getCountries();

      if (regionKey !== 'Filter By Region') {
        return countries.filter((country) =>
          country.region.includes(regionKey)
        );
      }

      if (inputKey === '') {
        return countries;
      }

      return countries.filter((country) =>
        country.name.official.toLowerCase().includes(inputKey)
      );
    },
  });
}

export function useCountryData(name: string) {
  return useQuery({
    queryKey: ['detail', name],
    queryFn: async () => {
      const data = await getCountry(name);

      return data[0];
    },
  });
}

// export async function useFilteredCountries(type: string, key: string) {
//   return useQuery({
//     queryKey: ['filter', type, key],
//     queryFn: async () => {
//       const originCountries = await queryClient.getQueryData(['all']);
//       let filteredCountries;

//       if (type === 'region') {
//         filteredCountries = originCountries.filter(
//           (country) => country.name.official === key
//         );
//       } else {
//         filteredCountries = originCountries.filter(
//           (country) => country.region === key
//         );
//       }

//       return filteredCountries;
//     },
//   });
// }
