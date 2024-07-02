import { useSuspenseQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

function getShorten(url: string): Promise<AxiosResponse<{ result_url: string; }>> {
  return axios.post('/api/v1/shorten', { url });
}

export const useFetchLink = (search: string) => {
  return useSuspenseQuery({
    queryKey: ['url', search],
    queryFn: () => search ? getShorten(search) : null,



    select: (data) => {
      if (!data) return data;

      return {
        shortedUrl: data.data.result_url,
        url: search,
      };
    }
  });
};