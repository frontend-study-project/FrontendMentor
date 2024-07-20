import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getCountries, getCountry } from '../api/data.api';

export function useCountriesData(key: string) {
  return useQuery({
    queryKey: ['all', key],
    queryFn: async () => {
      const countries = await getCountries();

      if (key === '') {
        return countries;
      }

      const filteredCountries = countries.filter((country: string) =>
        country.name.official.toLowerCase().includes(key)
      );

      return filteredCountries;
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
