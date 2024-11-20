import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/Navbar';
import { useGlobalContext } from '../utils/context';
import { MdDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';

function Navbar() {
  const { isDarkMode, setIsDarkMode } = useGlobalContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/Newsletter" className="nav-link">
            Newsletter
          </NavLink>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="btn-theme"
          >
            {isDarkMode === true ? <MdOutlineLightMode /> : <MdDarkMode />}
          </button>
        </div>
      </div>
    </Wrapper>
  );
}
export default Navbar;
