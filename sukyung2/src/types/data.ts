export interface Card {
  cca2: string;
  flags: {
    png: string;
  };
  name: CardName;
  population: number;
  region: string;
  capital: [string];
}

export interface CardName {
  common: string;
  official: string;
  nativeName: Record<
    string,
    {
      common: string;
    }
  >;
}

export interface Detail {
  cca2: string;
  flags: {
    png: string;
  };
  name: CardName;
  population: number;
  region: string;
  subregion: string;
  capital: [string];
  tld: [string];
  currencies: Record<
    string,
    {
      name: string;
    }
  >;
  languages: Record<string, string>;
  borders: [string];
}
