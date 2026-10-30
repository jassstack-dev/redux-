import React from 'react'
import { NavLink } from 'react-router'


const Navbar = () => {
  return (
    <div className="w-64 h-screen  bg-slate-900 text-slate-300 flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-slate-700">
        <span className="text-xl font-bold text-white">TaskFlow</span>
      </div>

      <div className="flex-1 px-3 py-4 space-y-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
              isActive
                ? 'bg-slate-800 text-white'
                : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
            }`
            
          }
          end
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Dashboard
        </NavLink>

        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
              isActive
                ? 'bg-slate-800 text-white'
                : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
            }`
          }
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          Tasks
        </NavLink>
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
              isActive
                ? 'bg-slate-800 text-white'
                : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
            }`
          }
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          Add Tasks
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar