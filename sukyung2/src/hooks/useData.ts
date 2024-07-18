import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getCountries, getCountry } from '../api/data.api';
import { Card } from '../types/data';

export function useCountriesData() {
  return useQuery({
    queryKey: ['all'],
    queryFn: () => getCountries(),
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

export function useFilterCountries(inputValue: string) {
  const queryClient = useQueryClient();
  const originCountries = queryClient.getQueryData(['all']);

  return originCountries.filter((country) =>
    country.name.official.toLowerCase().replace(/\s+/g, '').includes(inputValue)
  );

  // const filteredCountries = originCountries.filter((country) => {
  //   const filterString = country.name.official
  //     .toLowerCase()
  //     .replace(/\s+/g, '');
  //   const inputString = inputValue.toString().replace(/\s+/g, '');

  //   return filterString === inputString;
  // });

  // queryClient.setQueryData(['all'], filteredCountries);
}
