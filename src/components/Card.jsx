import React from 'react'

const Card = ({name, position, number, currentlyPlaying}) => {
  return (
    <div className='mr-5'>
    <h2 className='text-3xl font-bold'>{name}</h2>
    <h3 className='text-xl font-italic'>{position}</h3>
    <h4 className='text-md'>#{number}</h4>
    <p>This Player is {currentlyPlaying ? "Currently Playing" : "Retired or A Free Agent"}</p>
    </div>
  )
}

export default Card