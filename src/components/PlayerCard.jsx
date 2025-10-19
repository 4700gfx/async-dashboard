import React from 'react'

const PlayerCard = ({name, position, dob, team, status, picture}) => {
  return (
    <div className='w-80 m-10 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105'>
      {/* Image Section */}
      <div className='relative h-64 overflow-hidden bg-gradient-to-b from-blue-600/20 to-transparent'>
        <img
          src={picture}
          alt={name}
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent'></div>
        
        {/* Status Badge */}
        <div className='absolute top-4 right-4'>
          {status === "Retired" ? (
            <span className='bg-red-500/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg'>
              Retired
            </span>
          ) : (
            <span className='bg-emerald-500/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1'>
              <span className='w-2 h-2 bg-white rounded-full animate-pulse'></span>
              Active
            </span>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className='p-6 space-y-3'>
        {/* Player Name */}
        <h2 className='text-3xl font-bold text-white tracking-tight'>
          {name}
        </h2>

        {/* Position */}
        <div className='flex items-center gap-2'>
          <div className='w-1 h-6 bg-blue-500 rounded-full'></div>
          <h3 className='text-lg font-medium text-blue-400'>
            {position}
          </h3>
        </div>

        {/* Date of Birth */}
        <div className='flex items-center gap-2 text-slate-400'>
          <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
          </svg>
          <p className='text-sm'>Born: {dob}</p>
        </div>

        {/* Team Info */}
        <div className='pt-3 border-t border-slate-700'>
          {status === "Retired" ? (
            <div className='flex items-center gap-2 text-slate-400'>
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
              <p className='text-sm font-medium'>Currently Retired</p>
            </div>
          ) : (
            <div className='flex items-center gap-2'>
              <svg className='w-5 h-5 text-blue-400' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
              </svg>
              <p className='text-sm text-slate-300'>
                Playing for <span className='font-semibold text-white'>{team}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PlayerCard;