import React from 'react'
import { NavLink } from 'react-router-dom'




export default function NavBar() {
  return (
    <header className="bg-blue-600 lg:pb-10">
      <div className="container mx-auto flex">
        <nav className="lg:flex text-center mx-auto content-center space-between cutive">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-10 mr-4 text-blue-100 hover:text-red-300  text-4xl font-bold cursive tracking-widest"
          >
            <i className="fas fa-user-ninja fa-2x px-2 "></i> MyCodeDojo
          </NavLink>

          <NavLink
            to="/post"
            activeClassName="text-blue-100 bg-blue-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-red-300 "
          >
            Blog
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-blue-100 bg-blue-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-red-300 "
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-blue-100 bg-blue-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-red-300 "
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
