import Header from './components/Header'
import Card from './components/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './App.css'



function ResultApp() {
    console.log("made it to result application")
    let url = `http://localhost:3000/video/video`
    const [data, setdata] = useState([])
    let { value } = useParams()
    console.log("this is value", value)

    useEffect(() => {
        const fetchHome = async () => {
            let response = await axios.get(url, {
                params: {
                    q: value
                }
            })
            setdata(response.data)
            console.log(response.data)

        }
        fetchHome()

    }, [])



    return (
        <>
            <div className="hero">
                {
                    data.map((xxx) => {
                        return <Card key={xxx.id["videoId"]} thumbnail={(xxx.snippet["thumbnails"])["high"]["url"]} title={xxx.snippet["title"]} channelName={xxx.snippet["channelTitle"]} videoId={xxx.id.videoId} />
                    })
                }
            </div>
            {/* <Header /> */}
        </>


    )
}

export default ResultApp
