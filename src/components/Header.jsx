import React, { useState } from 'react'

const Header = () => {
  const [activeNav, setActiveNav] = useState('Home')
  const [searchQuery, setSearchQuery] = useState('')
  
  const navItems = ['Home', 'Players', 'Teams', 'About Us']
  
  return (
    <header className='fixed left-0 top-0 h-screen w-80 bg-gradient-to-b from-slate-800 via-slate-900 to-blue-900 shadow-2xl flex flex-col'>
      <nav className='flex flex-col h-full p-8'>
        
        {/* Logo/Brand Section */}
        <div className='mb-10'>
          <div className='flex items-center gap-3 mb-8'>
            <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg'>
              <svg className='w-7 h-7 text-white' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/>
              </svg>
            </div>
            <span className='font-bold text-2xl text-white tracking-tight leading-tight'>
              Don's Sport<br/>Dashboard
            </span>
          </div>

          {/* Search Bar */}
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none flex flex-row'>
              <svg className='w-5 h-5 text-slate-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
              </svg>
            </div>
            <input
              type='text'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Search...'
              className='w-full bg-slate-700/50 backdrop-blur-sm text-white placeholder-slate-400 rounded-2xl pl-12 pr-4 py-3 border border-slate-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300'
            />
            <button className='bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl px-4 py-2'>Search</button>
          </div>
        </div>

        {/* Navigation Items - Vertical */}
        <nav className='flex-1'>
          <ul className='flex flex-col gap-3'>
            {navItems.map(nav => (
              <li key={nav}>
                <button
                  onClick={() => setActiveNav(nav)}
                  className={`w-full text-left px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                    activeNav === nav
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                      : 'bg-slate-700/30 text-slate-300 hover:bg-slate-700/50 hover:text-white hover:scale-105'
                  }`}
                >
                  {/* Icon for each nav item */}
                  <div className='w-6 h-6 flex items-center justify-center'>
                    {nav === 'Home' && (
                      <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'/>
                      </svg>
                    )}
                    {nav === 'Players' && (
                      <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'/>
                      </svg>
                    )}
                    {nav === 'Teams' && (
                      <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/>
                      </svg>
                    )}
                    {nav === 'About Us' && (
                      <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'/>
                      </svg>
                    )}
                  </div>
                  {nav}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Section */}
        <div className='mt-auto pt-8 border-t border-slate-700'>
          <div className='flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer'>
            <div className='w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center font-bold text-white'>
              DS
            </div>
            <div className='flex-1'>
              <p className='text-white font-semibold text-sm'>Don Smith</p>
              <p className='text-slate-400 text-xs'>Administrator</p>
            </div>
            <svg className='w-5 h-5 text-slate-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
            </svg>
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Header