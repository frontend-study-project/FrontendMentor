import { Outlet } from 'react-router-dom';
import Header from './components/Common/Header';
import { globalStyles } from './styles/global';
import { Global } from '@emotion/react';

const App = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Header />
      <Outlet />
    </>
  );
};

export default App;
