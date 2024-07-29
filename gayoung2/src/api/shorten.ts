import axios, { AxiosResponse } from 'axios';

export const postShortenAPI = (url: string): Promise<AxiosResponse<{ result_url: string }>> => {
  return axios.post('/api/v1/shorten', { url })
      .then(res => res.data)
}