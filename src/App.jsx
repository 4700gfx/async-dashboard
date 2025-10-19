import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import Header from './components/Header'
import Chart from './components/Chart'
import PlayerCard from './components/PlayerCard'

function App() {

  const [playerData, setData] = useState({})
  const [activeNav, setActiveNav] = useState('Home')
  const [searchResults, setSearchResult] = useState({})
  const [onSearch, setOnSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)



  useEffect(() => {
    async function getData() {
      const res = await fetch('https://www.thesportsdb.com/api/v1/json/123/searchplayers.php?p=Lionel_Messi')
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
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900'>
      {/* Fixed Sidebar - stays on left */}
      <Header />
      
      {/* Main Content Area - offset by sidebar width + margin */}
      <main className='ml-96 p-8'>
        <div className='mini-card-section'>
          {/* Your mini cards can go here */}
        </div>

        <div className='card-section flex flex-wrap gap-6 justify-center mt-8'>
          <PlayerCard
            name={playerData.strPlayer}
            position={playerData.strPosition}
            dob={playerData.dateBorn}
            team={playerData.strTeam}
            status={playerData.strStatus}
            picture={playerData.strThumb}
          />
          <PlayerCard
            name={playerData.strPlayer}
            position={playerData.strPosition}
            dob={playerData.dateBorn}
            team={playerData.strTeam}
            status={playerData.strStatus}
            picture={playerData.strThumb}
          />
          <PlayerCard
            name={playerData.strPlayer}
            position={playerData.strPosition}
            dob={playerData.dateBorn}
            team={playerData.strTeam}
            status={playerData.strStatus}
            picture={playerData.strThumb}
          />
          <PlayerCard
            name={playerData.strPlayer}
            position={playerData.strPosition}
            dob={playerData.dateBorn}
            team={playerData.strTeam}
            status={playerData.strStatus}
            picture={playerData.strThumb}
          />
        </div>
      </main>
    </div>
  )
}

export default App