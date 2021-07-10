import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'



export default function NavBar() {
  return (
    <header className="bg-blue-600 pb-10">
      <div className="container mx-auto flex justify-between">
        <nav className="lg:flex cutive">
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
            Blog Posts
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
        <div className="lg:inline-flex ml-5 py-6 lg:px-3 lg:my-6">
        <div className="py-2">
        <SocialIcon url="https://github.com/mcooper7649" className='mr-4' target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
        </div>
        <div className="py-2">
        <SocialIcon url="https://www.linkedin.com/in/mcooper305/" className='mr-4' target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
        </div>
        <div className="py-2">
        <SocialIcon url="https://medium.com/@koopnutz" className='mr-4' target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
        </div>
        </div>
      </div>
    </header>
  )
}
