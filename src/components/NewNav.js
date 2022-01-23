import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Navbar({ fixed, props }) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const styleDiv = {
    backgroundColor: isDarkMode ? 'black' : '',
    color: isDarkMode ? 'white' : 'black',
    textAlign: 'center',
  };

  const darkModeStyles = {
    color: isDarkMode ? '' : 'yellow',
    width: '0px',
    height: '0px',
    borderRadius: '50%',
    backgroundColor: isDarkMode ? '#7BA4A4' : '',
    // boxShadow: isDarkMode ? '0 0 20px 10px #fff, 0 0 50px 25px #0ff' : '',
    // transition: isDarkMode ? 'box-shadow 4s ease-out' : '',
  };

  const lightbulbStyles = {
    color: isDarkMode ? '' : 'yellow',
    transition: isDarkMode ? 'color 2s ease-out' : '',
  };
  const moonStyles = {
    color: isDarkMode ? 'yellow' : '',
    transition: isDarkMode ? '' : 'color 2s ease-out',
    marginLeft: '-10px',
  };

  return (
    <>
      <nav
        style={styleDiv}
        className="header-bg h-auto relative flex flex-wrap items-center justify-between p-3"
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="mx-3 w-full relative flex justify-between lg:w-auto lg:static lg:justify-start">
            <div className="switch">
              <label className="my-label">
                <div style={darkModeStyles}>
                  <i
                    style={lightbulbStyles}
                    className="wow far fa-lightbulb"
                  ></i>
                </div>

                <input onChange={toggleTheme} type="checkbox" />
                <span className="lever"></span>
                <i style={moonStyles} className="far fa-moon"></i>
              </label>
            </div>
            <NavLink
              to="/"
              exact
              activeClassName="text-white"
              className="inline-flex items-center py-6 text-blue-500 hover:text-blue-800  text-4xl font-bold cursive tracking-widest"
            >
              <i className="fas fa-user-ninja fa-2x px-2 "></i>
              <span className="text-4xl md:text-5xl text-blue-100">M</span>
              <span className="text-4xl md:text-5xl">y</span>
              <span className="text-4xl md:text-5xl text-blue-100">C</span>
              <span className="text-4xl md:text-5xl">ode</span>
              <span className="text-4xl md:text-5xl text-blue-100">D</span>
              <span className="text-4xl md:text-5xl">ojo</span>
            </NavLink>

            <button
              className="text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center flex-row-reverse' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <NavLink
                  className="px-2 py-2  items-center text-med uppercase font-bold leading-snug text-white hover:text-blue-800 bg-blend-color"
                  to="/post"
                >
                  <i className="fas fa-blog myIcon"></i>
                  <span className="ml-2">Blog</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="px-2 py-2 items-center text-med uppercase font-bold leading-snug text-white hover:text-blue-800 "
                  to="/project"
                >
                  <i className="fas fa-folder-open myIcon "></i>
                  <span className="ml-2">Projects</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="px-2 py-2  items-center text-med uppercase font-bold leading-snug text-white hover:text-blue-800"
                  to="/about"
                >
                  <i className="fas fa-user-circle myIcon "></i>
                  <span className="ml-2">About</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
