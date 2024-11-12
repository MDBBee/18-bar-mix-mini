import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Error,
  Cocktail,
  HomeLayout,
  Landing,
  Newsletter,
  About,
  SinglePageError,
} from './pages';

import { loader as landingLoader } from './pages/Landing';
import { loader as singleCocktailLoader } from './pages/Cocktail';
import { action as newsletterAction } from './pages/Newsletter';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <SinglePageError />,
        // action: searchFormAction,
      },
      { path: 'about', element: <About /> },
      {
        path: 'cocktail/:id',
        element: <Cocktail />,
        loader: singleCocktailLoader,
        errorElement: <SinglePageError />,
      },
      { path: 'newsletter', element: <Newsletter />, action: newsletterAction },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
};
export default App;
