import useApiQuery from '../../hooks/useApi';
import Filter from './Filter';
import List from './List';
import Search from './Search';

const Main = () => {
  const { data } = useApiQuery();

  return (
    <>
      <div>
        <Search />
        <Filter />
      </div>
      <List data={data} />
    </>
  );
};

export default Main;
