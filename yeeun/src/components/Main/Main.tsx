import useApiQuery from '../../hooks/useApi';
import Filter from './Filter';
import List from './List';
import Search from './Search';

const Main = () => {
  const { data } = useApiQuery();

  return (
    <div
      css={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '40px 80px',
        backgroundColor: '#FAFAFA',
      }}
    >
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: '40px',
        }}
      >
        <Search />
        <Filter />
      </div>
      <List data={data} />
    </div>
  );
};

export default Main;
