import React from 'react'
import './Videoplayer.css'
import video from '../../assets/video_player.mp4'
const Videoplayer = ({ playstate, setPlaystate }) => {
  return (
    <div className={`video-player ${playstate ? 'show' : 'hide'}`} onClick={() => setPlaystate(false)}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer