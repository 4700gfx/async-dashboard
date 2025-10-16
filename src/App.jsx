import { useEffect, useState } from 'react'
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

    const [playerData, setData] = useState({})


   useEffect(()=>{
    async function getData(){
      const res = await fetch('https://www.thesportsdb.com/api/v1/json/123/searchplayers.php?p=Tom_Brady')
      const stats = await res.json();

      //Assign the First Player to a Variable 
      const firstPlayer = stats.player[0]
      console.log(firstPlayer)
      //playerDate = firstPlater 
      setData(firstPlayer)
      
    }
    getData()
   }, []);


  return (
    <div className='flex flex-col'>
    <Header></Header>

    <div className='flex flex-row mx-auto'>
      <Card
        name={playerData.strPlayer}
        position={playerData.strPosition}
        dob={playerData.dateBorn}
        team={playerData.strTeam}
        status={playerData.strStatus}
      />
    </div>

    </div>
  )
}

export default App
