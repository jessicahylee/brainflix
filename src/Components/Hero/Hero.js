import './Hero.scss'
import React, { useState } from 'react'
import video from '../../Assets/Data/video-details.json'

function Hero() {
  const [activeVideo, setActiveVideo] = useState(video[0])
  // const activeVideo = video.find((data) => data.id === id)
  // console.log(videoUpload)
  return (
    <>
      <video
        className="video__container"  onClick={() => setActiveVideo(video[0])}
        controls
        poster={activeVideo.image}
      >
        <source src={activeVideo.videoUrl} type="video/mp4" />
      </video>
      <h1 className="video__container-title"> {activeVideo.title} </h1>
      {/* <p className="video__container-description"> {activeVideo.description} </p> */}
    </>
  )
}

export default Hero
