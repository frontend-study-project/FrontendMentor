import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Main from '../components/Main/Main';
import Detail from '../components/Detail/Detail';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/:cca3',
        element: <Detail />,
      },
    ],
  },
]);

export default router;
