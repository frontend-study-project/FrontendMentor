interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface Language {
  iso639_1?: string;
  iso639_2?: string;
  name?: string;
  nativeName?: string;
}

export interface CountryListResponse {
  id: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

export interface CountryResponse {
  id: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: Currency[];
  languages: Language[];
  borders: string[];
}

export interface Country extends CountryListResponse { }

export type CountryDetail = Omit<CountryResponse, 'topLevelDomain' | 'currencies' | 'languages'> & {
  topLevelDomain: string;
  currencies: string;
  languages: string;
  borderCountries: string[];
}