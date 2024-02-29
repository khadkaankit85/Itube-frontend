import './videopage.css'
import Header from './Header'
import { useParams } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
const Videopage = () => {
    const { videoId } = useParams()
    console.log(videoId)
    // videoId = "X-UMOhxbW74"
    // const [videoLink, setvideoLink] = useState("")

    // useEffect(() => {
    //     let url = `http://localhost:3000/video/video/watch`
    //     const getVideo = async () => {
    //         let response = await axios.get(`${url}?`, {
    //             params: {
    //                 videoId: props.videoId
    //             }
    //         })
    //         console.log(response)
    //         let videosrc = ""
    //         setvideoLink(videosrc)
    //     }

    //     getVideo()
    // })


    return (
        <>
            <Header />

            <div className="videoSection" style={{ marginTop: "50px" }}>
                <iframe width="823" height="462" src={`https://www.youtube.com/embed/${videoId}`} title="Pirai Pir" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>

                </iframe>

            </div>
        </>
    )
}

export default Videopage
