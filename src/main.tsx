import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';

import { Provider } from 'react-redux';
import { store } from './store/store';
import './index.scss';
import CartDrawer from './components/CartDrawer/cart-drawer.component';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      // retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        {/* Cart Drawer */}
        <CartDrawer />
      </Provider>
    </BrowserRouter>
  </QueryClientProvider>,
  // </React.StrictMode>
);
