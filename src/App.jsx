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
      },
      { path: 'about', element: <About /> },
      {
        path: 'cocktail/:id',
        element: <Cocktail />,
        loader: singleCocktailLoader,
      },
      { path: 'newsletter', element: <Newsletter /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
