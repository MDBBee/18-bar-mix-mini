import styled from 'styled-components';

const Wrapper = styled.nav`
  background: var(--nav-textColor);
  box-shadow: var(--shadow-3);
  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }
  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: var(--primary-500);
    font-weight: 700;
    letter-spacing: 2px;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 0.5rem;
  }
  .nav-link {
    color: var(--grey-900);
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
    letter-spacing: 2px;
  }

  .nav-link:hover,
  .active {
    color: var(--primary-500);
  }

  .btn-theme {
    align-self: flex-start;
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    display: grid;
    place-items: center;
  }

  /*  active */
  @media screen and (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 0;
    }

    .nav-links {
      flex-direction: row;
      margin-top: 0;
      align-items: center;
    }

    .btn-theme {
      align-self: center;
    }
  }
`;
export default Wrapper;
