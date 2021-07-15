import React from "react";
import { NavLink } from 'react-router-dom'


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between p-3 bg-gray-900">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:justify-start">
          <NavLink
                  to="/"
                  exact
                  activeClassName="text-white"
                  className="inline-flex items-center py-6 text-red-500 hover:text-red-800  text-4xl font-bold cursive tracking-widest"
                >
                  <i className="fas fa-user-ninja fa-2x px-2 "></i> MyCodeDojo
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
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/post"
                >
                  <i className="fas fa-blog text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Blog</span>
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/project"
                >
                  <i className="fas fa-folder-open text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Projects</span>
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/about"
                >
                  <i className="fas fa-user-circle text-lg leading-lg text-white opacity-75"></i><span className="ml-2">About</span>
                </NavLink>
              </li>
              <li className="nav-item">
              <span className="w-screen-0 md:w-1/3 h-10 bg-gray-200 cursor-pointer border-gray-300 text-sm rounded-full flex">
                <input type="search" name="serch" placeholder="Search"
                    className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none" />
                <i className="fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4">
                </i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
