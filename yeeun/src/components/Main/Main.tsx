import { useState } from 'react';
import useApiQuery from '../../hooks/useApi';
import Filter from './Filter';
import List from './List';
import Search from './Search';

const Main = () => {
  const { data } = useApiQuery();
  const [countryData, setCountryData] = useState('');
  const searchData = data?.filter((c) =>
    c.name.common.toLowerCase().includes(countryData)
  );
  console.log(searchData);

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
        <Search setCountryData={setCountryData} />
        <Filter />
      </div>
      <List data={searchData} />
    </div>
  );
};

export default Main;
