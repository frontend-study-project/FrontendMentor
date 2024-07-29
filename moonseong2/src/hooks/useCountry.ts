import { useSuspenseQuery } from "@tanstack/react-query";
import * as countryApi from '../api/country.api';
import { CountryDetail } from "../types/country.type";

interface SearchCountriesProps {
  search: string;
  filter: string;
}

export const useFetchCountries = ({ search, filter }: SearchCountriesProps) => (
  useSuspenseQuery({
    queryKey: ['country', { search, filter }],
    queryFn: () => countryApi.fetchCountries({ search, filter }),
  })
);

export const useFetchCountry = (id: string) => (
  useSuspenseQuery({
    queryKey: ['country', id],
    queryFn: () => countryApi.fetchCountry(id),
    select: (data) => {
      if (!data) return null;

      return {
        ...data,
        topLevelDomain: data?.topLevelDomain.join(', ') || '',
        currencies: data?.currencies.map(({ name }) => name).join(', ') || '',
        languages: data?.languages.map(({ name }) => name).join(', ') || '',
        borderCountries: data?.borders,
      } as CountryDetail;
    },
  })
);