import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function HomeLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
export default HomeLayout;
