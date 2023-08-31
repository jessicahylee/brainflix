// // import './Hero.scss'
// // import React, { useEffect, useState } from 'react'
// // import axios from 'axios'

// function Hero() {
//   const [activeVideo, setActiveVideo] = useState([])
//   // const baseURL = 'https://project-2-api.herokuapp.com'
//   const apiKey = '5e71a000-ea04-4ea0-8635-e5e4690ef628'

//   const config = {
//     params: {
//       api_key: apiKey,
//     },
//   }

//   useEffect(() => {
//     axios
//       .get(
//         '`${https://project-2-api.herokuapp.com}/videos/${5e71a000-ea04-4ea0-8635-e5e4690ef628}`, config) ',
//       )
//       .then((response) => {
//         setActiveVideo(response.data)
//       })
//       .catch((error) => {
//         console.error('Error fetching videos:', error)
//       })
//   }, [])
//   return (
//     <>
//       <video
//         onClick={() => setActiveVideo(activeVideo[0])}
//         className="video__container"
//         controls
//         poster={activeVideo.image}
//       >
//         <source src={activeVideo.videoUrl} type="video/mp4" />
//       </video>
//       <h1 className="video__container-title"> {activeVideo.title} </h1>
//       <p className="video__container-description"> {activeVideo.description} </p>
//     </>
//   )
// // }

// // export default Hero

// import './Hero.scss'
// import React, { useState } from 'react'
// // import video from '../../Assets/Data/video-details.json'

// function Hero() {
//   const [activeVideo, setActiveVideo] = useState(video[0])
//   // const activeVideo = video.find((data) => data.id === id)
//   // console.log(videoUpload)
//   return (
//     <>
//       <video
//         onClick={() => setActiveVideo(video[0])}
//         className="video__container"
//         controls
//         poster={activeVideo.image}
//       >
//         <source src={activeVideo.videoUrl} type="video/mp4" />
//       </video>
//       <h1 className="video__container-title"> {activeVideo.title} </h1>
//       {/* <p className="video__container-description"> {activeVideo.description} </p> */}
//     </>
//   )
// }

// export default Hero

import './Hero.scss'
import React from 'react'

function Hero({ videoData }) {
  return (
    <>
      {videoData && (
        <div className="hero">
          <video className="video__container" controls poster={videoData.image}>
            <source src={videoData.videoUrl} type="video/mp4" />
          </video>
          <h1 className="video__container-title">{videoData.title}</h1>
          <p className="video__container-description">
            {videoData.description}
          </p>
        </div>
      )}
    </>
  )
}

export default Hero
