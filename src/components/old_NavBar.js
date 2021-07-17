import React from 'react'
import { NavLink } from 'react-router-dom'




export default function NavBar() {
  return (
    // <header className="bg-blue-600 lg:pb-10">
    //   <div className="container mx-auto flex">
    //     <nav className="lg:flex text-center mx-auto content-center cutive space-x-5 lg:space-x-3">
          // <NavLink
          //   to="/"
          //   exact
          //   activeClassName="text-white"
          //   className="inline-flex items-center py-6 px-10 mr-4 text-blue-100 hover:text-red-300  text-4xl font-bold cursive tracking-widest"
          // >
          //   <i className="fas fa-user-ninja fa-2x px-2 "></i> MyCodeDojo
          // </NavLink>

          // <NavLink
          //   to="/post"
          //   activeClassName="text-blue-100 bg-blue-700"
          //   className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-red-300 "
          // >
          //   Blog
          // </NavLink>
    //       <NavLink
    //         to="/project"
    //         activeClassName="text-blue-100 bg-blue-700"
    //         className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-red-300 "
    //       >
    //         Projects
    //       </NavLink>
    //       <NavLink
    //         to="/about"
    //         activeClassName="text-blue-100 bg-blue-700"
    //         className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-red-300 "
    //       >
    //         About         
    //       </NavLink>
    //     </nav>
    //   </div>
    // </header>
  <div className="w-screen-0 flex flex-row items-center p-1 justify-between bg-white shadow-xs">
    <div className="ml-8 text-lg text-gray-700 hidden md:flex">
          <NavLink
                  to="/"
                  exact
                  activeClassName="text-white"
                  className="inline-flex items-center py-6 px-10 mr-4 text-red-500 hover:text-red-800  text-4xl font-bold cursive tracking-widest"
                >
                  <i className="fas fa-user-ninja fa-2x px-2"></i> 
                  <span className="text-red-100">M</span>
                  y
                  <span className="text-red-100">C</span>
                  ode
                  <span className="text-red-100">D</span>
                  ojo
          </NavLink></div>
    <span className="w-screen-0 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
      <input type="search" name="search" placeholder="Search"
        className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none" />
      <i className="fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4">
      </i>
    </span>
    <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
      <i className="fas fa-bars"></i>
    </div>
      <div className="flex flex-row mr-8 hidden md:flex">
        <div className="rounded text-gray-700 text-center bg-gray-400 px-4 py-2">
        <NavLink
            to="/post"
            activeClassName="text-blue-100 bg-blue-700"
            className="inline-flex items-center rounded text-blue-900 hover:text-red-700 "
          >
            Blog
          </NavLink>
        </div>
        <div className="rounded text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        <NavLink
            to="/project"
            activeClassName="text-blue-100 bg-blue-700"
            className="inline-flex items-center rounded text-blue-900 hover:text-red-700 "
          >
            Projects
          </NavLink>
        </div>
        <div className="rounded text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        <NavLink
            to="/about"
            activeClassName="text-blue-100 bg-blue-700"
            className="inline-flex items-center rounded text-blue-900 hover:text-red-700 "
          >
            About
        </NavLink>
        </div>
      </div>
  </div>
  )
}
