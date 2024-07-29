import ReactDOM from 'react-dom/client'
import './index.css'
import QueryClientProvider from './components/provider/QueryClientProvider'
import { RouterProvider } from 'react-router-dom'
import router from './router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider>
    <RouterProvider router={router} />
  </QueryClientProvider>,
)
