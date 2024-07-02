import axios from "axios";

export const getCountryData = async () => {
  const response = await axios.get('/src/_lib/data.json');
  return response.data;
};