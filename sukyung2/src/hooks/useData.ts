import { useQuery } from '@tanstack/react-query';
import { getCardData } from '../api/data.api';
import { Card } from '../types/data';

export function useAllData() {
  return useQuery({
    queryKey: ['all'],
    queryFn: async () => {
      const data = await getCardData();

      return data;
    },
  });
}
