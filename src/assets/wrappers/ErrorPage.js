import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 90vw;
    max-width: 600px;
    margin: -3rem 0 2rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.5rem;
    margin: 0.5rem 0 1rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`;

export default Wrapper;
