import { QueryClientProvider as Provider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  } 
});

const QueryClientProvider = ({ children }: Props) => {
  return (
    <Provider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </Provider>
  );
};

export default QueryClientProvider;
