import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/not-found.svg';

function Error() {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not-found" />
          <h3>Ohh!!!!</h3>
          <p>
            Couldn't find the requested page, perhaps the entered url is
            wrong...
          </p>
          <Link to="/">&larr; Back to HomePage</Link>
        </div>
      </Wrapper>
    );
  }

  return <h1>ERROR!!!!</h1>;
}
export default Error;
