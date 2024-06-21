import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getCountryInfo = () => {
  return axios
    .get('https://restcountries.com/v3.1/all')
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log('error: ' + err);
    });
};

const useApiQuery = () => {
  return useQuery({
    queryKey: ['api'],
    queryFn: getCountryInfo,
    // queryFn에 들어가느 함수는 return이 있어야함..!!!!!!!!!!!!
  });
};

export default useApiQuery;
