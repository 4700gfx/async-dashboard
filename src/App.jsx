import { useState } from 'react'
import './App.css'
import './index.css'
import Header from './components/Header'
import Chart from './components/Chart'
import Card from './components/Card'

function App() {


  const dummyPlayer = {
    name: 'Shekelton Jean',
    position: 'Quarterback',
    number: 47, 
    currentlyPlaying: true
  }


  return (
    <div className='flex flex-col'>
    <Header></Header>

    <div className='flex flex-row mx-auto'>
      <Card
        name={dummyPlayer.name}
        position={dummyPlayer.position}
        number={dummyPlayer.number}
        currentlyPlaying={dummyPlayer.currentlyPlaying}
      />
    </div>

    </div>
  )
}

export default App
