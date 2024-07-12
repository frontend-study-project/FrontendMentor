import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import ErrorBoundary from "../components/detail/ErrorBoundary";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/:countryId',
        element: <Detail />,
        errorElement: <ErrorBoundary />
      },
    ],
  },
]);

export default router;
