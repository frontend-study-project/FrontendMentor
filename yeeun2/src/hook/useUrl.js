import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useApi = (url) =>
  useQuery({ queryKey: ['api'], queryFn: () => getApi(url) });

const getApi = async (url) => {
  try {
    const res = await axios.post('/api/v1/shorten', { url });
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};
