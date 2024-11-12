import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';

function HomeLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div>
      <Navbar />
      <section className="page" style={{ position: 'relative' }}>
        {isLoading ? (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
            }}
            className="loading"
          ></div>
        ) : (
          <Outlet />
        )}
      </section>
    </div>
  );
}
export default HomeLayout;
