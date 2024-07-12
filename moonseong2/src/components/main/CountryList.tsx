import { useFetchCountries } from "../../hooks/useCountry";
import List from "./List";

interface CountryListProps {
  search: string;
  filter: string;
}
 
const CountryList = ({ search, filter }: CountryListProps) => {
  const { data: countries = [] } = useFetchCountries({ search, filter });

  return (
    <div className="mt-11 pb-10">
      <List data={countries} />
    </div>
  );
}
 
export default CountryList;