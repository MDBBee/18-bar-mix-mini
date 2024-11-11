import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error, Cocktail, HomeLayout, Landing, Newsletter } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '/about',
    element: <h2>About page</h2>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
