import { useQuery } from '@tanstack/react-query';
import { getCountriesData, getCountryData } from '../api/data.api';
import { Card } from '../types/data';

export function useCountriesData() {
  return useQuery({
    queryKey: ['all'],
    queryFn: async () => {
      const data = await getCountriesData();

      return data;
    },
  });
}

export function useCountryData(name) {
  return useQuery({
    queryKey: ['detail', name],
    queryFn: async () => {
      const data = await getCountryData(name);

      return data[0];
    },
  });
}
