import { Suspense, useState } from "react";
import Search from "../components/main/Search";
import Filter from "../components/main/Filter";
import CountryList from "../components/main/CountryList";
import Loading from "../components/common/Loading";

const Main = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  
  return (
    <div className="mt-10">
      <div className="toolbox h-14 flex justify-between relative">
        <Search search={search} onSearch={setSearch} />
        <Filter filter={filter} onFilter={setFilter} />
      </div>
      <Suspense fallback={<Loading />} >
        <CountryList search={search} filter={filter} />
      </Suspense>
    </div>
  );
}
 
export default Main;