import { getCountries, GetCountriesProps, getCountry } from "./countries";

export const fetchCountries = (props: GetCountriesProps) =>
  getCountries(props);

export const fetchCountry = (id: string) =>
  getCountry(id);