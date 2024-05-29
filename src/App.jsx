import './App.css'
import Header from './components/Header'

import Card from './components/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useParams } from 'react-router-dom'

function App() {

  let url = `http://localhost:3000/video/video`
  const [data, setdata] = useState([])
  let { value } = useParams()

  useEffect(() => {
    const fetchHome = async () => {
      let response = await axios.get(url, {
        params: {
          q: "trending"
        }
      })
      setdata(response.data)
      console.log(response.data)

    }
    fetchHome()

  }, [])



  return (
    <>

      <Header />
      <div className="body">
        
        <img src="kdfsjl/" alt="" />
      </div>

      <div className="hero">
        {
          data.map((xxx) => {
            return <Card key={xxx.id["videoId"]} thumbnail={(xxx.snippet["thumbnails"])["high"]["url"]} title={xxx.snippet["title"]} channelName={xxx.snippet["channelTitle"]} videoId={xxx.id.videoId} />
          })
        }
      </div>

    </>
  )
}

export default App
