import React from 'react'

const Card = ({name, position, dob, team, status}) => {
  return (
    <div className='mr-5'>
    <h2 className='text-3xl font-bold'>{name}</h2>
    <h3 className='text-xl font-italic'>{position}</h3>
    <h4 className='text-md'>{dob}</h4>
    {status === "Retired" ? <p>Currently Retired</p> : <p>This Player is Playing for {team}</p>}
    </div>
  )
}

export default Card