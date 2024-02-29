/* eslint-disable react/prop-types */
import "./card.css"
import { Link } from "react-router-dom"
const Card = (props) => {
    return (
        <div className='card' >
            <div className="thumbnail" style={{ height: "70%" }}>
                <img width={"420px"} height={"235.66px"} src={props.thumbnail} alt="" />
            </div>

            <div className="detail">
                <div className="channel-pfp">

                    <img src={props.channelPfp} alt="" />

                </div>
                {/* link to another page exists here */}
                <div className="title">
                    <Link preventScrollReset={true} to={`/video/${props.videoId}`}>
                        {props.title}</Link>
                </div>
                <div className="channel-name">{props.channelName} </div>
                <div className="video-small-details">
                    {props.views} {props.time}
                </div>
            </div>
        </div>
    )
}

export default Card
